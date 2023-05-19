
def buildJs() {
    echo 'Building bundle.js...'
    // Run the command 'npm run build' to build the bundle.js file
    sh 'pwd'
    sh 'ls -l'
    sh 'cd client'
    sh 'pwd'
    sh 'ls -l'
    sh 'npm install'
    sh 'npm run build'
    sh 'cd ..'
}

def buildImage() {
    echo 'Building image...'
    sh 'aws --version'
    sh "docker build -t $JOB_NAME:$BUILD_NUMBER ."
    sh "docker tag $JOB_NAME:$BUILD_NUMBER public.ecr.aws/v8z9z5a4/$JOB_NAME:$BUILD_NUMBER"
}

def checkPort() {
    echo 'Checking usage of needed port 3080...'
    // Check if an app is running on port 3080
    def containerRunning = sh(script: 'docker ps -q -f name=nodejs -f expose=3080', returnStatus: true) == 0
    echo containerRunning.toString()

    if (containerRunning) {
        // Stop the existing app running on port 3080
        sh 'docker stop nodejsapp'
        sh 'docker rm nodejsapp'
        sleep 5
    }
}

def deployApp() {
    echo 'Deploying app...'
    sh "docker push public.ecr.aws/v8z9z5a4/$JOB_NAME:$BUILD_NUMBER"
}

def runSoapTests() {
    echo 'Running soap tests...'
    // Run the soapui tests
    try {
        sh '/opt/SmartBear/SoapUI-5.7.0/bin/testrunner.sh Tutorial-soapui-project.xml'
    } catch (err) {
        echo 'Soap tests failed!'
        currentBuild.result = 'FAILURE'
        throw err
    }
}

def cleanUp() {
    echo 'Cleaning up...'
    sh 'docker system prune -af'
}

return this
