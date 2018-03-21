'use strict'

//implement mongoose
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    drivingRate: Number,
    practicalityRate: Number,
    interiorRate: Number,
    comment: String,
    name: String,// use for anonymous
    email: String,// use for anonymous
    website: String,// use for anonymous
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },//use for authorized user
    createdTime: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'reviews',
    max: 1000
});
module.exports = mongoose.model('Review', ReviewSchema);