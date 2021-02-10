const {Router} = require('express');
const router = Router();

const {userController, homeController, errorController, shoeController} = require('../controllers');
const {isLogged} = require('../middlewares');

router.use('/', homeController);
router.use('/users', userController);
router.use('/shoes', isLogged, shoeController);

router.use('*', errorController);

module.exports = router;
