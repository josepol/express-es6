'use strict'

const winston = require('winston');

const userService = () => {

    return {
        list: () => {
            winston.info('Service :: users :: started');
            return ['test 1', 'test 2', 'test 3']
        }
    }
}

module.exports = userService;