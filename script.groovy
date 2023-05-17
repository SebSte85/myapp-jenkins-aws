
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
    sh "docker tag $JOB_NAME:$BUILD_NUMBER public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER"
}

def deployApp() {
    echo 'Deploying app...'
    sh "docker push public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER"
}

return this
