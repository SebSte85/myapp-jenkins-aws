
def runFrontendTests() {
    echo 'Running frontend tests...'
    try {
        dir('client') {
            // Generate the coverage report
            sh 'npm run test -- --coverage --watchAll=false'

            // Publish the Cobertura coverage report
            echo 'Publishing coverage report...'
            cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/coverage/cobertura-coverage.xml', conditionalCoverageTargets: '70, 0, 0', failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 0', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false

            // Evaluate the coverage report using the cobertura step
            echo 'Evaluating coverage report soon to come...'
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

def snykTest() {
    echo 'Running snyk test...'
    try {
        snykSecurity organisation: 'SebSte85', projectName: 'newapp-jenkins-aws-snyk', severity: 'critical', snykInstallation: 'snyk', snykTokenId: 'snyk-token', targetFile: '**/client/package.json'
    } catch (err) {
        echo 'Snyk test failed!'
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
        def dockerCmd = "docker run -d -p 3080:3000 --name nodejsapp 681800194367.dkr.ecr.eu-central-1.amazonaws.com/$JOB_NAME:$BUILD_NUMBER"
        sshagent(['ec2-server-key']) {
            sh "ssh -o StrictHostKeyChecking=no ec2-user@3.68.108.18 ${dockerCmd}"
            sh "docker push 681800194367.dkr.ecr.eu-central-1.amazonaws.com/$JOB_NAME:$BUILD_NUMBER"
        }
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
