const express = require('express');
const winston = require('winston');
const UserService = require('./user.service');

const router = express.Router();

const userService = new UserService();

router.get('/list', (req, res, next) => userService.users(req, res, next));

module.exports = router;