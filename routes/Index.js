// importing the necessary modules
const path = require('path');

// exporting the route
module.exports = (app) => {
    // setting index route
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept',
        );
        console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url} - ${res.statusCode}`);
        next();
    });

    app.use(require('express').static(path.join(__dirname, '..', 'public')));
}
