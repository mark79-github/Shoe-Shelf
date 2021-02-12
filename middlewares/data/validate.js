const {constants, msg} = require('../../config/constants');
const validator = require('validator');

module.exports = {
    user: {
        register(req, res, next) {
            let {email, password, repeatPassword, fullName} = req.body;

            let user = {
                errors: [],
            };

            req.body.email = validator.normalizeEmail(validator.trim(email))

            if (!validator.isLength(req.body.email, {min: constants.EMAIL_MIN_LENGTH})) {
                user.errors.push(msg.EMAIL_MIN_LENGTH);
            } else {
                user.email = req.body.email;
            }

            if (!validator.isEmail(req.body.email)) {
                user.errors.push(msg.EMAIL_BAD_FORMAT);
                user.email = undefined;
            }

            req.body.password = validator.trim(password);
            if (!validator.isLength(req.body.password, {min: constants.PASSWORD_MIN_LENGTH})) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            req.body.repeatPassword = validator.trim(repeatPassword);
            if (!validator.equals(req.body.password, req.body.repeatPassword)) {
                user.errors.push(msg.REPEAT_PASSWORD_NOT_EQUALS);
            }

            req.body.fullName = validator.trim(fullName);
            user.fullName = req.body.fullName;

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

            req.body.email = validator.normalizeEmail(validator.trim(email))

            if (!validator.isLength(req.body.email, {min: constants.EMAIL_MIN_LENGTH})) {
                user.errors.push(msg.EMAIL_MIN_LENGTH);
            } else {
                user.email = req.body.email;
            }

            if (!validator.isEmail(req.body.email)) {
                user.errors.push(msg.EMAIL_BAD_FORMAT);
                user.email = undefined;
            }

            req.body.password = validator.trim(password);
            if (!validator.isLength(req.body.password, {min: constants.PASSWORD_MIN_LENGTH})) {
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

            let {name, price, imageUrl, description, brand} = req.body;

            let shoe = {
                errors: [],
            };

            req.body.name = validator.trim(name);
            if (!validator.isLength(req.body.name, constants.NAME_MIN_LENGTH)) {
                shoe.errors.push(msg.NAME_MIN_LENGTH);
            } else {
                shoe.name = req.body.name;
            }

            if (!validator.isAlphanumeric(req.body.name)) {
                shoe.errors.push(msg.NAME_ALPHANUMERIC);
                shoe.name = undefined;
            }

            req.body.price = validator.trim(price);
            if (!validator.isFloat(req.body.price)) {
                shoe.errors.push(msg.PRICE_NUMBER);
            } else {
                shoe.price = req.body.price;
            }

            if (Number(req.body.price) < 0) {
                shoe.errors.push(msg.PRICE_POSITIVE);
                shoe.price = undefined;
            }

            req.body.imageUrl = validator.trim(imageUrl);
            if (!validator.isURL(req.body.imageUrl, {protocols: ['http', 'https'], require_protocol: true})) {
                shoe.errors.push(msg.IMAGE_URL_PROTOCOL);
            } else {
                shoe.imageUrl = req.body.imageUrl;
            }

            req.body.description = validator.trim(description);
            if (!validator.isLength(req.body.description, constants.DESCRIPTION_MIN_LENGTH)) {
                shoe.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                shoe.description = req.body.description;
            }

            req.body.brand = validator.trim(brand);
            if (!validator.isLength(req.body.brand, constants.BRAND_MIN_LENGTH)) {
                shoe.errors.push(msg.BRAND_MIN_LENGTH);
            } else {
                shoe.brand = req.body.brand;
            }

            if (!validator.isAlphanumeric(req.body.brand)) {
                shoe.errors.push(msg.BRAND_ALPHANUMERIC);
                shoe.brand = undefined;
            }

            if (!shoe.errors.length) {
                next();
                return;
            }
            res.render('shoes/create', {...shoe, message: shoe.errors.shift()});

        },
        edit(req, res, next) {

            let {name, price, imageUrl, description, brand} = req.body;

            let shoe = {
                errors: [],
            };

            req.body.name = validator.trim(name);
            if (!validator.isLength(req.body.name, constants.NAME_MIN_LENGTH)) {
                shoe.errors.push(msg.NAME_MIN_LENGTH);
            } else {
                shoe.name = req.body.name;
            }

            if (!validator.isAlphanumeric(req.body.name)) {
                shoe.errors.push(msg.NAME_ALPHANUMERIC);
                shoe.name = undefined;
            }

            req.body.price = validator.trim(price);
            if (!validator.isFloat(req.body.price)) {
                shoe.errors.push(msg.PRICE_NUMBER);
            } else {
                shoe.price = req.body.price;
            }

            if (Number(req.body.price) < 0) {
                shoe.errors.push(msg.PRICE_POSITIVE);
                shoe.price = undefined;
            }

            req.body.imageUrl = validator.trim(imageUrl);
            if (!validator.isURL(req.body.imageUrl, {protocols: ['http', 'https'], require_protocol: true})) {
                shoe.errors.push(msg.IMAGE_URL_PROTOCOL);
            } else {
                shoe.imageUrl = req.body.imageUrl;
            }

            req.body.description = validator.trim(description);
            if (!validator.isLength(req.body.description, constants.DESCRIPTION_MIN_LENGTH)) {
                shoe.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                shoe.description = req.body.description;
            }

            req.body.brand = validator.trim(brand);
            if (!validator.isLength(req.body.brand, constants.BRAND_MIN_LENGTH)) {
                shoe.errors.push(msg.BRAND_MIN_LENGTH);
            } else {
                shoe.brand = req.body.brand;
            }

            if (!validator.isAlphanumeric(req.body.brand)) {
                shoe.errors.push(msg.BRAND_ALPHANUMERIC);
                shoe.brand = undefined;
            }

            if (!shoe.errors.length) {
                next();
                return;
            }
            res.render('shoes/edit', {...shoe, message: shoe.errors.shift()});
        }
    }
}