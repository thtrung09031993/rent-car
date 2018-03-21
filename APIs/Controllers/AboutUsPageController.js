'use strict'

//Model Implementation
const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');


//Controller function for going to about us route
exports.goto_aboutus = function (req, res) {
    Driver.find().sort({ experience: -1 }).exec(function (err, drivers) {
        if (!err) {
            res.render('aboutus-mainpage', { drivers });
        }
        else {
            res.send(err);
        }
    });
}