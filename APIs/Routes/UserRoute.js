'use strict';

//Controller Implementation
var user = require('../Controllers/UserController');

//Function to protect the login route
function redirectToHomepageIfLoggedIn(req, res, next) {
    if (req.user || req.session.user) {
        res.redirect('/home');
    }
    else {
        next();
    }
}

module.exports = function (app, passport) {
    //Route for login page
    app.route('/user/login')
        .get(redirectToHomepageIfLoggedIn,user.goToLogin)
        .post(user.login);

    //Route to logout 
    app.route('/logout')
        .get(user.logout);

    //Route for facebook passport
    app.route('/auth/facebook/')
        .get(passport.authenticate('facebook'));
    app.route('/auth/facebook/callback')
        .get(passport.authenticate('facebook', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));

    //Route for making new user
    app.route('/user/registration')
        .post(user.createNewUser);

    //Route for the password recovering page    
    app.route('/user/forgot')
        .get(user.gotoForgot)
        .post(user.forgot);

    //Route for getting reset password token, send to server then redirect if successful
    app.route('/user/reset/:token')
        .get(user.gotoReset)
        .post(user.reset);

    app.route('/user/success')
        .get(user.success);

    //Route to the profile detail page
    app.route('/user/profile')
        .get(user.go_to_profile);    

    //Route for get addtional info of user
    app.route('/user/addinfo')
        .get(user.go_to_addinfo_page)
        .post(user.add_more_info);
}