// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:ygquknsvMvWZyh2k@cluster005.nn2nri9.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}