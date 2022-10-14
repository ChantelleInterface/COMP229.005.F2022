// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: db.js

// In real project, never expose your credential in your code.
let atlasDB = "mongodb+srv://dbuser:ygquknsvMvWZyh2k@cluster005.nn2nri9.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}