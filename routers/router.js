/*
 * Title:Routes
 * Description:Application Routes
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// dependencis
const { homeController } = require('../controllers/homeConroller');

// router object - moudle scaffolding
const router = {};

router.control = (app) => {
    // use home get controller
    app.get('/', homeController);
};

// route initialize
router.init = (app) => {
    router.control(app);
};

// exporte moudle
module.exports = router;
