'use strict'

//Implement bluebird for Promise
const Promise = require('bluebird');

//Approriate Models Implementation
const mongoose = require('mongoose');
const Question = mongoose.model('Question');

let questions = [] //global variable for the questions

//Render the FAQ page
exports.goto_faq = function (req, res) {
    Promise.all([getQandA()])
        .then(function () {
            res.render('faq-mainpage', { questions });
        })
        .catch(function (err) {
            res.send(err);
        });
}

//Render the FAQ - New Question page
exports.goto_faq_makequestion = function (req, res) {
    res.render('faq-makequestion');
}

//Save the question to database
exports.create_new_question = function (req, res) {
    var question = req.body.question;
    var type;
    if (req.body.type.toString().indexOf('account') !== -1) {
        type = "account";
    }
    if (req.body.type.toString().indexOf('technical') !== -1) {
        type = "tech";
    }
    if (req.body.type.toString().indexOf('feature') !== -1) {
        type = "feature";
    }
    var newQuestion = new Question({
        question: question,
        answer: '',
        type: type,
        createdTime: new Date()
    });
    newQuestion.save(function(err){
        if(!err){
            res.render('faq-makequestion', {stt: 'successful!'});
        }   
        else {
            res.send(err);
        }
    });
}

//Get top 6 questions and answers of account and other types to display
function getQandA() {
    return new Promise(function (resolve, reject) {
        Question.find({ "type": "account" }).sort({ createdTime: -1 }).limit(6).exec(function (err, accountQuestions) {
            if (!err) {
                for (var i = 0; i < accountQuestions.length; i++) {
                    questions[i] = accountQuestions[i];
                }
                Question.find({ "type": { $ne: "account" } }).sort({ createdTime: -1 }).limit(6).exec(function (err, otherQuestions) {
                    if (!err) {
                        for (var i = 0; i < otherQuestions.length; i++) {
                            questions[i + 6] = otherQuestions[i];
                        }
                        resolve();
                    }
                    else {
                        reject('Error while getting questions and answers!');
                    }
                });
            }
            else {
                reject('Error while getting questions and answers!');
            }
        });
    });
}