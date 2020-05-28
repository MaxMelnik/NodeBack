var mongoose = require('mongoose'); 
const SomeModel = require('./SomeModelSchema');

var mongoDB = 'mongodb+srv://admin:admin@nodesimplebackmongo-mhvd1.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
//var db = mongoose.connection;

const connectDb = () => {
    return mongoose.connect(mongoDB, { useNewUrlParser: true });
};
  
const db = { connectDb, SomeModel };
  

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

module.exports = db;