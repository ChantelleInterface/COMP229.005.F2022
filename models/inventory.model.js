// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: users.js

let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);