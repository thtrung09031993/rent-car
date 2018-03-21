//function to make image modal zoom
function zoomImg(img) {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img;

    // Get the <span> element that closes the modal
    var closeButton = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
        modal.style.display = "none";
    }
}

//function execute when loading page
function cardetailPageLoad() {
    //variable declaration
    var carRanks = document.getElementsByClassName('cardetail-hidden-rank');
    var fset;
    var drivingRank = parseFloat(carRanks[0].innerHTML);
    var practicalityRank = parseFloat(carRanks[1].innerHTML);
    var interiorRank = parseFloat(carRanks[2].innerHTML);
    var averageRank = parseFloat(carRanks[3].innerHTML);

    //display the average rank star
    switch (averageRank) {
        case 0.5:
            document.getElementById("averagestarhalf").checked = true;
            break;
        case 1:
            document.getElementById("averagestar1").checked = true;
            break;
        case 1.5:
            document.getElementById("averagestar1half").checked = true;
            break;
        case 2:
            document.getElementById("averagestar2").checked = true;
            break;
        case 2.5:
            document.getElementById("averagestar2half").checked = true;
            break;
        case 3:
            document.getElementById("averagestar3").checked = true;
            break;
        case 3.5:
            document.getElementById("averagestar3half").checked = true;
            break;
        case 4:
            document.getElementById("averagestar4").checked = true;
            break;
        case 4.5:
            document.getElementById("averagestar4half").checked = true;
            break;
        case 5:
            document.getElementById("averagestar5").checked = true;
            break;
    }
    fset = document.getElementsByClassName('cardetail-averagerank');
    fset[0].disabled = true;

    //display the driving rank star
    switch (drivingRank) {
        case 0.5:
            document.getElementById("drivingstarhalf").checked = true;
            break;
        case 1:
            document.getElementById("drivingstar1").checked = true;
            break;
        case 1.5:
            document.getElementById("drivingstar1half").checked = true;
            break;
        case 2:
            document.getElementById("drivingstar2").checked = true;
            break;
        case 2.5:
            document.getElementById("drivingstar2half").checked = true;
            break;
        case 3:
            document.getElementById("drivingstar3").checked = true;
            break;
        case 3.5:
            document.getElementById("drivingstar3half").checked = true;
            break;
        case 4:
            document.getElementById("drivingstar4").checked = true;
            break;
        case 4.5:
            document.getElementById("drivingstar4half").checked = true;
            break;
        case 5:
            document.getElementById("drivingstar5").checked = true;
            break;
    }
    fset = document.getElementsByClassName('cardetail-drivingrank');
    fset[0].disabled = true;

    //display the practicality rank star
    switch (practicalityRank) {
        case 0.5:
            document.getElementById("practicalitystarhalf").checked = true;
            break;
        case 1:
            document.getElementById("practicalitystar1").checked = true;
            break;
        case 1.5:
            document.getElementById("practicalitystar1half").checked = true;
            break;
        case 2:
            document.getElementById("practicalitystar2").checked = true;
            break;
        case 2.5:
            document.getElementById("practicalitystar2half").checked = true;
            break;
        case 3:
            document.getElementById("practicalitystar3").checked = true;
            break;
        case 3.5:
            document.getElementById("practicalitystar3half").checked = true;
            break;
        case 4:
            document.getElementById("practicalitystar4").checked = true;
            break;
        case 4.5:
            document.getElementById("practicalitystar4half").checked = true;
            break;
        case 5:
            document.getElementById("practicalitystar5").checked = true;
            break;
    }
    fset = document.getElementsByClassName('cardetail-practicalityrank');
    fset[0].disabled = true;

    //display the interior rank star
    switch (interiorRank) {
        case 0.5:
            document.getElementById("interiorstarhalf").checked = true;
            break;
        case 1:
            document.getElementById("interiorstar1").checked = true;
            break;
        case 1.5:
            document.getElementById("interiorstar1half").checked = true;
            break;
        case 2:
            document.getElementById("interiorstar2").checked = true;
            break;
        case 2.5:
            document.getElementById("interiorstar2half").checked = true;
            break;
        case 3:
            document.getElementById("interiorstar3").checked = true;
            break;
        case 3.5:
            document.getElementById("interiorstar3half").checked = true;
            break;
        case 4:
            document.getElementById("interiorstar4").checked = true;
            break;
        case 4.5:
            document.getElementById("interiorstar4half").checked = true;
            break;
        case 5:
            document.getElementById("interiorstar5").checked = true;
            break;
    }
    var fset = document.getElementsByClassName('cardetail-interiorrank');
    fset[0].disabled = true;
}

function reviewPageLoad(reviews) {
    var dRank, pRank, iRank;
    var fset;
    for (var i = 0; i < reviews.length; i++) {
        dRank = parseFloat(reviews[i].drivingRate);
        pRank = parseFloat(reviews[i].practicalityRate);
        iRank = parseFloat(reviews[i].interiorRate);

        //display the driving rank star in comment
        switch (dRank) {
            case 0.5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstarhalf")).checked = true;
                break;
            case 1:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar1")).checked = true;
                break;
            case 1.5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar1half")).checked = true;
                break;
            case 2:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar2")).checked = true;
                break;
            case 2.5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar2half")).checked = true;
                break;
            case 3:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar3")).checked = true;
                break;
            case 3.5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar3half")).checked = true;
                break;
            case 4:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar4")).checked = true;
                break;
            case 4.5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar4half")).checked = true;
                break;
            case 5:
                document.getElementById(reviews[i]._id.toString().concat("drivingstar5")).checked = true;
                break;
        }
        fset = document.getElementsByClassName(reviews[i]._id.toString().concat("-drivingrank"));
        fset[0].disabled = true;

        //display the practicality rank star in comment
        switch (pRank) {
            case 0.5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystarhalf")).checked = true;
                break;
            case 1:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar1")).checked = true;
                break;
            case 1.5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar1half")).checked = true;
                break;
            case 2:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar2")).checked = true;
                break;
            case 2.5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar2half")).checked = true;
                break;
            case 3:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar3")).checked = true;
                break;
            case 3.5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar3half")).checked = true;
                break;
            case 4:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar4")).checked = true;
                break;
            case 4.5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar4half")).checked = true;
                break;
            case 5:
                document.getElementById(reviews[i]._id.toString().concat("practicalitystar5")).checked = true;
                break;
        }
        fset = document.getElementsByClassName(reviews[i]._id.toString().concat("-practicalityrank"));
        fset[0].disabled = true;

        //display the interior rank star in comment
        switch (iRank) {
            case 0.5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstarhalf")).checked = true;
                break;
            case 1:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar1")).checked = true;
                break;
            case 1.5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar1half")).checked = true;
                break;
            case 2:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar2")).checked = true;
                break;
            case 2.5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar2half")).checked = true;
                break;
            case 3:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar3")).checked = true;
                break;
            case 3.5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar3half")).checked = true;
                break;
            case 4:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar4")).checked = true;
                break;
            case 4.5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar4half")).checked = true;
                break;
            case 5:
                document.getElementById(reviews[i]._id.toString().concat("interiorstar5")).checked = true;
                break;
        }
        fset = document.getElementsByClassName(reviews[i]._id.toString().concat("-interiorrank"));
        fset[0].disabled = true;
    }

    //Hide the reviews, display only 2
    var allReviews = document.getElementsByClassName('cardetail-review-row');
    var showReviewButton = document.getElementById('cardetail-review-viewmore');
    if (allReviews.length <= 2) {
        showReviewButton.style.display = 'none';
    }
    allReviews[0].style.display = 'flex';
    allReviews[1].style.display = 'flex';

}

//show more reviews function
function showMoreReviews() {
    var allReviews = document.getElementsByClassName('cardetail-review-row');    
    for (var i = 2; i < allReviews.length; i++) { //display next 2 reviews
        if (allReviews[i].style.display === '') {
            allReviews[i].style.display = 'flex';
            if (i < allReviews.length - 1) {
                allReviews[i + 1].style.display = 'flex';
            }
            break;
        }
    }
    var allReviewsDisplayed = true;
    for (var i = 0; i < allReviews.length; i++) {
        if (allReviews[i].style.display === '') {
            allReviewsDisplayed = false;
            break;
        }
    }
    if (allReviewsDisplayed) {
        var showReviewButton = document.getElementById('cardetail-review-viewmore');
        showReviewButton.style.display = 'none';        
    }
}


