pipeline {
    agent any

    environment {
        JOB_NAME_PATH = "${env.JOB_NAME.replace('/', '_')}"
        WORKSPACE_LOCATION = "/var/www/html/jenkins-project/${JOB_NAME_PATH}"
    }

    stages {
        stage ('Settings Workspace Location Jenkins Project') {
            steps {
                dir(WORKSPACE_LOCATION) {
                    checkout scm
                    echo 'Success Github Clone And Change Folder'
                }
            }
        }

        stage ('Remove Docker Old Container') {
            steps {
                dir(WORKSPACE_LOCATION) {
                    sh 'docker rm cleanearth -f'
                }
            }
        }

        stage ('building docker images') {
            steps {
                dir(WORKSPACE_LOCATION) {
                    sh 'docker build -t cleanearth:latest .'
                    sh 'docker image prune -f'
                }
            }
        }

        stage ('running docker container') {
            steps {
                dir(WORKSPACE_LOCATION) {
                    sh 'docker run -p 127.0.0.1:5000:80 --restart on-failure --name -d cleanearth cleanearth:latest '
                }
            }
        }
    }
}