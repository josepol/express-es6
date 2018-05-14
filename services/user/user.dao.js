'use strict'

const winston = require('winston');

const sequelize = require('../../config/sequelize');

const userDao = function() {

    this.list = () => {
        winston.info('Dao :: users :: started');
        return ['test dao 1', 'test dao 2'];
    }

    this.listMySQL = () => {
        winston.info('Dao :: users :: started');
        sequelize.User.create({
            user_name: 'jose 123',
            created_at: new Date()
        });
    }
}

module.exports = userDao;