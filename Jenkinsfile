// Create a jenkinsfile with three stages, init, build and deploy

pipeline {
    agent any
    // Build tool should be javascript specific
    tools {
        nodejs 'nodejs-12.22.12'
    }
    stages {
        stage('Get AWS Credentials') {
            steps {
                withCredentials([[
                $class: 'AmazonWebServicesCredentialsBinding',
                accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                credentialsId: 'AWS-Account'
            ]]) {
                    echo 'AWS credentials fetched'
                    env.AWS_ACCESS_KEY_ID = sh(script: 'echo $AWS_ACCESS_KEY_ID', returnStdout: true).trim()
                    env.AWS_SECRET_ACCESS_KEY = sh(script: 'echo $AWS_SECRET_ACCESS_KEY', returnStdout: true).trim()
            }
            }
        }
        // First stage should be an init stage where a seperate groovy script is loaded
        stage('init...') {
            steps {
                script {
                    gv = load 'script.groovy'
                }
            }
        }
        // Second stage should be a build js stage where a buildJs function in the groovy script is called
        stage('build bundle.js...') {
            steps {
                dir('client') {
                    sh 'pwd'
                    sh 'ls -l'
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'cd ..'
                }
            }
        }
        // Third stage should the build image stage where a buildImage function is called from the seperate groovy script
        stage('build image...') {
            steps {
                script {
                    sh "aws ecr-public get-login-password --region us-east-1 | docker login --username $AWS_ACCESS_KEY_ID --password-stdin $AWS_SECRET_ACCESS_KEY@public.ecr.aws/v8z9z5a4"
                    gv.buildImage()
                }
            }
        }
        // Fourth stage should check if an app is running on port 3080 and if so terminate it
        stage('check app...') {
            steps {
                script {
                    gv.checkPort()
                }
            }
        }
        // In the fifth stage the app is deployed using the external deployApp method
        stage('deploy app...') {
            steps {
                script {
                    def dockerCmd = "docker run -d -p 3080:3000 --name nodejsapp public.ecr.aws/v8z9z5a4/$JOB_NAME:$BUILD_NUMBER"
                    sshagent(['ec2-server-key']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@3.68.108.18 ${dockerCmd}"
                        gv.deployApp()
                    }
                }
            }
        }
        // In the sixth stage the soapui tests are run inside a try catch block
        stage('run soap tests...') {
            steps {
                script {
                    gv.runSoapTests()
                }
            }
        }
    }
    post {
        always {
            script {
                    gv.cleanUp()
            }
        }
        failure {
            emailext body: "The pipeline execution failed due to...${env.ERROR_MESSAGE}", subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution FAILED'", to: 'sebby.stem@googlemail.com'
        }
        success {
            emailext body: 'The pipeline execution was successfull...', subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution was a SUCCESS'", to: 'sebby.stem@googlemail.com'
        }
    }
}
