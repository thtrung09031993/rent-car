'use strict'

//Implement the bluebird module for Promise
const Promise = require('bluebird');

//implement Models for getting data
const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');
const Car = mongoose.model('Car');
const Question = mongoose.model('Question');
const News = mongoose.model('News');
const CarService = mongoose.model('CarService');


//~~~~~~~~~//Here are controllers of routes for pages.

exports.redirect_homepage = function (req, res) {
    res.redirect('/home');
}

//Render the homepage
exports.display_homepage = function (req, res) {

    //Promise all, only execute 'then' when all promises resolve.
    Promise.all([getDrivers(), getCars(), getQuestions(), getNews(), getCarBrands(), getCarTypes()])
        .then(function (results) {
            res.render('home-mainpage', { drivers : results[0], cars : results[1], questions : results[2], news : results[3]
                                        , brands: results[4], types : results[5]});
        })
        .catch(function (err) {
            res.send(err);
        });
}


//~~~~~~~~~//Here are the functions in promise used for promise call in controllers
//getDrivers promise
function getDrivers() {
    return new Promise(function (resolve, reject) {
        Driver.find().sort({ experience: -1 }).exec(function (err, drivers) { //find *limit* records
            //by experience sort descending *-1*
            if (!err) {
                resolve(drivers);
            }
            else {
                reject(err);
            }
        });
    });
}

//getCars promise
function getCars() {
    return new Promise(function (resolve, reject) {
        Car.find({ reserved: false }).sort({ type: 1 }).exec(function (err, cars) {
            if (!err) {
                resolve(cars);
            }
            else {
                reject('Error while getting cars!');
            }
        });
    });
}

//promise function to get distinct brands
function getCarBrands() {
    return new Promise(function (resolve, reject) {
        Car.find().distinct('brand', function (err, brands) {
            if (!err) {
                resolve(brands);
            }
            else {
                reject(err);
            }
        })
    });
}

//promise function to get distinct types
function getCarTypes() {
    return new Promise(function (resolve, reject) {
        Car.find().distinct('type', function (err, types) {
            if (!err) {
                resolve(types);
            }
            else {
                reject(err);
            }
        })
    });
}

//getQuestions promise
function getQuestions() {
    return new Promise(function (resolve, reject) {
        Question.find().sort({ createdTime: -1 }).exec((function (err, questions) {
            if (!err) {
                resolve(questions);
            }
            else {
                reject('Error while getting questions!');
            }
        }));
    })
}

//getNews promise
function getNews() {
    return new Promise(function (resolve, reject) {
        News.find().sort({ createdTime: -1 }).limit(3).exec(function (err, news) {
            if (!err) {
                resolve(news);
            }
            else {
                reject('Error while getting news');
            }
        });
    });
}