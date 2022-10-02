var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/chantelle', function(req, res, next) {
  res.send('This is my user page. I am Chantelle.');
});

module.exports = router;
