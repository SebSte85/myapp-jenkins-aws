
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
    def currDate = sh(script: 'date +%d-%m-%Y', returnStdout: true).trim()
    sh 'aws --version'
    sh "docker build -t $JOB_NAME:$BUILD_NUMBER-${currDate} ."
    sh "docker tag $JOB_NAME:$BUILD_NUMBER public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER-${currDate}"
}

def deployApp() {
    echo 'Deploying app...'
    sh "docker push public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER-${currDate}"
}

return this
