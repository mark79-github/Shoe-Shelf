let {shoeService} = require('../../services');

module.exports = async (req, res, next) => {
    if (req.user) {
        shoeService.getById(req.params.shoeId, false)
            .then((shoe) => {
                res.locals.isCreator = shoe.creator.toString() === req.user.id.toString();
                res.locals.isBought = shoe.buyers.some(value => value._id.toString() === req.user.id.toString());
            })
            .catch((error) => next(error));
    }

    next();
}