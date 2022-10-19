// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: users.js


var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users.controller');
const { updateMany } = require('../models/users');

// GET users listing.
router.get('/users', usersController.user);

// GET users listing.
router.get('/contact', usersController.contact);

module.exports = router;


