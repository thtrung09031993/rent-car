'use strict'

//implement mongoose
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    type: String,
    createdTime: {type: Date, default: Date.now}
},
    {
        collection: 'questions',
        max: 1000
    });
module.exports = mongoose.model('Question', QuestionSchema);