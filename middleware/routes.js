'use strict';

const winston = require('winston');
 
const routes = (app) => {
    app.get('/api', function(req, res, next) {
        winston.info('api');
        res.send('api');
    });
};

module.exports  = routes;