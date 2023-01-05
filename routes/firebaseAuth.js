var express = require('express');
var router = express.Router();
let firebaseAuthController = require('../controllers/firebaseAuth');

/* Sign up user */
router.post('/signup', firebaseAuthController.signup);

module.exports = router;