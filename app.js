var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var flash = require('express-flash-notification');
var app = express();

// view engine setup, set up different views sub directories
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/homepage'),
  path.join(__dirname, 'views/faq'),
  path.join(__dirname, 'views/driver'),
  path.join(__dirname, 'views/service'),
  path.join(__dirname, 'views/contactus'),
  path.join(__dirname, 'views/aboutus'),
  path.join(__dirname, 'views/car-gallery'),
  path.join(__dirname, 'views/cardetail'),
  path.join(__dirname, 'views/authorization'),
  path.join(__dirname, 'views/reserved'),
  path.join(__dirname, 'views/search'),
]);
app.set('view engine', 'ejs');

//Database and Model Implementation
var mongoose = require('mongoose');
var
  Car = require('./APIs/Models/CarModel'),
  CarService = require('./APIs/Models/CarServiceModel'),
  Contact = require('./APIs/Models/ContactModel'),
  Customer = require('./APIs/Models/CustomerModel'),
  Driver = require('./APIs/Models/DriverModel'),
  News = require('./APIs/Models/NewsModel'),
  Order = require('./APIs/Models/OrderModel'),
  Question = require('./APIs/Models/QuestionModel'),
  Review = require('./APIs/Models/ReviewModel'),
  Service = require('./APIs/Models/ServiceModel'),
  User = require('./APIs/Models/UserModel');
// mongoose.connect('mongodb://localhost:27017/cardb' , {useMongoClient: true});
mongoose.connect('mongodb://thtrung09031993:sayuwill@ds129153.mlab.com:29153/managementcardb');

//Apply the user session info to view res when redirecting to homepage after logging in
function putUserToView(req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
  }
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  next();
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'User Session!' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash(app));
app.use(passport.initialize());
app.use(passport.session());
app.use(putUserToView); // apply the checking session middleware
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon/car.ico'));

//Route Implementation
var HomepageRoute = require('./APIs/Routes/HomepageRoute');
HomepageRoute(app);
var FAQRoute = require('./APIs/Routes/FAQRoute');
FAQRoute(app);
var DriverRoute = require('./APIs/Routes/DriverRoute');
DriverRoute(app);
const serviceRoute = require('./APIs/Routes/ServiceRoute');
serviceRoute(app);
var ContactUsPageRoute = require('./APIs/Routes/ContactUsPageRouter');
ContactUsPageRoute(app);
var aboutUsPageRoute = require('./APIs/Routes/AboutUsPageRoute');
aboutUsPageRoute(app);
var CarRoute = require('./APIs/Routes/CarRoute');
CarRoute(app);
var reviewRoute = require('./APIs/Routes/ReviewRoute');
reviewRoute(app);
var userRoute = require('./APIs/Routes/UserRoute');
require('./APIs/Config/passport')(passport);
userRoute(app, passport);
var orderRoute = require('./APIs/Routes/OrderRoute');
orderRoute(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
