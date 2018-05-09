'use strict';
 
const winston = require('winston');
const createError = require('http-errors');
const userRouting = require('../services/user/user.routing');
 
const routingConfig = (app) => {
  app.use(userRouting);
  registerNotFoundHandler(app);
  registerErrorHandler(app);
};
 
const registerNotFoundHandler = (app) => {
  app.use((req, res, next) => {
    next(createError(404, 'custom error response'));
  });
}

const registerErrorHandler = (app) => {
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500).send({message: err.message, error: err});
    });
  }
 
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
  });
}

module.exports = routingConfig;