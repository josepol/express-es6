const express = require('express');
const winston = require('winston');
const passport = require('passport');

const AuthService = require('./auth.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const authService = new AuthService();

router.get('/login', authService.login);
router.get('/register', authService.register);
router.get('/refresh', authMiddleware(), authService.refresh);

module.exports = router;