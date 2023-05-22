
def runFrontendTests() {
    echo 'Running frontend tests...'
    try {
        dir('client') {
            sh 'npm run test -- --coverage --watchAll=false'
        }
    } catch (err) {
        echo 'Frontend tests failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}
def buildBundle() {
    echo 'Building bundle.js...'
    try {
        sh 'pwd'
        sh 'ls -l'
        sh 'npm install'
        sh 'npm run build'
    } catch (err) {
        echo 'Building bundle.js failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

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
        sh '/opt/SmartBear/SoapUI-5.7.0/bin/testrunner.sh -sTestSuite -cTestCase SOAP-REST-project.xml'
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
    } catch (err) {
        echo 'Cleaning up failed!'
        currentBuild.result = 'FAILURE'
        env.ERROR_MESSAGE = err.getMessage()
        throw err
    }
}

return this
