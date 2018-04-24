module.exports = function (app) {

  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUserByAttribute);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.put("/api/user/:userId/activity", enrollActivity);
  app.delete("/api/user/:userId/activity/:actId", quitActivity);
  app.put("/api/user/:userId/like", likeActivity);
  app.delete("/api/user/:userId/like/:actId", dislikeActivity);

  var users = [
    {_id: "1", username: "o1", password: "o1", role: "owner", email: "", phone: "", firstName: "", lastName: "", description: "", activities: [], likes: []},
    {_id: "2", username: "f1", password: "f1", role: "fan", email: "", phone: "", firstName: "", lastName: "", description: "", activities: [], likes: []},
    {_id: "3", username: "p1", password: "p1", role: "player", email: "", phone: "", firstName: "", lastName: "", description: "", activities: [], likes: []},
    {_id: "4", username: "f2", password: "f2", role: "fan", email: "", phone: "", firstName: "", lastName: "", description: "", activities: [], likes: []}
  ];

  function createUser(req, res) {
    var user = req.body;
    user._id = new Date().getTime().toString();
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function findUserByAttribute(req, res) {
    if (!req.query.password && !req.query.username) {
      findAllUsers(req, res);
    } else if (req.query.password) {
      findUserByCredentials(req, res);
    } else {
      findUserByUsername(req, res);
    }
  }

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    for (var i in users) {
      var cur = users[i];
      if (cur.username === username && cur.password === password) {
        res.status(200).send(cur);
        return;
      }
    }
    res.status(404).send("No user found");
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];

    for (var i in users) {
      var cur = users[i];
      if (cur.username === username) {
        res.status(200).send(cur);
        return;
      }
    }
    res.status(404).send("No user found");
  }

  function findAllUsers(req, res) {
    res.status(200).send(users);
  }

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var user = req.body;

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].username = user.username;
        users[i].password = user.password;
        users[i].email = user.email;
        users[i].phone = user.phone;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].description = user.description;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
}

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        var j = +i;
        users.splice(j, 1);
        res.json(users);
        return;
      }
    }
  }

  function enrollActivity(req, res) {
    var activity = req.body;
    var userId = req.params["userId"];
    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        for (var j = 0; j < users[i].activities.length; j++) {
          if (users[i].activities[j]._id === activity._id) return;
        }
        users[i].activities.push(activity);
      }
    }
    res.json(activity);
  }

  function quitActivity(req, res) {
    var actId = req.params["actId"];
    var userId = req.params["userId"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        for (var j = 0; j < users[i].activities.length; j++) {
          if (users[i].activities[j]._id === actId) {
            var k = +j;
            users[i].activities.splice(k, 1);
            res.json(users[i].activities);
            return;
          }
        }
      }
    }
  }

  function likeActivity(req, res) {
    var activity = req.body;
    var userId = req.params["userId"];
    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        for (var j = 0; j < users[i].likes.length; j++) {
          if (users[i].likes[j]._id === activity._id) return;
        }
        users[i].likes.push(activity);
      }
    }
    res.json(activity);
  }

  function dislikeActivity(req, res) {
    var actId = req.params["actId"];
    var userId = req.params["userId"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        for (var j = 0; j < users[i].likes.length; j++) {
          if (users[i].likes[j]._id === actId) {
            var k = +j;
            users[i].likes.splice(k, 1);
            res.json(users[i].likes);
            return;
          }
        }
      }
    }
  }


};
