var mongoose = require("mongoose");
var activitySchema = require('./activity.schema.server');
var activityModel = mongoose.model("activityModel", activitySchema);
// var userModel = require("../user/user.model.server");

activityModel.createActivity = createActivity;
activityModel.findActivityById = findActivityById;
activityModel.findAllActivities = findAllActivities;
activityModel.updateActivity = updateActivity;
activityModel.deleteActivity = deleteActivity;
activityModel.registerPlayer = registerPlayer;
activityModel.removePlayer = removePlayer;

module.exports = activityModel;

function createActivity(activity) {
  return activityModel.create(activity);
}

function findActivityById(actId) {
  return activityModel.findById(actId);
}

function findAllActivities() {
  return activityModel.find();
}

function updateActivity(actId, activity) {
  return activityModel.update({_id: actId}, activity);
}

function deleteActivity(actId) {
  return activityModel.remove({_id: actId});
}

function registerPlayer(userId, actId) {
  return activityModel.findById(actId)
    .then(function(activity) {
      for (var i = 0; i < activity.players.length; i++) {
        if (String(activity.players[i]) === String(userId)) {
          return;
        }
      }
      activity.players.push(userId);
      return activity.save();
      // activity.players.findById(userId)
      //   .then(function(user) {
      //     if (!user) {
      //       activity.players.push(userId);
      //       return activity.save();
      //     } else {
      //       console.log('exist');
      //     }
      //   });
    })
}

function removePlayer(userId, actId) {
  return activityModel.findById(actId)
    .then(function(activity) {
      activity.players.pull(userId);
      return activity.save();
    });
}





