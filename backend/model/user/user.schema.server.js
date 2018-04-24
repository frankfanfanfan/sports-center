var mongoose = require("mongoose");
var activitySchema = require('../activity/activity.schema.server');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  role: String,
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  description: String,
  activities: [activitySchema],
  likes: [activitySchema],
  dateCreate: {
    type: Date,
    default: Date.now()
  }
}, {collection: 'user'});

module.exports = userSchema;
