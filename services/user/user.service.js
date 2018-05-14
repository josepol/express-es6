'use strict'

const winston = require('winston');
const UserDao = require('./user.dao');

const userService = function() {

    this.userDao = new UserDao();

    this.listAll = (req, res, next) => {
        winston.info('Service :: users :: listAll');
        this.userDao.listAll().then(allUsers => res.send(allUsers))
        .catch(error => res.send(error));
    }

    this.listOne = (req, res, next) => {
        winston.info('Service :: users :: listOne');
        this.userDao.listOne().then(user => res.send(user))
        .catch(error => res.send(error));
    }

    this.create = (req, res, next) => {
        winston.info('Service :: users :: create');
        this.userDao.create().then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }

    this.destroy = (req, res, next) => {
        winston.info('Service :: users :: destroy');
        this.userDao.destroy().then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }

    this.update = (req, res, next) => {
        winston.info('Service :: users :: update');
        this.userDao.update().then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }
}

module.exports = userService;