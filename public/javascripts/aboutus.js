var zoomImg; //variable for the zoom image
var zoomName;//variable for the zoom name
var zoomExperience;//variable for the zoom exp
var zoomDetail;//variable for the zoom detail
var zoomFacebook;//variable for the zoom fb
var zoomTwitter;//variable for the zoom twt
var zoomInstagram;//variable for the zoom insta


//execute after page loading
function driverpageLoad(){
    zoomImg = document.getElementById('driver-detail-zoom-img');
    zoomName = document.getElementById('driver-detail-zoom-name');
    zoomExperience = document.getElementById('driver-detail-zoom-experience');
    zoomDetail = document.getElementById('driver-detail-zoom-detail');
    zoomFacebook = document.getElementById('driver-detail-zoom-facebook');
    zoomTwitter = document.getElementById('driver-detail-zoom-twitter');
    zoomInstagram = document.getElementById('driver-detail-zoom-instagram');
    var allDrivers = document.getElementsByClassName('driver-detail-all');
    allDrivers[0].style.boxShadow = '1px 10px 10px 10px grey';
}

//execute when clicking a driver
function driverClick(divID,fname,lname,image,exp,detail,linkfb,linktw,linkins){
    var driverContainer = document.getElementById(divID);
    var allDrivers = document.getElementsByClassName('driver-detail-all');
    zoomImg.src = image;
    zoomName.innerHTML = '<b>'+ fname + ' ' + lname + '</b>';
    zoomExperience.innerHTML = exp + ' Years Experienced as Driver';
    zoomDetail.innerHTML = detail;
    zoomFacebook.href = linkfb;
    zoomTwitter.href = linktw;
    zoomInstagram.href = linkins;
    for (var i = 0; i < allDrivers.length; i++){
        allDrivers[i].style.boxShadow = '0px 0px 0px 0px white';
    }
    driverContainer.style.boxShadow = '1px 10px 10px 10px grey';
}
