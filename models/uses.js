// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: uses.js

let mongoose = require('mongoose');

//create a new model class
let userModel = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
        },
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        password: {
            type: String,
            validate: [(password) => {
                return password && password.length > 6;
            }, 'Password must be at least 6 characters long']
        },
        created: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "user"
    }
);

module.exports = mongoose.model('user', userModel);