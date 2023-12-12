pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        tool(name: 'NodeJS', type: 'node js')
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