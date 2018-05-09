'use strict'

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const expressConfig = (app) => {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
}

module.exports = expressConfig;