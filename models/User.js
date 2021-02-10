const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const {constants} = require('../config/constants');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: new RegExp('email_regex'),
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    offersBought: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Shoe'
        }
    ]
});

userSchema.pre('save', function (next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(config.saltRounds, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

userSchema.methods.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);