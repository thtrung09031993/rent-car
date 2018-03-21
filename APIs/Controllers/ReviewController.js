'use strict'

//Model Implementation
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Review = mongoose.model('Review');
const Car = mongoose.model('Car');

//controller function to make new review and re-rate car.
exports.make_new_review = async function (req, res) {
    var carID = req.params.id; // variable store the car id
    var dRate = parseFloat(req.body.drivingRate); // variable store the driving rate
    var pRate = parseFloat(req.body.practicalityRate); // variable store the practicality rate
    var iRate = parseFloat(req.body.interiorRate);// variable store the interior rate
    var comment = req.body.comment;// variable store the comment
    try {
        if (req.session.user || req.user) { //make review for authorized users: local or social 
            if (req.session.user){
                var user = req.session.user;
            }
            else {
                var user = req.user;
            }            
            var newReview = new Review({ //review schema
                car: carID,
                drivingRate: dRate,
                practicalityRate: pRate,
                interiorRate: iRate,
                comment: comment,
                user: user._id,
                createdTime: new Date()
            });
            await saveNewReview(newReview);
        }
        else { //make review for guests
            var name = req.body.gname;
            var email = req.body.gemail;
            var website = req.body.gweb;
            var newReview = new Review({ //review schema
                car: carID,
                drivingRate: dRate,
                practicalityRate: pRate,
                interiorRate: iRate,
                comment: comment,
                name: name,
                email: email,
                website: website,
                createdTime: new Date()
            });
            await saveNewReview(newReview);
        }
        await recalculateRank(carID); // re-calculate the rank of car
        res.redirect('/car/detail/' + carID);
    } catch (error) {
        res.send(error);
    }
}

//function for saving new review
function saveNewReview(newReview) {
    return newReview.save();
}

//function for re-calculating the ranking of car
async function recalculateRank(carID) {
    try {
        var reviews = await getReviews(carID);
        var newdRate = 0, newpRate = 0, newiRate = 0;
        for (var i = 0; i < reviews.length; i++) {
            newdRate += reviews[i].drivingRate;
            newpRate += reviews[i].practicalityRate;
            newiRate += reviews[i].interiorRate;
        }
        newdRate /= reviews.length;
        newpRate /= reviews.length;
        newiRate /= reviews.length;
        await updateNewRank(carID,newdRate, newpRate, newiRate);
    } catch (error) {
        return error;
    }
}

//await function to load reviews
function getReviews(carID) {
    return Review.find({ "car": carID });
}

//await function to update new rank
function updateNewRank(carID,d, p, i) {
    return Car.findByIdAndUpdate(carID, {"$set" : {"drivingRate" : d, "practicalityRate" : p, "interiorRate" : i}});
}