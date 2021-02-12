const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const {msg} = require('../config/constants');

async function register(data) {

    const {email} = data;

    await User.findOne({email})
        .then((user) => {
            if (user) {
                throw {message: msg.EMAIL_IS_IN_USE(email)}
            }
            return new User(data).save();
        });
}

function login(data) {
    const {email, password} = data;

    return User.findOne({email})
        .then((user) => {
            if (user) {
                return Promise.all([user.comparePasswords(password), user])
            }
            return [false];
        }).then(([isMatch, user]) => {
            if (isMatch) {
                return jwt.sign({id: user._id, fullName: user.fullName}, config.privateKey, {expiresIn: "1h"});
            } else {
                return '';
            }
        });
}

function getById(id, populateData) {
    if (populateData) {
        return User.findById(id).populate('offersBought').lean();
    } else {
        return User.findById(id).lean();
    }

}

module.exports = {
    register,
    login,
    getById
}
