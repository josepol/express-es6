const express = require('express');
const winston = require('winston');
const passport = require('passport');
const AuthService = require('./auth.service');

const router = express.Router();
const authService = new AuthService();

const authMiddleware = () => passport.authenticate('bearer', { session: false });

router.get('/login', (req, res, next) => authService.login(req, res, next));
router.get('/register', (req, res, next) => authService.register(req, res, next));
router.get('/refresh', authMiddleware(), (req, res, next) => authService.refresh(req, res, next));

module.exports = router;