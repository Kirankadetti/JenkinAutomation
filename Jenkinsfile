pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkin-automation"
        CONTAINER_NAME = "jenkin-automation-container"
    }

    stages {

        stage("Checkout") {
            steps {
                echo "Checking out source code..."
                checkout scm
            }
        }

        stage("Build") {
            steps {
                echo "Installing dependencies..."
                bat "npm.cmd ci --no-audit --no-fund"
            }
        }

        stage("Test") {
            steps {
                echo "Running automated tests..."
                bat "npm.cmd test"
            }
        }

        stage("Docker Build") {
            steps {
                echo "Building Docker image..."
                bat "docker build -t %IMAGE_NAME%:latest ."
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying Docker container..."

                bat "docker rm -f %CONTAINER_NAME% 2>nul || exit /b 0"

                bat "docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%:latest"

                echo "Deployment completed successfully."
            }
        }
    }

    post {
        success {
            echo "======================================"
            echo "CI/CD PIPELINE COMPLETED SUCCESSFULLY"
            echo "======================================"
        }

        failure {
            echo "======================================"
            echo "CI/CD PIPELINE FAILED"
            echo "Check the failed stage logs."
            echo "======================================"
        }
    }
}
