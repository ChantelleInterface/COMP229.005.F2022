// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: passport.js

const passport = require('passport');

module.exports = function() {
    const User = require('../models/user');
    
 // When a user is authenticated, Passport will
 // save its id_property to the session.
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

 //  Later on, when the user object is needed, 
 //  Passport will use the _id property to retrieve
 //  the user object from the database.
    
    passport.deserializeUser((user, done) => {
        User.findOne( 
            { _id: id },
            '-password -salt', 
            (err, user) => {
            done(err, user);
            }
        );
    });
    
    require('./local')();
};