var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(request, response) {
    response.send('orders routern');
  });

  module.exports = router;