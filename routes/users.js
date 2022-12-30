// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: users.js

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let authController = require('../controllers/auth');

/* GET users listing. */
router.get('/me', authController.requireAuth, usersController.myprofile);

// router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// router.get('/signout', usersController.signout);

module.exports = router;
