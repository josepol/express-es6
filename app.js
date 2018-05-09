'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('./middleware/configs');
const routes = require('./middleware/routes');
const errorHandler = require('./middleware/handlers');

winston.info('API started');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

config();
routes(app);
errorHandler(app);

module.exports = app;
