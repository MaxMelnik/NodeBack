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
        app.get('/rooms/:roomId/messages', this.getMessagesHandler.bind(this));
        app.post('/rooms/:roomId/messages', jsonParser, this.postMessageHandler.bind(this));
    }

    getMessagesHandler (req, res) {
        let room = this.manager.getById(req.params.roomId);

        if (!room) {
            res.status(404).send(`Room with id ${req.params.roomId} doesn't exist`);
        } else {
            let messagesJson = room.messages.map(message => message.toJson());
            let response = {
                messages: messagesJson
            };
            res.json(response);
        }
    }

    postMessageHandler (req, res) {
        let room = this.manager.getById(req.params.roomId);

        if (!room) {
            res.status(404).send(`Room with id ${req.params.roomId} doesn't exist`);
        } else if (!req.body.body || !req.body.username) {
            res.status(400).send('Wrong body format');
        } else {
            let message = room.postMessage(req.body.body, req.body.username);
            let response = {
                message: message.toJson()
            };

            res.json(response);
        }
    }

}


module.exports = Application;