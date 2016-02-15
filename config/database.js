var mongoose = require('mongoose');

//var env = require('./environment');

// need to enter correct info for deployment
var dbUri = 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot';


mongoose.connect(dbUri);

module.exports = mongoose;
