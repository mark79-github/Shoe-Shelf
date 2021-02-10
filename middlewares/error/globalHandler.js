module.exports = (error, req, res, next) => {
    console.log(error.message);
    return res.status(500).render('errors/5xx', {message: error.message});
}