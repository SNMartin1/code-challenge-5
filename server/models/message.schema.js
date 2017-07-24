var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user: {type: String, required: true},
  message: {type: String, required: true}
});

//export model
module.exports = mongoose.model('User', userSchema);
