// Importing the necessary modules
const path = require('path');
const app = require(path.join(__dirname, 'MainApp.js'));

// starting server with port 3000
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});