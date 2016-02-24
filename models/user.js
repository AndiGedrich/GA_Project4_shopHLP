var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
     email: String,
     password: String
 });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);




// userSchema.methods.generateHash = function(password){
//   return bcrypt.hashSynch(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.local.password);
// };

