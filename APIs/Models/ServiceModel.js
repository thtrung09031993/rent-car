'use strict'

//implement mongoose
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: String,
    content: String,
    icon: String,
}, {
    collection: 'services',
    max: 1000
});
module.exports = mongoose.model('Service', ServiceSchema);