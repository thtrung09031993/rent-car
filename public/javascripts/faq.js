function makeAQuestion(){
    location.href = '/faq/question';
}

function showAnswer(answerID){
    var answer = document.getElementById(answerID);
    var showButton = document.getElementById(answerID.toString().concat("-Show"));
    var hideButton = document.getElementById(answerID.toString().concat("-Hide"));
    answer.style.display = 'block';
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
}

function hideAnswer(answerID) {
    var answer = document.getElementById(answerID);
    var showButton = document.getElementById(answerID.toString().concat("-Show"));
    var hideButton = document.getElementById(answerID.toString().concat("-Hide"));
    answer.style.display = 'none';
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
}