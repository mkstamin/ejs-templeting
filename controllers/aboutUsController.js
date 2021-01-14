/*
 * Title:About us Controller
 * Description:About us Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// About us - moudle scaffolding
const aboutUs = {};

// render about us page
aboutUs.aboutUsController = (req, res) => {
    res.render('pages/about-us/about', { title: 'About Us' });
};

// export moudle
module.exports = aboutUs;
