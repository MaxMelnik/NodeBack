const express = require('express');
const router = express.Router();
//const asyncMiddle = require('../module/asyncMiddle');
const bodyParser = require('body-parser');
const RoomsController = require('../controllers/roomsController');



let jsonParser = bodyParser.json();
let roomsController = new RoomsController();
router.post('/', jsonParser, roomsController.createRoomHandler.bind(roomsController));




module.exports = router;