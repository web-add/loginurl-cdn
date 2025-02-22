// importing the necessary modules
const path = require('path');
const cnf = require(path.join(__dirname, '..', 'Config.js'));
const querystring = require('querystring');

function set(key, newValue, token) {
}
function get(key, token) {
}
function get2(key, token) {
}

/**
 * Memparsing query string menjadi objek key-value.
 * @param {string} queryString - Query string (misalnya, username=&pass=).
 * @returns {Object} - Objek key-value hasil parsing.
 */
function parseQuery(queryString) {
}

// exporting the route function
module.exports = (app) => {
    app.all('/player/login/dashboard', function (req, res) {
        let data = "";
        if (req.body) {
            for (let key of Object.keys(req.body)) {
                if (key.match("|")) data = key;
                else if (req.body[key].match("|")) data = req.body[key];
    
                if (get("tankIDName", data) && get("tankIDPass", data)) break;
            }
        }

        res.render('growtopia/DashboardView', { data: data, cnf: cnf });
    });

    app.all('/player/growid/checktoken', (req, res) => {
        const _token = req.body._token;
        const growId = req.body.growId;
        const password = req.body.password;
    
        const token = Buffer.from(
            `_token=${_token}&growId=${growId}&password=${password}`,
        ).toString('base64');
    
        res.send(
            `{"status":"success","message":"Account Validated.","token":"${token}","url":"","accountType":"growtopia"}`,
        );
    });

    app.all('/player/growid/login/validate', (req, res) => {
        res.send(`{"status":"success","message":"Account Validated.","token":"${req.body.refreshToken}","url":"","accountType":"growtopia"}`,);
    });
};