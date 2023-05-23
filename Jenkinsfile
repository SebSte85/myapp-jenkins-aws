/* groovylint-disable LineLength, NestedBlockDepth */

pipeline {
    agent any
    // Build tool should be javascript specific
    tools {
        nodejs 'nodejs-14.0.0'
    }
    stages {
        // This stage should be an init stage where a seperate groovy script is loaded
        stage('init...') {
            steps {
                script {
                    gv = load 'script.groovy'
                }
            }
        }
        // This stage runs a snyk test
        stage('snyk test...') {
            steps {
                script {
                    gv.snykTest()
                }
            }
        }
        // This stage should run the frontend unit tests and check the code coverage
        stage('run frontend unit tests...') {
            steps {
                    script {
                        gv.runFrontendTests()
                    }
            }
        }
        // This stages does a sonarqube analysis
        stage('sonarqube analysis...') {
            steps {
                script {
                    withSonarQubeEnv('SonarCloud') {
                        echo 'Running SonarQube analysis...'
                    }
                }
            }
        }
        // This stage should be a build js stage where a buildJs function in the groovy script is called
        stage('build bundle.js...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
            steps {
                dir('client') {
                    script {
                        gv.buildBundle()
                    }
                }
            }
        }
        // This stage should the build image stage where a buildImage function is called from the seperate groovy script
        stage('build image...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                    credentialsId: 'AWS-Account'
                ]]) {
                    sh 'aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 681800194367.dkr.ecr.eu-central-1.amazonaws.com'
                }
                script {
                    gv.buildImage()
                }
            }
        }
        // This stage should check if an app is running on port 3080 and if so terminate it
        stage('check app...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
            steps {
                script {
                    gv.checkPort()
                }
            }
        }
        // Here the app is deployed using the external deployApp method
        stage('deploy app...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
            steps {
                script {
                        gv.deployApp()
                    }
                }
            }
        // Here the soapui tests are run inside a try catch block
        stage('run soap tests...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
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
                    def jiraDescription = "Pipeline failed because of ${env.ERROR_MESSAGE}"
                    def jiraAssignee = '605aefb29620b5006afbc585'

                    // Create Jira issue payload
                    def jiraPayload = """
                {
                    "fields": {
                        "assignee": {
                            "id": "${jiraAssignee}"
                        },
                        "description": {
                            "content": [
                                {
                                    "content": [
                                        {
                                            "text": "${jiraDescription}",
                                            "type": "text"
                                        }
                                    ],
                                    "type": "paragraph"
                                }
                            ],
                            "type": "doc",
                            "version": 1
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
                    sh "curl -u sebastian.stemmer@dig-it-up.de:${env.SECRET_TEXT} -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --data '${jiraPayload}' ${jiraBaseUrl}/rest/api/3/issue/"
                }
            }
        }
        success {
            emailext body: 'The pipeline execution was successfull...', subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution was a SUCCESS'", to: 'sebby.stem@googlemail.com'
        }
    }
}
