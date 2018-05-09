'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const path = require('path');

const config = () => {
  let configFilePath = path.join(__dirname, '../config.json');
 
  nconf.overrides({});
  nconf.env().argv();
  nconf.file(configFilePath);
 
  nconf.defaults({
    application: {
      port: 3100
    }
  });

  winston.info('app - config: logging: ', nconf.get('logging'));
  winston.info('app - config: config file loaded from: ', configFilePath);
  winston.info('app - config: application:', nconf.get('application'));
};

module.exports = config;