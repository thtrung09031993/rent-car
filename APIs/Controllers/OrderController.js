var mongoose = require('mongoose'),
    Car = mongoose.model('Car'),
    Order = mongoose.model('Order'),
    CarService = mongoose.model('CarService'),
    Promise = require('bluebird');

exports.reserve_car = async function (req, res) {
    //load Reserved page for each car
    var car, carService, similarCars;
    try {
        car = await getCarInfo(req.params.id);
        carService = await getCarService(car);
        similarCars = await getSimilarCar(car.type);
        res.render('reserved-mainpage', { car, carService, similarCars });
    } catch (err) {
        res.send(err);
    }
}

exports.go_to_user_reserved = function (req, res) {
    //render a list of booking of an user
    var userID = req.user ? req.user._id : req.session.user._id;
    Order.find({ userID: userID }, function (err, listCarReserved) {
        if (!err) {
            res.render('car-reserved', { listCarReserved });
        }
    });
}

//function to cancel order
exports.cancel = function (req, res) {
    //invoke when user cancel a booking
    Promise.all([setCarAvailable(req.body.carid),removeOrder(req.body.orderid)])
        .then(function () {
            res.redirect('/user/reserved');
        })
        .catch(function (error) {
            res.send(error);
        });
}

//promise function set Car available
function setCarAvailable(carID) {
    return new Promise(function (resolve, reject) {
        Car.findByIdAndUpdate(carID, { $set: { reserved: false } }, function (err) {
            if (!err) {
                resolve();
            }
            else {
                reject(err);
            }
        });
    })

}

//promise function to remove order
function removeOrder(orderID) {
    return new Promise(function (resolve, reject) {
        Order.findByIdAndRemove(orderID, function (err) {
            if (!err) {
                resolve();
            }
            else {
                reject(err);
            }
        })
    });
}

exports.make_an_order = async function (req, res) {
    try {
        var info = req.body; //get all user inputted info in reserved car page
        var userID = req.user ? req.user._id : req.session.user._id;
        var newOrder = new Order({
            pickupAddr: info.pickupaddr,
            dropoffAddr: info.dropoffaddr,
            pickupDate: info.pickupdate,
            dropoffDate: info.dropoffdate,
            pickupTime: info.pickuptime,
            dropoffTime: info.dropofftime,
            extraServices: info.extras, //Array of carServicesIDs
            paymentOption: info.payment,
            addInfo: info.addition,
            userID: userID,
            carID: info.carid,
            processed: false,
            createdTime: new Date()
        });
        var car = await checkReserved(info.carid);
        if (car.reserved) {            
            res.redirect('/car/gallery');
        }
        else {
            await saveOrder(newOrder);
            await makeCarReserved(info.carid);
            res.redirect('/user/reserved')
        }
    } catch (error) {
        res.send(error);
    }
}

//await function to check if car is reserved
function checkReserved(carid) {
    return Car.findById(carid);
}

//await function to make car reserved
function makeCarReserved(carID) {
    return Car.findByIdAndUpdate(carID, { $set: { "reserved": true } });
}

//await function to save order
function saveOrder(newOrder) {
    return newOrder.save();
}

function getCarInfo(ID) {
    return Car.findById(ID);
}

function getCarService(car) {
    return CarService.find({ "_id": { "$in": car["includeServices"] } }).sort({ name: -1 });
}

function getSimilarCar(type) {
    return Car.find({ type: type });
}

