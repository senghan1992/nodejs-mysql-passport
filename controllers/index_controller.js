const passport = require('passport');

function login(req, res) {
    console.log('index_controller/login method');
    console.log(req.user);
    console.log(req.message);
}

module.exports.login = login;