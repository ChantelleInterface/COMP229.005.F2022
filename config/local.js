// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: local.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function() {
    console.log('====> Local Strategy function')

    passport.use(new LocalStrategy((username, password, done) => {
        console.log('====> authLocal function');

        User.findOne({username: username}, (err, user) => {
            if (err) {
                return done(err);
            }
            
            if(!user) {
                return done(null, false, { message: 'Unknown user' });
            }
    
            if(!user.authenticate(password)) {
                return done(null, false, { message: 'Invalid password' });
            }
    
            return done(null, user);
        });
    }));
};

//function authLocal
 
    