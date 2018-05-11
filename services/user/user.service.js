'use strict'

const winston = require('winston');
const UserDao = require('./user.dao');

const userService = function() {

    this.userDao = new UserDao();

    this.list = (req, res, next) => {
        winston.info('Service :: users :: list');
        res.send(this.userDao.list());
    }
}

module.exports = userService;