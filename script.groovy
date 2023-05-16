def buildJs() {
    echo 'Building bundle.js...'
    // Run the command 'npm run build' to build the bundle.js file
    sh 'cd my-app && cd client'
    sh 'npm install'
    sh 'npm run build'
    sh 'cd .. && cd ..'
}

def buildImage() {
    echo 'Building image...'
    sh 'aws --version'
    sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/v8z9z5a4'
    sh "docker build -t $JOB_NAME:$BUILD_NUMBER ."
    sh "docker tag $JOB_NAME:$BUILD_NUMBER public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER"
}

def deployApp() {
    echo 'Deploying app...'
    sh "docker push public.ecr.aws/v8z9z5a4/myapp-jenkins-aws:$BUILD_NUMBER"
}

return this
