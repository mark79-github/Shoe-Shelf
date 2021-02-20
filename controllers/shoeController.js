const {Router} = require('express');
const router = Router();

const {shoeService} = require('../services');
const {isCreator, validate} = require('../middlewares');

router.get('/', (req, res, next) => {
    shoeService.getAllShoes()
        .then((shoes) => {
            if (shoes) {
                shoes.map(x => x.price = x.price.toFixed(2));
            }
            res.render('home/user', {shoes});
        })
        .catch(next);
});

router.get('/create', (req, res) => {
    res.render('shoes/create');
});

router.post('/create', validate.shoe.create, (req, res, next) => {
    const userId = req.user.id;
    shoeService.create(req.body, userId)
        .then(() => {
            res.redirect('/shoes');
        })
        .catch(next);
});

router.get('/details/:shoeId', isCreator, (req, res, next) => {
    const shoeId = req.params.shoeId;
    shoeService.getById(shoeId, false)
        .then((shoe) => {
            res.render('shoes/details', {...shoe, price: `${shoe.price.toFixed(2)}`});
        })
        .catch(next);
});

router.get('/edit/:shoeId', (req, res, next) => {
    const shoeId = req.params.shoeId;
    shoeService.getById(shoeId, false)
        .then((shoe) => {
            res.render('shoes/edit', {...shoe, price: `${shoe.price.toFixed(2)}`});
        })
        .catch(next);
});

router.post('/edit/:shoeId', validate.shoe.edit, (req, res, next) => {
    const shoeId = req.params.shoeId;
    shoeService.update(shoeId, req.body)
        .then((shoe) => {
            res.redirect(`/shoes/details/${shoe._id}`);
        })
        .catch(next);
});

router.get('/delete/:shoeId', (req, res, next) => {
    const shoeId = req.params.shoeId;
    shoeService.remove(shoeId)
        .then((shoe) => {
            res.redirect('/shoes');
        })
        .catch(next);
});

router.get('/buy/:shoeId', (req, res, next) => {
    const shoeId = req.params.shoeId;
    shoeService.buy(shoeId, req.user.id)
        .then(([shoe, user]) => {
            res.redirect(`/shoes/details/${shoe._id}`);
        })
        .catch(next);
});

module.exports = router;