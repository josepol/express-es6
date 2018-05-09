'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const createError = require('http-errors');
const express = require('express');
const config = require('./config/app.config');
const routingConfig = require('./config/app-routing.config');
const userRouting = require('./services/user/user.routing');
const expressConfig = require('./config/app-express-config');

const app = express();

expressConfig(app);
config();
routingConfig(app);

module.exports = app;
