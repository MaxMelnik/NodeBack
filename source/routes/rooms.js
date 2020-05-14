const express = require('express');
const router = express.Router();
const asyncMiddle = require('../module/asyncMiddle');
const bodyParser = require('body-parser');
const roomsController = require('../controllers/roomsController')



let jsonParser = bodyParser.json();
router.post('/', jsonParser, roomsController.createRoomHandler.bind(this));




module.exports = router;