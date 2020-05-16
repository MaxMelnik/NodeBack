const models = require('../models');

class RoomsController {
    constructor() {
        this.manager = new models.ChatRoomManager();
    }

    createRoomHandler(req, res) {
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
}

module.exports = RoomsController;
