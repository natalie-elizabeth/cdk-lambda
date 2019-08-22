#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { LambdaExampleStack } from '../lib/lambda-example-stack';

const app = new cdk.App();
new LambdaExampleStack(app, 'LambdaExampleStack');
