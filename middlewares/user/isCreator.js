let {shoeService} = require('../../services');

module.exports = async (req, res, next) => {
    if (req.user) {
        shoeService.getById(req.params.shoeId, false)
            .then((shoe) => {
                res.locals.isCreator = shoe.creator.toString() === req.user.id.toString();
                console.log('isCreator', res.locals.isCreator);
            })
            .catch((error) => next(error));
    }

    next();
}