'use strict'

//Controller implemetation

const review = require('../Controllers/ReviewController');

module.exports = function(app) {
    //route to make new review
    app.route('/review/create/:id')
        .post(review.make_new_review);
}