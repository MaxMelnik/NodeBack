const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const RoomsController = require('../controllers/roomsController');


let jsonParser = bodyParser.json();
router.get('/', RoomsController.roomSearchHandler.bind(RoomsController));
router.post('/', jsonParser, RoomsController.createRoomHandler.bind(RoomsController));
router.get('/:roomId/messages', RoomsController.getMessagesHandler.bind(RoomsController));
router.post('/:roomId/messages', jsonParser, RoomsController.postMessageHandler.bind(RoomsController));


module.exports = router;