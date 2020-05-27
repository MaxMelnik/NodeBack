const express = require('express');
const bodyParser = require('body-parser');

const models = require('./models');

var roomsRouter = require('./routes/rooms');

class Application {
    constructor () {
        this.expressApp = express();
        this.manager = new models.ChatRoomManager();
        this.attachRoutes();
    }

    attachRoutes () {
        let app = this.expressApp;
        let jsonParser = bodyParser.json();

        app.use('/rooms', roomsRouter);
    }

}


module.exports = Application;