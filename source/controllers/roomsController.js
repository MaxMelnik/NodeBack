const models = require('../models');

class RoomsController {
    static manager = new models.ChatRoomManager();

    static createRoomHandler(req, res) {
        if (!req.body.name) {
            res.status(400).send(`'name' is required param`);
        } else {
            let room = this.manager.createRoom(req.body.name);
            let response = {
                room: room.toJson()
            };
            res.json(response);
        }
    }

    static roomSearchHandler (req, res) {
        let searchString = req.query.searchString || '';
        let rooms = this.manager.findByName(searchString);
        let roomsJson = rooms.map(room => room.toJson());
        let response = {
            rooms: roomsJson
        };

        res.json(response);
    }

    static getMessagesHandler (req, res) {
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

    static postMessageHandler (req, res) {
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
    }k
}

module.exports = RoomsController;
