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
}

module.exports = RoomsController;
