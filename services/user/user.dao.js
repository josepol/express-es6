'use strict'

const winston = require('winston');

class UserDao {

    list() {
        winston.info('Dao :: users :: started');
        return ['test dao 1', 'test dao 2']
    }
}

module.exports = UserDao;