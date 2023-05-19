
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
    echo 'Checking usage of needed port...'
    // Check if an app is running on port 3080 and if so terminate it
    sh 'docker stop nodejsapp || true'
    sh 'docker rm nodejsapp || true'
}

def deployApp() {
    echo 'Deploying app...'
    sh "docker push public.ecr.aws/v8z9z5a4/$JOB_NAME:$BUILD_NUMBER"
}

def cleanUp() {
    echo 'Cleaning up...'
    sh 'docker system prune -af'
}

return this
