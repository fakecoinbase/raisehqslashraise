#!/usr/bin/env groovy
@Library('utils') _

pipeline {

  agent {
    docker {
      image "node:11"
    }
  }

  stages {

    stage('INSTALL DEPENDENCIES'){
      steps{
        nodejs(nodeJSInstallationName: 'node_11') {
          sh 'echo "- INSTALLING DEPENDENCIES"'
          sh 'npx lerna bootstrap'
        }
      }
    }

    stage('COMPILING COMPONENTS'){
      steps{
        nodejs(nodeJSInstallationName: 'node_11') {
          sh 'echo "- COMPILING COMPONENTS"'
          sh 'npx lerna run compile:components'
        }
      }
    }

    stage('LINKING COMPONENTS'){
      steps{
        nodejs(nodeJSInstallationName: 'node_11') {
          sh 'echo "- LERNA BOOTSTRAP"'
          sh 'npx lerna bootstrap'
        }
      }
    }

    stage('COMPILING ONBOARDING'){
      steps{
        nodejs(nodeJSInstallationName: 'node_11') {
          sh 'echo "- COMPILING ONBOARDING"'
          sh 'npx lerna run compile:onboarding'
        }
      }
    }

    stage('LINKING ONBOARDING'){
      steps{
        nodejs(nodeJSInstallationName: 'node_11') {
          sh 'echo "- LERNA BOOTSTRAP"'
          sh 'npx lerna bootstrap'
        }
      }
    }

    stage('BUILD'){
      steps {
        sh 'echo "- LERNA BUILD"'
        sh 'npm run client:${BUILD_SH}'
      }
    }

    stage('CLEAN BUCKET') {
      steps {
        withAWS(credentials: env.AWSUSER) {
          //Clean all Bucket
          s3Delete(bucket: env.BUCKETNAME, path: "/")
        }
      }
    }

    stage('UPLOAD BUCKET') {
      steps {
        withAWS(credentials: env.AWSUSER) {
          //Upload Files to root path
          s3Upload(bucket: env.BUCKETNAME, file: env.BUILD_PATH)
        }
      }
    }

  }

  environment {
    AWSUSER = 'aws_cred_id'
    BUILD_PATH = './packages/client/build'
    BUCKETNAME = utils.getS3Bucket()
    BUILD_SH   = utils.buildByEnv()
  }

  options {
    disableConcurrentBuilds()
  }

  post {
    failure { script{ utils.nFailure() } }
    fixed { script { utils.nFixed() } }
    unstable { script { utils.nUnstable() } }
    success { script { utils.nSuccess() } }
    cleanup { script{ cleanWs() } }
  }
}