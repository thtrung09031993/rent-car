'use strict'

//Controller implementation
var contact = require('../Controllers/ContactUsPageController');

module.exports = function(app){
    //Route to contact us page
    app.route('/contactus')
        .get(contact.goto_contactus);
}