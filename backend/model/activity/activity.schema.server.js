var mongoose = require("mongoose");
var userSchema = require('../user/user.schema.server');

var activitySchema = mongoose.Schema({
  name: String,
  schedule: String,
  location: String,
  description: String,
  capacity: Number,
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  }],
  dateCreated: {
    type : Date,
    default: Date.now()
  }
}, {collection: 'activity'});

module.exports = activitySchema;
