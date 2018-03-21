'use strict'

//Implement approriate controller

const service = require('../Controllers/ServiceController');

module.exports = function(app){
    //Route to service page
    app.route('/service')
        .get(service.goto_service);
}