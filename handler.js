'use strict';

var aws = require('aws-sdk')

module.exports.proxy = (event, context, callback) => {
  var params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify({})
  }
  var stepfunctions = new aws.StepFunctions()
  stepfunctions.startExecution(params, function (err, data) {
    if (err) {
      console.log('err while executing step function')
    } else {
      console.log('started execution of step function')
    }
  })
}

module.exports.hello = (event, context, callback) => {
  callback(null, null);
};
module.exports.ciao = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'ciao world!'
    }),
  };
  callback(null, response);
};