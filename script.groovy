
def buildImage() {
    echo 'Building image...'
    try {
        sh 'aws --version'
        sh "docker build -t $JOB_NAME:$BUILD_NUMBER ."
        sh "docker tag $JOB_NAME:$BUILD_NUMBER 681800194367.dkr.ecr.eu-central-1.amazonaws.com/$JOB_NAME:$BUILD_NUMBER"
    } catch (err) {
        echo 'Building image failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

def checkPort() {
    echo 'Checking usage of needed port 3080...'
    // Check if an app is running on port 3080
    try {
        def containerRunning = sh(script: 'docker ps -q -f name=nodejs -f expose=3080', returnStatus: true) == 0
        echo containerRunning.toString()

        if (containerRunning) {
            // Stop the existing app running on port 3080
            sh 'docker stop nodejsapp'
            sh 'docker rm nodejsapp'
            sleep 5
        }
    } catch (err) {
        echo 'Freeing up port failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

def deployApp() {
    echo 'Deploying app...'
    try {
        // Deploy the app
        sh "docker push 681800194367.dkr.ecr.eu-central-1.amazonaws.com/$JOB_NAME:$BUILD_NUMBER"
    } catch (err) {
        echo 'Deploying app failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

def runSoapTests() {
    echo 'Running soap tests...'
    // Run the soapui tests
    try {
        sh '/opt/SmartBear/SoapUI-5.7.0/bin/testrunner.sh Tutorial-soapui-project.xml'
    } catch (err) {
        echo 'Soap tests failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

def cleanUp() {
    echo 'Cleaning up...'
    try {
        sh 'docker system prune -af'

        // AWS credentials setup
        withCredentials([
                [
                    $class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                    credentialsId: 'AWS-Account'
                ]
            ]) {
                // Get the repository name and image tag of the image uploaded earlier
                def repositoryName = "$JOB_NAME"
                def imageTag = "$BUILD_NUMBER"

                // Get a list of all image IDs in the repository
                def imageIds = sh(
                    script: "aws ecr describe-images --repository-name ${repositoryName} --query 'imageDetails[].imageDigest' --output text",
                    returnStdout: true
                ).trim().split('\n')

                // Delete images except the one uploaded earlier
                imageIds.each { imageId ->
                    if (imageId != imageTag) {
                    sh "aws ecr batch-delete-image --repository-name ${repositoryName} --image-ids imageDigest=${imageId}"
                    }
                }
            }
    } catch (err) {
        echo 'Cleaning up failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

return this
