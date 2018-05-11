'use strict'

const winston = require('winston');
const passport = require('passport');
const AuthDao = require('./auth.dao');

class AuthService {

    constructor() {
        this.authDao = new AuthDao();
    }

    login(req, res, next) {
        winston.info('login');
        res.json(res);
    }

    register(req, res, next) {
        res.send(this.authDao.login());
    }

    refresh(req, res, next) {
        winston.info(req.user);
        res.send(this.authDao.login());
    }

}

module.exports = AuthService;