var fs = require('fs');
var atob = require('atob');
var path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index.html');
    });
}
