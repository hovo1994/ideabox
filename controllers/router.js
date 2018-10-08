var fs = require('fs');
var atob = require('atob');
var path = require('path');
var ActiveDirectory = require('activedirectory');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index.html');
    });
}
