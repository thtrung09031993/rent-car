'use strict'

//Controller implementation
const car = require('../Controllers/CarController');

module.exports = function (app) {
    //Route to go to car detail page
    app.route('/car/detail/:id')
        .get(car.goto_cardetail);

    //Route to go to car gallery
    app.route('/car/gallery')
        .get(car.gotoGallery);

    //Route to search car
    app.route('/car/search')
        .get(car.go_to_search)
        .post(car.search_cars);
}