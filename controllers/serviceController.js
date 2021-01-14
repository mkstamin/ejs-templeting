/*
 * Title:service Controller
 * Description:service Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// service - moudle scaffolding
const service = {};

// render service page
service.serviceController = (req, res) => {
    res.render('pages/service/service', { title: 'Service' });
};

// export moudle
module.exports = service;
