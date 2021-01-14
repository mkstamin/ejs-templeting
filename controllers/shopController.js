/*
 * Title:shop Controller
 * Description:shop Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// shop - moudle scaffolding
const shop = {};

// render shop page
shop.shopController = (req, res) => {
    res.render('pages/shop/shop', { title: 'Shop' });
};

// export moudle
module.exports = shop;
