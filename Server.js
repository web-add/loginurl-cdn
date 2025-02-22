// Importing the necessary modules
const path = require('path');
const app = require(path.join(__dirname, 'MainApp.js'));
const https = require('https');
const fs = require('fs');

// starting server with port 3000
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});

// starting secure server with port 443
https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.pem'))
}, app).listen(443, () => {
    console.log('Secure server started at https://localhost:443');
});