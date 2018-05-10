'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const createError = require('http-errors');
const express = require('express');
const config = require('./config/app.config');
const routingConfig = require('./config/routing.config');
const expressConfig = require('./config/express.config');

const app = express();

config();
expressConfig(app);
routingConfig(app);

module.exports = app;
