/*
 * Title:Status middleware
 * Description:Check status related work
 * Author:Mks Tamin
 * Date: 04.01.2021
 *
 */

// authenticator object - moudle scaffolding
const authenticator = {};

// check error status
authenticator.check = (app) => {
    // 404 error status
    app.use((req, res, next) => {
        const error = new Error();
        error.status = 404;
        next(error);
    });

    // error handleing
    app.use((error, req, res, next) => {
        if (error.status === 404) {
            res.status(404);
            return res.render('error/404');
        }
        res.status(500);
        res.render('error/500');

        return next();
    });
};

authenticator.status = (app) => {
    authenticator.check(app);
};

// exporte module
module.exports = authenticator;
