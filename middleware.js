


    var middleware = {
        requireAuthenication: function (req, res, next) {
            console.log('priate route.');
            next();
        },
        logger: function (req, res, next) {
            date = new Date().toString();
           console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
            next();
        }
    }

module.exports = middleware;