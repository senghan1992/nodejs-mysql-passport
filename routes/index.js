var express = require('express');
var router = express.Router();

const passport = require('passport');
const index_controller = require('../controllers/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local-login'), index_controller.login);

module.exports = router;
