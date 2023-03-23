var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users routern ');
});

router.get("/newUser", function(request, response) {
  response.send("här addas nya users")
});

module.exports = router;
