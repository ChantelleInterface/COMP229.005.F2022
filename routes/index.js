// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: index.js

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.home);

// Renders the projects page
router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/about', function(req, res, next) {
  res.render('home', 
  { title: 'About Me',
    name: 'Chantelle'

  });
});

module.exports = router;
