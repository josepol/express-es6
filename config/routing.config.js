'use strict';
 
const winston = require('winston');
const createError = require('http-errors');
const userRouting = require('../services/user/user.routing');
const authRouting = require('../services/auth/auth.routing');
 
const routingConfig = (app) => {
  registerAPIEndpoints(app);
  registerNotFoundHandler(app);
  registerErrorHandler(app);
};

const registerAPIEndpoints = (app) => {
  app.use('/users', userRouting);
  app.use('/auth', authRouting);
}
 
const registerNotFoundHandler = (app) => app.use((req, res, next) => next(createError(404, 'custom error response')));

const registerErrorHandler = (app) => {
  if (app.get('env') === 'development') {
    app.use((error, req, res, next) => res.status(error.status || 500).send({error}));
  }
 
  app.use((error, req, res, next) => res.status(error.status || 500).send(error.message));
}

module.exports = routingConfig;