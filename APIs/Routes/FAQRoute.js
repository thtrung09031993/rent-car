'use strict'

var faq = require('../Controllers/FAQController');

module.exports = function(app){
    //Go to faq page
    app.route('/faq')
        .get(faq.goto_faq);
    
    //Go to make question page and make new question   
    app.route('/faq/question')
        .get(faq.goto_faq_makequestion)
        .post(faq.create_new_question);   
}