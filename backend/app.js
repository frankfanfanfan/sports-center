module.exports = function(app) {
  require("./services/user.service.server")(app);
  require("./services/activity.service.server")(app);
  var db = require("./model/models.server");
};
