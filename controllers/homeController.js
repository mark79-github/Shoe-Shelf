const {Router} = require('express');
const router = Router();

const {isGuest} = require('../middlewares');

router.get('/', isGuest, (req, res) => {
    res.render('home/guest');
});

module.exports = router;
