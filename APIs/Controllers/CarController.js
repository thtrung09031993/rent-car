'use strict';
//Model implementation
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Car = mongoose.model('Car');
const CarService = mongoose.model('CarService');
const Review = mongoose.model('Review');
const User = mongoose.model('User');
const Gallery = mongoose.model('Car');

//controller function rendering car detail page
exports.gotoGallery = function (req, res) {
    Gallery.find().sort({ brand: 1 }).exec(function (err, list) {
        if (!err) {
            res.render('gallery', { list });
        }
    });
}

//controller function to get data and redirect to car detail page
exports.goto_cardetail = async function (req, res) {
    var carDetail = await getCarDetail(req.params.id);
    Promise.all([getCarInfoPromise(carDetail), getSimilarCarsPromise(carDetail), getReviewsPromise(carDetail)])
        .then(function (results) {
            res.render('cardetail-mainpage', {
                car: results[0][0], averageRank: results[0][1], similarCars: results[1],
                reviews: results[2]
            });
        })
        .catch(function (err) {
            res.send(err); //handle the error
        });
}

//promise function to get carinfo and average rank
function getCarInfoPromise(carWithIncludeServicesIDs) {
    return new Promise(async function (resolve, reject) {
        try {
            var carServices = await getCarIncludeServices(carWithIncludeServicesIDs);
            var roundRank = await getRoundRank(carWithIncludeServicesIDs);
            var carWithIncludeServicesObjs = await putServiceObjsToCar(carWithIncludeServicesIDs, carServices, roundRank);
            var averageRank = await getAverageRank(roundRank);
            var results = [];
            results.push(carWithIncludeServicesObjs);//car detail
            results.push(averageRank); //average ranking
            resolve(results);
        } catch (error) {
            reject(error);
            //handle the error
        }
    });
}

//promise function getting reviews
function getReviewsPromise(car) {
    return new Promise(async function (resolve, reject) {
        try {
            var reviews = await getAllReviews(car._id);
            for (var i = 0; i < reviews.length; i++) {
                if (typeof (reviews[i].user) !== 'undefined') {
                    reviews[i].user = await getUserDetail(reviews[i].user);
                }
            }
            resolve(reviews);
        } catch (error) {
            reject(error);
        }
    });
}

//await function to get user detail info 
function getUserDetail(user) {
    return User.findById({ "_id": user });
}

//await function to get all the reviews of car id
function getAllReviews(id) {
    return Review.find({ "car": id }).sort({ createdTime: -1 }).exec();
}

//await function get car detail
function getCarDetail(id) {
    return Car.findById(id);
}

//await function get list of car service with the service ids.
function getCarIncludeServices(carWithRefIDs) {
    return CarService.find({ "_id": { "$in": carWithRefIDs["includeServices"] } }).sort({ name: 1 });
}

//await function to replace the array of car service ids with the array of car service
function putServiceObjsToCar(car, services, rank) {
    car.includeServices = services;
    car.drivingRate = rank[0];
    car.practicalityRate = rank[1];
    car.interiorRate = rank[2];
    return car;
}

//promise function to get similar cars
function getSimilarCarsPromise(car) {
    return Car.find({ $and: [{ type: car.type }, { _id: { $ne: car._id } }] });
}

//await function to get averageRanking
function getRoundRank(car) {
    var dRank = car.drivingRate;
    var pRank = car.practicalityRate;
    var iRank = car.interiorRate;

    //driving Rate rounding
    if (dRank > 0.5 && dRank < 0.75) {
        dRank = 0.5;
    }
    if (dRank >= 0.75 && dRank < 1.25) {
        dRank = 1;
    }
    if (dRank >= 1.25 && dRank < 1.75) {
        dRank = 1.5;
    }
    if (dRank >= 1.75 && dRank < 2.25) {
        dRank = 2;
    }
    if (dRank >= 2.25 && dRank < 2.75) {
        dRank = 2.5;
    }
    if (dRank >= 2.75 && dRank < 3.25) {
        dRank = 3;
    }
    if (dRank >= 3.25 && dRank < 3.75) {
        dRank = 3.5;
    }
    if (dRank >= 3.75 && dRank < 4.25) {
        dRank = 4;
    }
    if (dRank >= 4.25 && dRank < 4.75) {
        dRank = 4.5;
    }
    if (dRank >= 4.75) {
        dRank = 5;
    }

    //practicality Rate rounding
    if (pRank > 0.5 && pRank < 0.75) {
        pRank = 0.5;
    }
    if (pRank >= 0.75 && pRank < 1.25) {
        pRank = 1;
    }
    if (pRank >= 1.25 && pRank < 1.75) {
        pRank = 1.5;
    }
    if (pRank >= 1.75 && pRank < 2.25) {
        pRank = 2;
    }
    if (pRank >= 2.25 && pRank < 2.75) {
        pRank = 2.5;
    }
    if (pRank >= 2.75 && pRank < 3.25) {
        pRank = 3;
    }
    if (pRank >= 3.25 && pRank < 3.75) {
        pRank = 3.5;
    }
    if (pRank >= 3.75 && pRank < 4.25) {
        pRank = 4;
    }
    if (pRank >= 4.25 && pRank < 4.75) {
        pRank = 4.5;
    }
    if (pRank >= 4.75) {
        pRank = 5;
    }

    //interior Rate rouniing
    if (iRank > 0.5 && iRank < 0.75) {
        iRank = 0.5;
    }
    if (iRank >= 0.75 && iRank < 1.25) {
        iRank = 1;
    }
    if (iRank >= 1.25 && iRank < 1.75) {
        iRank = 1.5;
    }
    if (iRank >= 1.75 && iRank < 2.25) {
        iRank = 2;
    }
    if (iRank >= 2.25 && iRank < 2.75) {
        iRank = 2.5;
    }
    if (iRank >= 2.75 && iRank < 3.25) {
        iRank = 3;
    }
    if (iRank >= 3.25 && iRank < 3.75) {
        iRank = 3.5;
    }
    if (iRank >= 3.75 && iRank < 4.25) {
        iRank = 4;
    }
    if (iRank >= 4.25 && iRank < 4.75) {
        iRank = 4.5;
    }
    if (iRank >= 4.75) {
        iRank = 5;
    }

    var roundRank = [];
    roundRank.push(dRank);
    roundRank.push(pRank);
    roundRank.push(iRank);
    return roundRank;
}

function getAverageRank(rank) {
    var aRank = 0;
    for (var i = 0; i < rank.length; i++) {
        aRank += rank[i];
    }
    aRank /= rank.length;
    //average Rate rounding
    if (aRank > 0.5 && aRank < 0.75) {
        aRank = 0.5;
    }
    if (aRank >= 0.75 && aRank < 1.25) {
        aRank = 1;
    }
    if (aRank >= 1.25 && aRank < 1.75) {
        aRank = 1.5;
    }
    if (aRank >= 1.75 && aRank < 2.25) {
        aRank = 2;
    }
    if (aRank >= 2.25 && aRank < 2.75) {
        aRank = 2.5;
    }
    if (aRank >= 2.75 && aRank < 3.25) {
        aRank = 3;
    }
    if (aRank >= 3.25 && aRank < 3.75) {
        aRank = 3.5;
    }
    if (aRank >= 3.75 && aRank < 4.25) {
        aRank = 4;
    }
    if (aRank >= 4.25 && aRank < 4.75) {
        aRank = 4.5;
    }
    if (aRank >= 4.75) {
        aRank = 5;
    }
    return aRank;
}

//controller function to get in search page
exports.go_to_search = function (req, res) {
    Promise.all([getCarBrands(), getCarTypes()])
        .then(function (results) {
            res.render('search-info', { brands: results[0], types: results[1] });
        })
        .catch(function (err) {
            res.send(err);
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

//controller function to search cars and render result
exports.search_cars = function (req, res) {
    var searchInfo = req.body;    
    searchInfo.carprice = searchInfo.carprice.toString() === 'Low-High' ? 1 : -1;
    if (searchInfo.carbrand.toString().indexOf('Any') !== -1 && searchInfo.cartype.toString().indexOf('Any') === -1) {
        Car.find({ type: searchInfo.cartype }).sort({ rentalPrice: searchInfo.carprice }).exec(function (err, cars) {
            if (!err) {
                res.render('search-result', { cars });
            }
            else {
                res.send(err);
            }
        });
    }
    else if (searchInfo.carbrand.toString().indexOf('Any') === -1 && searchInfo.cartype.toString().indexOf('Any') !== -1) {
        Car.find({ brand: searchInfo.carbrand }).sort({ rentalPrice: searchInfo.carprice }).exec(function (err, cars) {
            if (!err) {
                res.render('search-result', { cars });
            }
            else {
                res.send(err);
            }
        });
    }
    else if (searchInfo.cartype.toString().indexOf('Any') !== -1 && searchInfo.carbrand.toString().indexOf('Any') !== -1) {
        Car.find().sort({ rentalPrice: searchInfo.carprice }).exec(function (err, cars) {
            if (!err) {
                res.render('search-result', { cars });
            }
            else {
                res.send(err);
            }
        });
    }
    else {
        Car.find({ brand: searchInfo.carbrand, type: searchInfo.cartype }).sort({ rentalPrice: searchInfo.carprice }).exec(function (err, cars) {
            if (!err) {
                res.render('search-result', { cars });
            }
            else {
                res.send(err);
            }
        });
    }
}