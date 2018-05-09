'use strict'

const winston = require('winston');

const userService = () => {

    winston.info('UserService started');

    return {
        list: () => {
            winston.info('UserService list started');
            return ['test 1', 'test 2', 'test 3']
        }
    }
}

module.exports = userService;