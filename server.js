var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthenication: function (req, res, next) {
        console.log('priate route.');
        next();
    }, 
    logger: function(req, res, next) {
        date = new Date().toString();
        console.log('Request: '+ date +' '+req.method + ' ' +req.originalUrl);
        next();
    }
}

//app.use(middleware.requireAuthenication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthenication, function(req, res) {
    res.send('About Us.');
});

app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
app.listen(PORT);
console.log('Express server started on port '+ PORT);