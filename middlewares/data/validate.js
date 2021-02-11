const {constants, msg} = require('../../config/constants');

module.exports = {
    user: {
        register(req, res, next) {
            const {email, password, repeatPassword} = req.body;

            let user = {
                errors: [],
            };

            user.email = email.trim();

            // if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
            //     user.errors.push(msg.USERNAME_MIN_LENGTH);
            // } else {
            //     user.username = username.trim();
            // }

            // if (!constants.USERNAME_REGEX.test(username.trim())) {
            //     user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
            //     user.username = undefined;
            // }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (password.trim() !== repeatPassword.trim()) {
                user.errors.push(msg.CONFIRMATION_PASSWORD_ERROR);
            }

            if (!constants.PASSWORD_REGEX.test(password.trim())) {
                user.errors.push(msg.PASSWORD_ONLY_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            const {email, password} = req.body;

            let user = {
                errors: [],
            };

            // if (email.trim().length === 0 || email.trim().length < constants.EMAIL_MIN_LENGTH) {
            //     user.errors.push();
            // } else {
            //     user.email = email.trim();
            // }
            //
            // if (!constants.USERNAME_REGEX.test(username.trim())) {
            //     user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
            //     user.username = undefined;
            // }
            //
            // if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
            //     user.errors.push(msg.PASSWORD_MIN_LENGTH);
            // }

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