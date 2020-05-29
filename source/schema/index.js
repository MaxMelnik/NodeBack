var mongoose = require('mongoose'); 
const ChatRoom = require('./ChatRoom');

mongoose.Promise = global.Promise;
var connectionUri = 'mongodb+srv://admin:admin@nodesimplebackmongo-mhvd1.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
console.log('mongoose.connection');

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

module.exports = {db, ChatRoom};