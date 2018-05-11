'use strict'

const winston = require('winston');

class AuthDao {

    login() {
        return { username: 'username', password: 'password', token: 'token' };
    }

}

module.exports = AuthDao;