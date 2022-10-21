let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

// GET users listing.
router.get('/users', usersController.user);

// GET users listing.
router.get('/contact', usersController.contact);

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
