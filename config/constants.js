module.exports = {
    constants: {
        EMAIL_MIN_LENGTH: 3,
        PASSWORD_MIN_LENGTH: 3,
        EMAIL_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
        NAME_MIN_LENGTH: 3,
        BRAND_MIN_LENGTH: 3,
        DESCRIPTION_MIN_LENGTH: 3,
    },
    msg: {
        WRONG_CREDENTIALS: "Wrong email and/or password",
        EMAIL_IS_IN_USE: (email) => {
            return `Email ${email} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
        EMAIL_MIN_LENGTH: 'Email must be at least 3 characters',
        EMAIL_BAD_FORMAT: 'Invalid email format',
        PASSWORD_MIN_LENGTH: 'Password must be at least 3 characters',
        REPEAT_PASSWORD_NOT_EQUALS: 'Repeat password have to be equal to tha password',
        NAME_MIN_LENGTH: 'Name must be at least 3 characters',
        NAME_ALPHANUMERIC : 'Name must contain only latin letters and digits',
        PRICE_NUMBER: 'Price must be a valid number/s',
        PRICE_POSITIVE: 'Price must be a positive number',
        BRAND_MIN_LENGTH: 'Brand must be at least 3 characters',
        BRAND_ALPHANUMERIC : 'Brand must contain only latin letters and digits',
        DESCRIPTION_MIN_LENGTH: 'Description must be at least 3 characters',
        IMAGE_URL_PROTOCOL: 'ImageUrl must start with http or https',
    }
}
