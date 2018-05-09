'use strict';
 
exports.register = (app) => {
    app.get('/api', function(req, res, next) {
        res.send('api');
    });
};