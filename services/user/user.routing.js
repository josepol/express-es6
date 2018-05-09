const express = require('express');
const winston = require('winston');
const UserService = require('./user.service');

const router = express.Router();

router.get('/users', function(req, res, next) {
  winston.info('Endpoint :: users - started');
  const users = UserService.list();
  res.send(users);
  winston.info('Endpoint :: users - finished');
});

module.exports = router;