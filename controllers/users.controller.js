let User = require('../models/users');
let passport = require('passport');

exports.user = function (req, res, next) {
    res.render('users', {
        title: 'User',
        userName: req.user ? req.user.username : '',
        name: 'Student',
    });
}

exports.contact = function (req, res, next) {
    res.render('contact', {
        title: 'Contact',
        userName: req.user ? req.user.username : '',
        name: 'Chantelle'
    });
}
