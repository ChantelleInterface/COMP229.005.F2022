var express = require('express');
var router = express.Router();
let firebaseAuthController = require('../controllers/firebaseAuth');

/* GET home page. */
router.post('/signup', firebaseAuthController.signup);

module.exports = router;