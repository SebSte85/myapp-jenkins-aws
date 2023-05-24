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
        stage('snyk security test...') {
            steps {
                script {
                    gv.snykTest()
                }
            }
        }
        // This stage should run the frontend unit tests and check the code coverage
        stage('run frontend unit tests...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
            steps {
                    script {
                        gv.runFrontendTests()
                    }
            }
        }
        // This stages does a sonarqube analysis
        stage('sonarqube analysis...') {
            when {
                expression { currentBuild.result != 'FAILURE' }
            }
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
                script {
                    gv.buildImage()
                }
            }
        }
        // This stage should check if an app is running on port 3080 and if so terminate it
        stage('remove current app from port...') {
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
        stage('deploy new app...') {
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
        stage('run soapui tests...') {
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

                gv.createJiraIssue()
            }
        }
        success {
            emailext body: 'The pipeline execution was successfull...', subject: "Job '${JOB_NAME} ${BUILD_NUMBER} execution was a SUCCESS'", to: 'sebby.stem@googlemail.com'
        }
    }
}
