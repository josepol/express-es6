const express = require('express');
const winston = require('winston');
const passport = require('passport');

const UserService = require('./user.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const userService = new UserService();

router.get('/listAll', authMiddleware(), userService.listAll);
router.get('/listOne', authMiddleware(), userService.listOne);
router.get('/create', authMiddleware(), userService.create);
router.get('/destroy', authMiddleware(), userService.destroy);
router.get('/update', authMiddleware(), userService.update);

module.exports = router;