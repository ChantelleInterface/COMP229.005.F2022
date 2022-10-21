var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/home', indexController.home);

// Renders the projects page
router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/about', indexController.about);

module.exports = router;
