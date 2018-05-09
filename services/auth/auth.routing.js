const express = require('express');
const winston = require('winston');
const AuthService = require('./auth.service');

const router = express.Router();
const authService = new AuthService();

router.get('/auth/login', (req, res, next) => authService.login(req, res, next));
router.get('/auth/register', (req, res, next) => authService.register(req, res, next));
router.get('/auth/refresh', (req, res, next) => authService.refresh(req, res, next));

module.exports = router;