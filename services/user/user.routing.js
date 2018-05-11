const express = require('express');
const winston = require('winston');
const passport = require('passport');

const UserService = require('./user.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const userService = new UserService();

router.get('/list', authMiddleware(), userService.list);

module.exports = router;