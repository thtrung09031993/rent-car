'use strict'

//Model implementation
const mongoose = require('mongoose');
const Service = mongoose.model('Service');

//Controller function for routing to service page
exports.goto_service = function (req, res) {
    Service.find(function(err,services){
        if (!err){
            res.render('service-mainpage', {services});
        }
        else {
            res.send(err);
        }
    });
}