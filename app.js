var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/user', UserController);

var AuthController = require('./auth/AuthController');
app.use('/auth', AuthController);

module.exports = app;