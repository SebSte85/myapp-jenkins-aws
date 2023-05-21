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
            }
        }
        failure {
            script {
                emailext body: "The pipeline execution failed due to...${env.ERROR_MESSAGE}", subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution FAILED'", to: 'sebby.stem@googlemail.com'

                // Get secret credentials from jenkins for secret text
                withCredentials([string(credentialsId: 'jira-jenkins-token', variable: 'SECRET_TEXT')]) {
                    echo 'JIRA-API token fetched...'

                    // Jira configuration
                    def jiraBaseUrl = 'https://digitup.atlassian.net/'
                    def jiraProjectKey = '10001'
                    def jiraIssueType = '10004'
                    def jiraSummary = "Pipeline failed for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    // def jiraDescription = "Pipeline failed for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    def jiraAssignee = '605aefb29620b5006afbc585'
                    def base64token = 'c2ViYXN0aWFuLnN0ZW1tZXJAZGlnLWl0LXVwLmRlOkFUQVRUM3hGZkdGMFdZYWlXeWtNNmVtMVNPb282N3VySy1uWkFsZVNLZGVpQnRZaTd6SXZRSVV5Nko4OGVFSW1YU3BvTjg5TWRVSXdDZmU5aFpkelhUYVpVemR6cTJyQVViNW5XcF85S2s1aF8tOTB0NHJzM0hjRHllTE9wNFYzWE1ENW9zeF9oaEVzRVA4MVdMOW0yeHc3XzhncjA4WG9UNFJ0bTh0T0syRTFXZFI3Zy1MMWZrbz0wN0U3QUU4NA=='

                    // Create Jira issue payload
                    def jiraPayload = """
                {
                    "fields": {
                        "assignee": {
                            "id": "${jiraAssignee}"
                        },
                        "issuetype": {
                            "id": "${jiraIssueType}"
                        },
                        "project": {
                            "id": "${jiraProjectKey}"
                        },
                        "summary": "${jiraSummary}"
                    }
                }
                """

                    // Create Jira issue using REST API
                    sh "curl -u sebastian.stemmer@dig-it-up.de:${env.SECRET_TEXT} -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Basic ${base64token}' --data '${jiraPayload}' ${jiraBaseUrl}/rest/api/3/issue/"
                }
            }
        }
        success {
            emailext body: 'The pipeline execution was successfull...', subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution was a SUCCESS'", to: 'sebby.stem@googlemail.com'
        }
    }
}
