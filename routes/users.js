// Student name: Chantelle Lawson
// Student number: 301216199
// Midterm Due Date: October 8th 2022
// Filename: users.js

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/contact', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
      name: 'Chantelle' 
    }
  );
});

module.exports = router;
