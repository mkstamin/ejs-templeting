/*
 * Title:Home Controller
 * Description:Home page controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// home object - moudle scaffolding
const home = {};

// home page controller
home.homeController = (req, res) => {
    res.render('pages/home');
};

// export moudle
module.exports = home;
