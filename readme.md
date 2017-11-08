# Serverless Lambda Step Functions
This is an example of creating, deploying and invoking AWS Lambda Function which invokes a Step Function. The intention of this repo is mainly to show how to reference a Step Function in order to invoke it. 


## Prerequisites

* You have made you AWS access and secret key available through a provided method, like storing them in the ~/.aws/credentials file or export them into environment variables
* You need to install Node.js  with a minimum version of 6.5.0 
* Then you need to install the serverless CLI with `sudo npm install -g serverless`
* `npm install`


## Deploy

* `serverless deploy -v`


## Test

Now you could invoke the Proxy Lambda with `serverless invoke -f proxy -l` if everything went fine. We should see the output which says that the Step Function execution was started. 


## Undeploy

* `serverless remove`