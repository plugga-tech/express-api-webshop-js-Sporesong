var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    request.app.locals.db.collection("products").find().toArray().then(results => {
        response.send(results);
    });
  });
  
  router.post("/add", function(request, response, next) {
    request.app.locals.db.collection("products").insertOne(request.body).then(result => {
      response.send("product added successfully");
    });
  });
  
  module.exports = router;