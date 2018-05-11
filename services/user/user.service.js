'use strict'

const winston = require('winston');
const UserDao = require('./user.dao');

const userService = function() {

    this.userDao = new UserDao();

    this.users = (req, res, next) => {
        winston.info('Service :: users :: started');
        res.send(this.userDao.list());
    }
}

module.exports = userService;