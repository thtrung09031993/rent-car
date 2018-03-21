'use strict'

//Implement approriate controller

const aboutusPage = require('../Controllers/AboutUsPageController');

module.exports = function(app){
    //Route to service page
    app.route('/aboutus')
        .get(aboutusPage.goto_aboutus);
}