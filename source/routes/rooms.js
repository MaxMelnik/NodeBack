const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const RoomsController = require('../controllers/roomsController');


let jsonParser = bodyParser.json();
router.get('/', RoomsController.roomSearchHandler.bind(RoomsController));
router.post('/', jsonParser, RoomsController.createRoomHandler.bind(RoomsController));


module.exports = router;