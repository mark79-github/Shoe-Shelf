// const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    if (req.user) {
        // productService.getOne(req.params.productId, false)
        //     .then((product) => {
        //         if (product.creator.toString() !== req.user.id.toString()) {
        //             return res.redirect('back');
        //         }
        //     })
        //     .catch((error) => next(error));
    }

    next();
}