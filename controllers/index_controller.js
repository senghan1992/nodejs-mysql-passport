const passport = require('passport');

function login(req, res) {
    passport.authenticate('local-login', (err, user, info) => {
        if(err) return res.json({message : info.message});
        if(!user) return res.json({message : info.message});
        if(user) return res.json({result : true, message : 'congratulation!'});
    })(req,res);
    // console.log('index_controller/login method');
    // console.log(req.user);
    // console.log(req.message);
}

module.exports.login = login;