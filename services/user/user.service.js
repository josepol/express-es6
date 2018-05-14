'use strict'

const winston = require('winston');
const UserDao = require('./user.dao');

const userService = function() {

    this.userDao = new UserDao();

    this.list = (req, res, next) => {
        winston.info('Service :: users :: list');
        res.send(this.userDao.list());
    }

    this.listmysql = (req, res, next) => {
        winston.info('Service :: users :: list-mysql');
        this.userDao.listMySQL().then(() => res.send('OKK'))
        .catch(error => res.send(error))
    }
}

module.exports = userService;