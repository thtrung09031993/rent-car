'use strict'


//Controller Implementation
var homepage = require('../Controllers/HomepageController');

module.exports = function (app) {
    //Route to homepage
    app.route('/home')
        .get(homepage.display_homepage);
    app.route('/')
        .get(homepage.redirect_homepage);
}