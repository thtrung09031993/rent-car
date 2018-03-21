'use strict'

//implement mongoose
const mongoose = require('mongoose');

const CarServiceSchema = mongoose.Schema({
    name: String,
    icon: String,
    price: Number,
    type: String
}, {
    collection: 'carservices',
    max: 1000
});
module.exports = mongoose.model('CarService', CarServiceSchema);