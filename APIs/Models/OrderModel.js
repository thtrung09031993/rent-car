'use strict'

//implement mongoose
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    pickupAddr: String,
    dropoffAddr: String,
    pickupDate: String,
    dropoffDate: String,
    pickupTime: String,
    dropoffTime: String,
    extraServices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarService'
    }], //Array of carServicesIDs
    paymentOption: String,
    addInfo: String,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    carID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    processed: Boolean,
    createdTime: { type: Date, default: Date.now }
},
    {
        collection: 'orders',
        max: 1000
    });
module.exports = mongoose.model('Order', OrderSchema);