'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    nodemailer = require('nodemailer'),
    async = require('async'),
    crypto = require('crypto');

exports.goToLogin = function (req, res) {
    res.render('authorization-loginpage');
}

exports.forgot = function (req, res, next) {
    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },

        function (token, done) {
            User.findOne({ email: req.body.email }, function (err, user) {
                if (!user) {
                    res.render('authorization-forgotpassword', { stt: "error", message: "No Account associated with this email" });
                    return;
                }
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000;
                user.save(function (err) {
                    done(err, token, user);
                });
            });
        },
        function (token, user, done) {
            var smtpTrans = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'trinhham123@gmail.com',
                    pass: 'trinhhambikhung123'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'Trinh Inc.',
                subject: 'Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/user/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTrans.sendMail(mailOptions, function (err) {
                res.render('authorization-success', { stt: "successForgot", message: "A Verification email has been sent to your email account" });
            });
        }
    ],
        function (err) {
            res.redirect('/login');
        });
}

exports.gotoReset = function (req, res) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
        if (!user) {
            return res.render('authorization-resetpassword', { stt: "errorToken", message: "Token not valid or expired !" });
        }
        res.render('authorization-resetpassword', {
            User: req.user, user: user
        });
    });
};

exports.reset = function (req, res) {
    async.waterfall([
        function (done) {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
                if (!user) {
                    return res.render('authorization-success', { stt: "errorToken", message: "Token not valid or expired !" });
                }
                user.password = req.body.password;
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;
                user.save(function (err) {
                    if (err) {
                        res.send("Error on database");
                    } else {
                        res.render('authorization-success', { stt: "successResetPassword", message: "Password reset successfully !" });
                    }
                });
            });
        },
        function (user, done) {
            var smtpTrans = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'trinhham123@gmail.com',
                    pass: 'trinhhambikhung123'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'Trinh Inc.',
                subject: 'Your password has been changed',
                text: 'Hello,\n\n' +
                    'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                done(err);
            });
        }
    ],
        function (err) {
            res.redirect('/login');
        });
}

exports.login = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            res.send("Database error!");
        }
        else {
            if (user === null) {
                //req.flash('errorLogin','Your email does not existed','/');
                res.render('authorization-loginpage', { stt: "error", message: "Your email doesn't exist !" });
                //res.send({stt:"error", message: "Your email doesn't exist !"});
            }
            else {
                if (user.password !== req.body.password) {
                    //req.flash('errorLogin','Incorrect Password','/');
                    res.render('authorization-loginpage', { stt: "error", message: "Incorrect password !" });
                    //res.send({stt:"error", message: "Incorrect password"});
                } else {
                    user.password = undefined;
                    req.session.user = user;
                    res.redirect('/home');
                }
            }

        }
    });
}

exports.success = function (req, res) {
    res.render('authorization-success');
}

exports.gotoForgot = function (req, res) {
    res.render('authorization-forgotpassword');
}

exports.createNewUser = function (req, res) {
    var info = req.body;
    var newUser = new User({
        name: info.name,
        email: info.email,
        password: info.password,
    });
    newUser.save(function (err) {
        if (err) {
            res.render('authorization-loginpage', { stt: "errorEmail", message: "Email existed !" })
        }
        else {
            res.redirect('/user/success');
        }
    });
}

//async function update user info
exports.add_more_info = async function (req, res) {
    try {
        var newUser;
        var updateInfo = req.body;
        if (updateInfo.male === 'Male') {
            updateInfo.male = true;
        }
        else {
            updateInfo.male = false;
        }
        if (req.user) {
            updateInfo.facebook = {
                id: req.user.facebook.id,
                token: req.user.facebook.token,
                email: req.body.email,
                name: req.user.facebook.name,
                image: req.user.facebook.image
            };
            updateInfo.email = 'Facebook ID: ' + req.user.facebook.id;
            await updateInfoUser(req.user._id, updateInfo);
            newUser = await getUpdateUser(req.user._id);
            req.user = newUser;
        }
        else {
            await updateInfoUser(req.session.user._id, updateInfo);
            newUser = await getUpdateUser(req.session.user._id);
            req.session.user = newUser;
        }
        res.redirect('/user/profile');
    } catch (error) {
        res.send(error);
    }
}

//await function update info
function updateInfoUser(userID, newInfo) {
    return User.findByIdAndUpdate(userID, { "$set": newInfo });
}
//await function get updated user
function getUpdateUser(userID) {
    return User.findById(userID);
}

//function redirecting to the update info page
exports.go_to_addinfo_page = function (req, res) {
    if (!req.user && !req.session.user) {
        res.redirect('/user/login');
    }
    else {
        res.render('authorization-addinfo');
    }
}

//function redirecting to the profile page
exports.go_to_profile = function (req, res) {
    if (!req.user && !req.session.user) {
        res.redirect('/user/login');
    }
    else {
        res.render('authorization-profiledetail');
    }
}

//function executing when logging out
exports.logout = function (req, res) {
    if (!req.user && !req.session.user) {
        res.redirect('/home');
    }
    if (req.user) {
        req.logout();
    }
    if (req.session.user) {
        req.session.destroy();
    }
    res.redirect('/home');
}

