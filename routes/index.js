var express = require('express');
var router = express.Router();

const passport = require('passport');
const index_controller = require('../controllers/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// login
router.get('/login', (req, res) => {
  res.render('login');
});

// process of login
router.post('/login', index_controller.login);

module.exports = router;
