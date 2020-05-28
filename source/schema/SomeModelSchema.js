var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    date: Date
});

module.exports = mongoose.model('SomeModel', SomeModelSchema );