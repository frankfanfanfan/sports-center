module.exports = function (app) {

  app.post("/api/activity", createActivity);
  app.get("/api/activity/:actId", findActivityById);
  app.get("/api/activity", findAllActivities);
  app.put("/api/activity/:actId", updateActivity);
  app.delete("/api/activity/:actId", deleteActivity);
  app.put("/api/activity/:actId/player", registerPlayer);
  app.delete("/api/activity/:actId/player/:userId", removePlayer);

  var activities = [
    {_id: "1", name: "act1", schedule: "", location: "", description: "tennis", capacity: 3, players: []},
    {_id: "2", name: "act2", schedule: "", location: "", description: "soccer", capacity: 25, players: []},
    {_id: "3", name: "act3", schedule: "", location: "", description: "football", capacity: 50, players: []},
    {_id: "4", name: "act4", schedule: "", location: "", description: "basketball", capacity: 20, players: []},
  ];

  function createActivity(req, res) {
    var activity = req.body;
    activity._id = new Date().getTime().toString();
    activities.push(activity);
    res.json(activity);
  }

  function findActivityById(req, res) {
    var actId = req.params["actId"];
    var activity = activities.find(function (activity) {
      return activity._id === actId;
    });
    res.json(activity);
  }

  function findAllActivities(req, res) {
    res.json(activities);
  }

  function updateActivity(req, res) {
    var actId = req.params["actId"];
    var activity = req.body;
    for (var i = 0; i < activities.length; i++) {
      if (activities[i]._id === actId) {
        activities[i].name = activity.name;
        activities[i].schedule = activity.schedule;
        activities[i].location = activity.location;
        activities[i].description = activity.description;
        activities[i].capacity = activity.capacity;
        res.status(200).send(activity);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteActivity(req, res) {
    var actId = req.params["actId"];
    for (var i = 0; i < activities.length; i++) {
      if (activities[i]._id === actId) {
        var j = +i;
        activities.splice(j, 1);
        res.json(activities);
        return;
      }
    }
  }

  function registerPlayer(req, res) {
    var player = req.body;
    var actId = req.params["actId"];
    for(var i = 0; i < activities.length; i++) {
      if (activities[i]._id === actId) {
        for (var j = 0; j < activities[i].players.length; j++) {
          if (activities[i].players[j]._id === player._id) return;
        }
        activities[i].players.push(player);
      }
    }
    res.json(player);
  }

  function removePlayer(req, res) {
    var userId = req.params["userId"];
    var actId = req.params["actId"];
    for (var i = 0; i < activities.length; i++) {
      if (activities[i]._id === actId) {
        for (var j = 0; j < activities[i].players.length; j++) {
          if (activities[i].players[j]._id === userId) {
            var k = +j;
            activities[i].players.splice(k, 1);
            res.json(activities[i].players);
            return;
          }
        }
      }
    }
  }
}
