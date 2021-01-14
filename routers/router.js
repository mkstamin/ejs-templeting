/*
 * Title:Routes
 * Description:Application Routes
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// dependencis
const { homeController } = require('../controllers/homeConroller');
const { aboutUsController } = require('../controllers/aboutUsController');
const { blogController } = require('../controllers/blogController');
const { contactController } = require('../controllers/contactController');
const { serviceController } = require('../controllers/serviceController');
const { shopController } = require('../controllers/shopController');
const { appointmentController } = require('../controllers/appointmentController');

// router object - moudle scaffolding
const router = {};

// use controller
router.control = (app) => {
    app.get('/', homeController);
    app.get('/about-us', aboutUsController);
    app.get('/blog', blogController);
    app.get('/contact', contactController);
    app.get('/service', serviceController);
    app.get('/shop', shopController);
    app.get('/appointment', appointmentController);
};

// route initialize
router.init = (app) => {
    router.control(app);
};

// exporte moudle
module.exports = router;
