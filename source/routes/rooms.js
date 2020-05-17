const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const RoomsController = require('../controllers/roomsController');


let jsonParser = bodyParser.json();
router.post('/', jsonParser, RoomsController.createRoomHandler.bind(RoomsController));


module.exports = router;