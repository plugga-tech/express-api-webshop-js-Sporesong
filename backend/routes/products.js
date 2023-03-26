var express = require('express');
var router = express.Router();
const productModel = require("../models/product-model");

router.get('/', async function(request, response) {
const products = await productModel.find();
response.status(200).json(products);
  });

router.get("/:id",async function(request,response) {
const {_id} = request.body;
const product = await productModel.findById({_id});
response.send(product);
});  

  router.post("/add", async function(request, response) {
    const product = new productModel(request.body);
    await product.save();
    response.status(201).json(product);
  });
  
  module.exports = router;