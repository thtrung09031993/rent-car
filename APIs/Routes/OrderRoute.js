'use strict';

function isLoggedIn(req,res,next) {
    if (req.session.user || req.user) {
        next();
    }
    else {
        res.redirect('/user/login');
    }
}

//Controller Implementation
var order = require('../Controllers/OrderController');

module.exports = function (app) {
     //Route for going to reserved page
     app.route('/order/:id')
        .get(isLoggedIn,order.reserve_car);

     app.route('/order/reserved/')
        .post(order.make_an_order);

     app.route('/user/reserved/')
        .get(isLoggedIn, order.go_to_user_reserved);

     app.route('/user/abort/')
        .post(isLoggedIn, order.cancel);
    //  app.route('/success').get()
} 