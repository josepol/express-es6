'use strict'

const winston = require('winston');
const AuthDao = require('./auth.dao');

class AuthService {

    constructor() {
        this.authDao = new AuthDao();
    }

    login(req, res, next) {
        res.send(this.authDao.login());
    }

    register(req, res, next) {
        res.send(this.authDao.login());
    }

    refresh(req, res, next) {
        res.send(this.authDao.login());
    }

}

module.exports = AuthService;