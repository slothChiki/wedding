pipeline {
  agent any
  environment {
      /* 환경 변수 정의 */
  }
  stages {
      stage('Start') {
          steps {
            sh 'npm install'
          }
      }
      stage('Build') {
          steps {
			sh 'npm run build:nest'
            sh 'npm run build:next'
          }
      }
      stage('Run') {
          steps {
           sh 'npm run start:prod'
          }
      }
      stage('Prune') {
        steps {
          /* 필요 없는 도커 이미지 삭제 작업 */
        }
      }
    }
    post {
        success {
	        /* 
				성공 시 수행할 작업 (ex. 슬랙 발송) 
			*/
        }
        failure {
	        /* 
				실패 시 수행할 작업 (ex. 슬랙 발송, 이미지 삭제)
			*/
        }
    }
}