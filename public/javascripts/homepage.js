// **Car display functions **//

let popularButton; //variable for popular car button
let businessButton;//variable for business car button
let familyButton;//variable for family car button
let sportButton;//variable for sport car button
let limitedButton;//variable for limited car button
let popularShow;//variable for popular car show container
let businessShow;//variable for business car show container
let familyShow;//variable for family car show container
let sportShow;//variable for sport car show container
let limitedShow;//variable for limited car show container
let accountButton;//variable for account question tab button
let techButton;//variable for tech question tab button
let featureButton;//variable for car featue question tab button
let accountQues;//variabe for account questions
let techQues;//variabe for tech questions
let featureQues;//variabe for feature questions




//Get the buttons in cars display view
function homepageLoad() {
    popularButton = document.getElementById('popularCarButton');
    businessButton = document.getElementById('businessCarButton');
    familyButton = document.getElementById('familyCarButton');
    sportButton = document.getElementById('sportCarButton');
    limitedButton = document.getElementById('limitedCarButton');
    popularShow = document.getElementById('popular-show');
    businessShow = document.getElementById('business-show');
    familyShow = document.getElementById('family-show');
    sportShow = document.getElementById('sport-show');
    limitedShow = document.getElementById('limited-show');
    accountButton = document.getElementById('accountQuestion');
    techButton = document.getElementById('techQuestion');
    featureButton = document.getElementById('featureQuestion');
    accountQues = document.getElementById('faq-account');
    techQues = document.getElementById('faq-tech');
    featureQues = document.getElementById('faq-feature');
    popularClick();
    accountClick();
}

//execute when clicking popular
function popularClick() {
    popularButton.style.backgroundColor = 'yellow';
    popularButton.style.color = 'white';
    popularButton.style.borderColor = 'yellow';
    businessButton.style.backgroundColor = 'white';
    businessButton.style.color = 'grey';
    businessButton.style.borderColor = 'lightgray';
    familyButton.style.backgroundColor = 'white';
    familyButton.style.color = 'grey';
    familyButton.style.borderColor = 'lightgray';
    sportButton.style.backgroundColor = 'white';
    sportButton.style.color = 'grey';
    sportButton.style.borderColor = 'lightgray';
    limitedButton.style.backgroundColor = 'white';
    limitedButton.style.color = 'grey';
    limitedButton.style.borderColor = 'lightgray';

    popularShow.style.display = 'block';
    businessShow.style.display = 'none';
    familyShow.style.display = 'none';
    sportShow.style.display = 'none';
    limitedShow.style.display = 'none';
}

//execute when clicking business
function businessClick() {
    businessButton.style.backgroundColor = 'yellow';
    businessButton.style.color = 'white';
    businessButton.style.borderColor = 'yellow';
    popularButton.style.backgroundColor = 'white';
    popularButton.style.color = 'grey';
    popularButton.style.borderColor = 'lightgray';
    familyButton.style.backgroundColor = 'white';
    familyButton.style.color = 'grey';
    familyButton.style.borderColor = 'lightgray';
    sportButton.style.backgroundColor = 'white';
    sportButton.style.color = 'grey';
    sportButton.style.borderColor = 'lightgray';
    limitedButton.style.backgroundColor = 'white';
    limitedButton.style.color = 'grey';
    limitedButton.style.borderColor = 'lightgray';

    businessShow.style.display = 'block';
    popularShow.style.display = 'none';
    familyShow.style.display = 'none';
    sportShow.style.display = 'none';
    limitedShow.style.display = 'none';
}

//execute when clicking family
function familyClick() {
    familyButton.style.backgroundColor = 'yellow';
    familyButton.style.color = 'white';
    familyButton.style.borderColor = 'yellow';
    businessButton.style.backgroundColor = 'white';
    businessButton.style.color = 'grey';
    businessButton.style.borderColor = 'lightgray';
    popularButton.style.backgroundColor = 'white';
    popularButton.style.color = 'grey';
    popularButton.style.borderColor = 'lightgray';
    sportButton.style.backgroundColor = 'white';
    sportButton.style.color = 'grey';
    sportButton.style.borderColor = 'lightgray';
    limitedButton.style.backgroundColor = 'white';
    limitedButton.style.color = 'grey';
    limitedButton.style.borderColor = 'lightgray';

    familyShow.style.display = 'block';
    businessShow.style.display = 'none';
    popularShow.style.display = 'none';
    sportShow.style.display = 'none';
    limitedShow.style.display = 'none';
}

//execute when clicking sport
function sportClick() {
    sportButton.style.backgroundColor = 'yellow';
    sportButton.style.color = 'white';
    sportButton.style.borderColor = 'yellow';
    businessButton.style.backgroundColor = 'white';
    businessButton.style.color = 'grey';
    businessButton.style.borderColor = 'lightgray';
    familyButton.style.backgroundColor = 'white';
    familyButton.style.color = 'grey';
    familyButton.style.borderColor = 'lightgray';
    popularButton.style.backgroundColor = 'white';
    popularButton.style.color = 'grey';
    popularButton.style.borderColor = 'lightgray';
    limitedButton.style.backgroundColor = 'white';
    limitedButton.style.color = 'grey';
    limitedButton.style.borderColor = 'lightgray';

    sportShow.style.display = 'block';
    businessShow.style.display = 'none';
    familyShow.style.display = 'none';
    popularShow.style.display = 'none';
    limitedShow.style.display = 'none';
}

//execute when clicking limited
function limitedClick() {
    limitedButton.style.backgroundColor = 'yellow';
    limitedButton.style.color = 'white';
    limitedButton.style.borderColor = 'yellow';
    businessButton.style.backgroundColor = 'white';
    businessButton.style.color = 'grey';
    businessButton.style.borderColor = 'lightgray';
    familyButton.style.backgroundColor = 'white';
    familyButton.style.color = 'grey';
    familyButton.style.borderColor = 'lightgray';
    sportButton.style.backgroundColor = 'white';
    sportButton.style.color = 'grey';
    sportButton.style.borderColor = 'lightgray';
    popularButton.style.backgroundColor = 'white';
    popularButton.style.color = 'grey';
    popularButton.style.borderColor = 'lightgray';

    limitedShow.style.display = 'block';
    businessShow.style.display = 'none';
    familyShow.style.display = 'none';
    sportShow.style.display = 'none';
    popularShow.style.display = 'none';
}

//execute when clicking account question
function accountClick() {
    accountButton.style.opacity = '1';
    techButton.style.opacity = '0.3';
    featureButton.style.opacity = '0.3';

    accountQues.style.display = 'block';
    techQues.style.display = 'none';
    featureQues.style.display = 'none';
}

//execute when clicking tech question
function techClick() {
    techButton.style.opacity = '1';
    accountButton.style.opacity = '0.3';
    featureButton.style.opacity = '0.3';

    techQues.style.display = 'block';
    accountQues.style.display = 'none';
    featureQues.style.display = 'none';
}

//execute when clicking feature question
function featureClick() {
    featureButton.style.opacity = '1';
    techButton.style.opacity = '0.3';
    accountButton.style.opacity = '0.3';

    featureQues.style.display = 'block';
    techQues.style.display = 'none';
    accountQues.style.display = 'none';
}

//display answer of approriate ID
function showAnswer(answerID){
    var answer = document.getElementById(answerID);
    var showButton = document.getElementById(answerID.concat("-Show"));
    var hideButton = document.getElementById(answerID.concat("-Hide"));
    var containerDiv = document.getElementById(answerID.concat("-Div"));
    answer.style.display = 'block';
    answer.style.opacity = '0.5';
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
    containerDiv.style.opacity = '1';
    containerDiv.style.paddingTop = '20px';
}

//hide answer of approriate ID
function hideAnswer(answerID){
    var answer = document.getElementById(answerID);
    var showButton = document.getElementById(answerID.concat("-Show"));
    var hideButton = document.getElementById(answerID.concat("-Hide"));
    var containerDiv = document.getElementById(answerID.concat("-Div"));
    answer.style.display = 'none';
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
    containerDiv.style.opacity = '0.3';
    containerDiv.style.paddingTop = '20px';
}

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