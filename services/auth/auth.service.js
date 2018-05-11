'use strict'

const winston = require('winston');
const passport = require('passport');
const AuthDao = require('./auth.dao');

const authService = function() {

    this.authDao = new AuthDao();
    
    this.login = (req, res, next) => {
        winston.info('login');
        res.json(res);
    }

    this.register = (req, res, next) => {
        res.send(this.authDao.login());
    }

    this.refresh = (req, res, next) => {
        winston.info(req.user);
        res.send(this.authDao.login());
    }
}

module.exports = authService;