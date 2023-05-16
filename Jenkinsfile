// Create a jenkinsfile with three stages, init, build and deploy

pipeline {
    agent any
    // Build tool should be javascript specific
    tools {
        nodejs 'nodejs-12.22.12'
    }
    stages {
        // First stage should be an init stage where a seperate groovy script is called
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
                    echo 'Building bundle.js...'
                    sh 'pwd'
                    sh 'ls -l'
                    sh 'cd client'
                    sh 'pwd'
                    sh 'ls -l'
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'cd ..'
                }
                script {
                    gv.buildJs()
                }
            }
        }
        // Third stage should the build image stage where a buildImage function is called from the seperate groovy script
        stage('build image...') {
            steps {
                script {
                    gv.buildImage()
                }
            }
        }
        // In the fourth stage the app is deployed using the external deployApp method
        stage('deploy app...') {
            steps {
                script {
                    gv.deployApp()
                }
            }
        }
    }
}
