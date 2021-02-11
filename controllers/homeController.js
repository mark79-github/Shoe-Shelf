const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/shoes')
});

module.exports = router;
