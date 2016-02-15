// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
// var userSchema = mongoose.Schema({
//   local : {
//     email: String,
//     password: String,
//   }
// });


// var passportLocalMongoose = require('passport-local-mongoose');


// userSchema.methods.generateHash = function(password){
//   return bcrypt.hashSynch(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.local.password);
// };

//User.plugin(passportLocalMongoose);

//module.exports = mongoose.model('User', userSchema);
