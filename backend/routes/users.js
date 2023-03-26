var express = require('express');
var router = express.Router();
const cryptoJS = require("crypto-js");

/* GET users listing. */
router.get('/', function(request, response, next) {
  request.app.locals.db.collection("users").find().toArray().then(results => {
      response.send(results);
  });
});

router.post("/add", function(request, response, next) {
  request.app.locals.db.collection("users").insertOne(request.body).then(result => {
    response.send("user added successfully");
  });
});

module.exports = router;
