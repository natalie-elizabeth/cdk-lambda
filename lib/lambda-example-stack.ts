import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import { Rule, Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import path = require('path');

export class LambdaExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Create Lamdba function
    const natLambdaFunction = new lambda.Function(
      this,
      "NatalieLambdaFunc",
      {
        code: lambda.Code.asset(path.join(__dirname, '../lambda')),
        handler: 'example.handler',
        runtime: lambda.Runtime.NODEJS_8_10
      });

    const rule = new Rule(
      this,
      "Rule",
      {
        schedule: Schedule.expression('cron(0 18 ? * MON-FRI *)')
      });

    rule.addTarget(new LambdaFunction(natLambdaFunction))
  }
}