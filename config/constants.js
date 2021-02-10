module.exports = {
    constants: {
        USERNAME_MIN_LENGTH: 5,
        PASSWORD_MIN_LENGTH: 8,
        USERNAME_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
    },
    msg: {
        WRONG_CREDENTIALS: "Wrong username and/or password",
        USERNAME_IS_IN_USE: (username) => {
            return `Username ${username} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
    }
}
