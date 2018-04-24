var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://frank:fan@ds157089.mlab.com:57089/heroku_wsc1381m');

module.exports = db;

