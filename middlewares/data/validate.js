const {constants, msg} = require('../../config/constants');
const validator = require('validator');

module.exports = {
    user: {
        register(req, res, next) {
            let {email, password, repeatPassword, fullName} = req.body;

            let user = {
                errors: [],
            };

            email = validator.normalizeEmail(validator.trim(email))

            if (!validator.isLength(email, {min: constants.EMAIL_MIN_LENGTH})) {
                user.errors.push(msg.EMAIL_MIN_LENGTH);
            } else {
                user.email = email;
            }

            if (!validator.isEmail(email)) {
                user.errors.push(msg.EMAIL_BAD_FORMAT);
                user.email = undefined;
            }

            password = validator.trim(password);
            if (!validator.isLength(password, {min: constants.PASSWORD_MIN_LENGTH})) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            repeatPassword = validator.trim(repeatPassword);
            if (!validator.equals(password, repeatPassword)) {
                user.errors.push(msg.REPEAT_PASSWORD_NOT_EQUALS);
            }

            fullName = validator.trim(fullName);
            user.fullName = fullName;

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            let {email, password} = req.body;

            let user = {
                errors: [],
            };

            email = validator.normalizeEmail(validator.trim(email))

            if (!validator.isLength(email, {min: constants.EMAIL_MIN_LENGTH})) {
                user.errors.push(msg.EMAIL_MIN_LENGTH);
            } else {
                user.email = email;
            }

            if (!validator.isEmail(email)) {
                user.errors.push(msg.EMAIL_BAD_FORMAT);
                user.email = undefined;
            }

            password = validator.trim(password);
            if (!validator.isLength(password, {min: constants.PASSWORD_MIN_LENGTH})) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/login', {...user, message: user.errors.shift()})
        },
    },
    shoe: {
        create(req, res, next) {

        },
        edit(req, res, next) {

        }
    }
}