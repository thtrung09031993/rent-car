'use strict'

//implement mongoose
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    nationality: String
},{
    collection: 'customers',
    max: 1000
})
module.exports = mongoose.model('Customer', CustomerSchema);