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

        stage  ('Setting Environment Variabel'){
            steps {
                dir(WORKSPACE_LOCATION) {
                    sh "rm -rf .env"
                    script {
                        params.each {param -> 
                            echo "${param.key.trim()}=${param.value.trim()}"
                            sh "echo '${param.key.trim()}=${param.value.trim()}' >> .env"
                        }
                    }
                }
            } 
        }

        stage ('Remove Docker Old Build') {
            steps {
                dir(WORKSPACE_LOCATION) {
                    sh 'docker rm cleanearth -f'
                    sh 'docker rmi cleanearth:latest -f'
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
                    sh 'docker run -p 127.0.0.1:5000:80 --restart on-failure --name cleanearth -d cleanearth:latest '
                }
            }
        }
    }
}