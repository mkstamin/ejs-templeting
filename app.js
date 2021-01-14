/*
 * Title:Projects Initial File
 * Description:Initile file to start the server and full project
 * Author:Mks Tamin
 * Date: 13.01.2021
 *
 */

// dependencies
const express = require('express');
const router = require('./routers/router');
const server = require('./utils/server');
const authentication = require('./middleware/statusMiddleware');

// main app
const app = express();

// set view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views/`);

// set static folder
app.use(express.static(`${__dirname}/public/`));

// route handleing
router.init(app);

// status authenticator
authentication.status(app);

// server start
server.init(app);
