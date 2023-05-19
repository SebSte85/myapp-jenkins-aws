// Create a jenkinsfile with three stages, init, build and deploy

pipeline {
    agent any
    // Build tool should be javascript specific
    tools {
        nodejs 'nodejs-12.22.12'
    }
    stages {
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
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                    credentialsId: 'AWS-Account'
                ]]) {
                    sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/v8z9z5a4'
                }
                script {
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
                    emailext body: 'Woop Woop', subject: 'Email Plugin', to: 'sebby.stem@googlemail.com'
            }
        }
    }
}
