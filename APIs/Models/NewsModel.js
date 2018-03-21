'use strict'

//implement mongoose
const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    createdTime: { type: Date, default: Date.now }
}, {
        collection: 'news',
        max: 1000
    });
module.exports = mongoose.model('News', NewsSchema);