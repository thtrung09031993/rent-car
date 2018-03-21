function loadMap() {

    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 16});

    var infoContent = function (address, phone, email, image) {
        // console.log(address + ' ' + phone + ' ' + email);

        // '<div class="container"><p>'+address+'</p><br/><p>'+phone+'</p><br/><p>'+email+'</p></div>'
        return '<div class="infoWindow"><img class="contactus-image" src="' + image + '" />' +
            '<div class="container">' +
            '<div class="row">' +
            '<div class="col-lg-12">' +
            '<div class="row contactus-inforows">' +
            '<div class="col-lg-2 contactus-icons">' +
            '<img src="http://icon-park.com/imagefiles/location_map_pin_yellow5.png" />' +
            '</div>' +
            '<div class="col-lg-10 contactus-contents">' + address + '</div>' +
            '</div>' +
            '<div class="row contactus-inforows">' +
            '<div class="col-lg-2 contactus-icons">' +
            '<img src="https://cdn0.iconfinder.com/data/icons/flat-color-1/100/sqi2016-flat-go-41-512.png" />' +
            '</div>' +
            '<div class="col-lg-10 contactus-contents">' + phone + '</div>' +
            '</div>' +
            '<div class="row contactus-inforows">' +
            '<div class="col-lg-2 contactus-icons">' +
            '<img src="http://cdn.mysitemyway.com/icons-watermarks/flat-circle-white-on-yellow/broccolidry/broccolidry_email/broccolidry_email_flat-circle-white-on-yellow_512x512.png" />' +
            '</div>' +
            '<div class="col-lg-10 contactus-contents">' + email + '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    };

    var infoWindow = new google.maps.InfoWindow({ maxWidth: 250, maxHeight: 400});

    geocoder = new google.maps.Geocoder();

    function placeMarker(loc, i) {

        var place = loc;

        geocoder.geocode({'address': loc.address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);            
                marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                marker.setLabel(i + '');
                google.maps.event.addListener(marker, 'click', (function () {
                    infoWindow.close();
                    infoWindow.setContent(infoContent(place.address, place.phone, place.email, place.image));
                    infoWindow.open(map, this);
                }));

            }
        });
    }

    for (var i = 0, len = addressList.length; i < len; i++) {
        placeMarker(addressList[i], i + 1);
    }

}

// function autoCenter() {
// //  Create a new viewpoint bound
//     var bounds = new google.maps.LatLngBounds();
// //  Go through each...
//     $.each(markers, function (index, marker) {
//         bounds.extend(marker.position);
//     });
// //  Fit these bounds to the map
//     map.fitBounds(bounds);
// }



