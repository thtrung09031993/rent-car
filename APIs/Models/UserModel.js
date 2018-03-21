'use strict'

const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    male: Boolean,
    phone: String,
    nationality: String,
    birthday: Date,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String,
        image: String
    }
    // google
    // twitter
},
    {
        collection: 'users',
        max: 1000
    });

module.exports = mongoose.model('User', UserSchema);
