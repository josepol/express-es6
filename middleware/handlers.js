'use strict';
 
const winston = require('winston');
const createError = require('http-errors');
 
const errorHandler = (app) => {
  registerNotFoundHandler(app);
  registerErrorHandler(app);
};
 
function registerNotFoundHandler(app) {
  app.use((req, res, next) => {
    next(createError(404, 'custom error response'));
  });
}

function registerErrorHandler(app) {
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
        .send({message: err.message, error: err});
    });
  }
 
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
      .send(err.message);
  });
}

module.exports = errorHandler;