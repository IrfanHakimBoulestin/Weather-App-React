var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();

router.get('/', function(req, res, next) {

  const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    accesskeyapiweather: String
  });
  const Users = mongoose.default.model('Users', usersSchema)
  Users.find({}, (err, found) => {
    if (!err) return res.send(found);
    res.send("Some error occurred!")
  });
});

module.exports = router;
