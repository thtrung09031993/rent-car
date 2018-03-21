'use strict'

//implement mongoose
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    address: String,
    phone: String,
    email: String,
    image: String,
    type: String
},
    {
        collection: 'contacts',
        max: 1000
    });
module.exports = mongoose.model('Contact', ContactSchema);