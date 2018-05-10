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
  app.use(userRouting);
  app.use(authRouting);
}
 
const registerNotFoundHandler = (app) => app.use((req, res, next) => next(createError(404, 'custom error response')));

const registerErrorHandler = (app) => {
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => res.status(err.status || 500).send(err));
  }
 
  app.use((err, req, res, next) => res.status(err.status || 500).send(err.message));
}

module.exports = routingConfig;