const express = require('express');
const models = require('./models');

var roomsRouter = require('./routes/rooms');

const db = require('./schema/');

class Application {
    constructor() {
        this.expressApp = express();
        this.manager = new models.ChatRoomManager();
        this.attachRoutes();
        //this.test();
    }

    attachRoutes() {
        let app = this.expressApp;
        app.use('/rooms', roomsRouter);
        app.use(function(err, req, res, next) {
            console.error(err.stack);
            res.status(500).send('Something broke!');
          });
    }

    test() {
        console.log("test() started");
        let chatRoom = new db.ChatRoom(
            {
                _id: 0,
                name: 'TestRoomName1',
                _nextMessgageId: 0
            }
        );
        chatRoom.save(function (err) {
            if (err) {
                console.error(err);
                throw err;
            }
            console.log(chatRoom.name + " saved to ChatRoom collection.");
        });
        console.log("test() finished");
    }

}


module.exports = Application;