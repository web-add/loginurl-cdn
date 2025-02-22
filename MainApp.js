// importing the necessary modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// creating an express app
const app = express();

// importing the security
for (let file of fs.readdirSync(path.join(__dirname, 'security'))) {
    require(path.join(__dirname, 'security', file))(app);
}

// importing the middlewares
for (let file of fs.readdirSync(path.join(__dirname, 'middleware'))) {
    require(path.join(__dirname, 'middleware', file))(app);
}

// importing the routes
for (let file of fs.readdirSync(path.join(__dirname, 'routes'))) {
    require(path.join(__dirname, 'routes', file))(app);
}

// exporting express app
module.exports = app;