'use strict'

//Model Implementation
const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');

exports.goto_driver = function (req,res) {
    Driver.find().sort({experience: -1}).exec(function(err,drivers){
        if (!err){
            res.render('driver-mainpage', {drivers});
        }
        else {
            res.send(err);
        }
    });
}