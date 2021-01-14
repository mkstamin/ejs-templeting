// dependencies
require('dotenv').config();

const server = {};

// PORT from the .env file
const { PORT } = process.env;

server.start = (app) => {
    // start the servet
    app.listen(PORT, () => {
        console.log(`Server in running on PORT ${PORT}`);
    });
};

server.init = (app) => {
    server.start(app);
};

module.exports = server;
