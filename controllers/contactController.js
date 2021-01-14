/*
 * Title:contact Controller
 * Description:contact Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// contact - moudle scaffolding
const contact = {};

// render contact page
contact.contactController = (req, res) => {
    res.render('pages/contact/contact', { title: 'Contact' });
};

// export moudle
module.exports = contact;
