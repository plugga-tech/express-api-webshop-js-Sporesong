var express = require('express');
var router = express.Router();
const ProductModel = require("../models/product-model");

router.get('/', async function(request, response) {
const products = await ProductModel.find();
response.status(200).json(products);
  });

router.get("/:id", async function(request,response) {
  const {_id} = request.params;
  const product = await ProductModel.findById(_id);
  response.send(product);
});  

router.post("/add", async function(request, response) {
  const product = new ProductModel(request.body);
  await product.save();
  response.status(201).json(product);
});
  
  module.exports = router;