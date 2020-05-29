var mongoose = require('mongoose');

var ChatRoom = new mongoose.Schema({
    _id: { type: Number },
    Name: String,
    messages: [
        {
            _id: Number,
            body: String,
            userName: String,
            datetime: { type: Date, default: Date.now }
        }
    ],
    _nextMessgageId: { type: Number },
});

module.exports = mongoose.model('ChatRoom', ChatRoom);