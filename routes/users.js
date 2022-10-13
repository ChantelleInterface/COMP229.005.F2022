// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: users.js

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/users', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Users',
      name: 'Chantelle' 
    }
  );
});

module.exports = router;
