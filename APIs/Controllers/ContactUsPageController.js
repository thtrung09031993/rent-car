'use strict'

//Model Implemetation
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

exports.goto_contactus = function (req, res) {
    Contact.find().sort({ type: 1 }).exec(function (err, contacts) {
        res.render('contactus-mainpage', { contacts });
    });
}