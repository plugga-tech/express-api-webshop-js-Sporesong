var express = require('express');
var router = express.Router();
const cryptoJS = require("crypto-js");
const UserModel = require("../models/user-model");
const { findOne } = require('../models/user-model');

/* GET users listing. */
router.get('/', async function(request, response) {
  const users = await UserModel.find();
  response.status(200).json(users);
    });

router.post("/",async function(request,response) {
  const userId = request.body.id;
  const user = await UserModel.findById(userId);
  response.status(201).json(user);
});

router.post("/add", async function(request, response) {
  const user = new UserModel(request.body);
  await user.save();
  response.status(201).json(user);
});

router.post("/login", async function(request, response) {
  const {email, password} = request.body;
  const loggedInUser = await UserModel.findOne({email: email});
  if(!loggedInUser) {
    return response.status(404).send({message: "Cannot find the user."});
  }
  const validPassword = await loggedInUser.comparePassword(password);
  if(!validPassword) {
    return response.status(401).send({message: "The password is incorrect, please check your password"})
  }
  response.send(loggedInUser);
});

module.exports = router;
