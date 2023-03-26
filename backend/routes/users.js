var express = require('express');
var router = express.Router();
const cryptoJS = require("crypto-js");
const userModel = require("../models/user-model");

/* GET users listing. */
router.get('/', async function(request, response) {
  const users = await userModel.find();
  response.status(200).json(users);
    });

router.get("/:id",async function(request,response) {
  const {_id} = request.body;
  const user = await userModel.findById({_id});
  response.send(user);

});

router.post("/add", async function(request, response) {
  const user = new userModel(request.body);
  await user.save();
  response.status(201).json(user);
});

module.exports = router;
