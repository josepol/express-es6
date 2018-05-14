'use strict'

const winston = require('winston');

const sequelize = require('../../config/sequelize');

const userDao = function() {

    this.listAll = () => {
        winston.info('Dao :: users :: listAll');
        return sequelize.User.findAll();
    }

    this.listOne = (id) => {
        winston.info('Dao :: users :: listOne');
        return sequelize.User.findOne({
            where: {id} 
        });
    }

    this.create = (user) => {
        winston.info('Dao :: users :: create');
        return sequelize.User.create(user);
    }

    this.destroy = (id) => {
        winston.info('Dao :: users :: listOne');
        return sequelize.User.destroy({
            where: {id: '6b4c2aa0-5764-11e8-8db2-cfb53764c2d8'}
        });
    }

    this.update = (id) => {
        winston.info('Dao :: users :: update');
        return sequelize.User.update({
            user_name: 'asdasdasd'
        }, {
            where: {id: '6b4c2aa0-5764-11e8-8db2-cfb53764c2d8'}
        });
    }
}

module.exports = userDao;