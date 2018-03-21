'use strict'

//implement mongoose
const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    fname: String,
    lname: String,
    image: String,
    experience: Number,
    detail: String,
    linkFacebook: String,
    linkTwitter: String,
    linkInstagram: String
}, {
    collection: 'drivers',
    max: 1000
});
module.exports = mongoose.model('Driver', DriverSchema);