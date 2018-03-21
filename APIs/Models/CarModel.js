'use strict'

//implement mongoose
const mongoose = require('mongoose');

//Creating the Car Schema
const CarSchema = new mongoose.Schema({
    brand: String,
    class: String,
    type: String,
    fuel: String,
    cc: Number,
    publishedYear: Number,
    passengerCapacity: Number,
    luggageCapacity: Number,
    automatic: Boolean,
    numOfDoors: Number,
    includeServices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarService'
    }], //Array of carServiceIDs
    detail: String,
    rentalPrice: Number,
    drivingRate: Number,
    practicalityRate: Number,
    interiorRate: Number,
    rentedTime: Number,    
    reserved: Boolean,
    image: [String]
}, {
    collection: 'cars',
    max: 1000
});

module.exports = mongoose.model('Car', CarSchema);