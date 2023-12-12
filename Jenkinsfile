pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/ravindergil/Cypress-POM-JobSearch-Framework.git', branch: 'main')
      }
    }

    stage('Test') {
      steps {
        bat 'npm cypress run'
      }
    }

  }
}