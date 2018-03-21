'use strict'

//Implement driver controller
var driver = require('../Controllers/DriverController');

module.exports = function(app){
    //Go to drivers page
    app.route('/driver/all')
        .get(driver.goto_driver);
}