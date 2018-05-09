'use strict'

const winston = require('winston');
const UserDao = require('./user.dao');

class UserService {

    constructor() {
        this.userDao = new UserDao();
    }

    users(req, res, next) {
        winston.info('Service :: users :: started');
        res.send(this.userDao.list())
    }
}

module.exports = UserService;