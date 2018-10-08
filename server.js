var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var appConfig = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

var PORT = process.env.PORT || appConfig.port;
var HOST = appConfig.host;
var app = express();

process.env.PWD = process.cwd();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

require('./controllers/router.js')(app);
require('./controllers/api.js')(app);
 
app.use(express.static(process.env.PWD + '/public'));

app.listen(PORT, HOST);

console.log("Server is running on " + HOST + ":" + PORT);

process.on('uncaughtException', function(err) {
    console.log('Unhandled Exception: ' + err);

    setTimeout(function() {
        process.exit();
    }, 500);
});

process.on('SIGINT', function() {
    console.log('exiting');
    process.exit();
});