var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("userModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findAllUsers = findAllUsers;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.enrollActivity = enrollActivity;
userModel.quitActivity = quitActivity;
userModel.likeActivity = likeActivity;
userModel.dislikeActivity = dislikeActivity;

module.exports = userModel;

function createUser(user){
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findAllUsers(){
  return userModel.find();
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user){
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.remove({_id: userId});
}

function enrollActivity(userId, activityId) {
  return userModel.findUserById(userId)
    .then(function(user) {
      if (!user.activities.includes(activityId)) {
        user.activities.push(activityId);
        return user.save();
      }
    })
}

function quitActivity(userId, activityId) {
  return userModel.findUserById(userId)
    .then(function(user) {
      user.activities.pull(activityId);
      return user.save();
    })
}

function likeActivity(userId, activityId) {
  return userModel.findUserById(userId)
    .then(function(user) {
      if (!user.likes.includes(activityId)) {
        user.likes.push(activityId);
        return user.save();
      }
    })
}

function dislikeActivity(userId, activityId) {
  return userModel.findUserById(userId)
    .then(function(user) {
      user.likes.pull(activityId);
      return user.save();
    })
}




