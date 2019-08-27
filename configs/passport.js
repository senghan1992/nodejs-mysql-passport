const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const dbconfig = require('./config');
const connection = mysql.createConnection(dbconfig.database);
var bcrypt = require('bcrypt');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            session: false,
            passReqToCallback: true
        },
        (req, email, password, done) => {
            // console.log("넘어온 password 값 : " + bcrypt.hash(password));
            connection.query('select * from members where loginId = ?', [email], (err, result) => {
                if (err) return done(err);
                if (result.length === 0) {
                    console.log('해당 유저가 없습니다');
                    return done(null, false, { message: 'Incorrect username' });
                }
                if (!bcrypt.compareSync(password, result[0].password)) {
                    console.log('패스워드가 일치하지 않습니다');
                    // console.log('DB에서 불러온 password : ' + result[0].password)
                    return done(null, false, { message: 'Incorrect password' });
                }
                console.log('로그인 성공');
                return done(null, result[0]);
            });
        }
    ));
}