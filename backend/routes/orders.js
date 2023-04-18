var express = require('express');
const OrderModel = require('../models/order-model');
const UserModel = require("../models/user-model");
const ProductModel = require("../models/product-model");
var router = express.Router();

router.get('/all',async function(request, response) {
   const orders = await OrderModel.find().populate("products");
   response.status(200).json(orders);
  });

router.post("/add", async function(request,response) {
  const {orderNumber, productId, quantity, userId} = request.body;
  const user = await UserModel.findOne({_id: userId});
  const orderedProducts = [];
  for (let i = 0; i < orderedProducts.length; i++) {
    const product = await ProductModel.findById(orderedProducts[i]);
    if (!product) {
      return response.status(400).send(`Product was not found`);
    }
    orderedProducts.push(product._id);
  }
  const order = new OrderModel({
    orderNumber: orderNumber,
    products: orderedProducts,
    quantity: quantity,
    user: user
  });
  
  await order.save();
  response.send(order);
});
  
  
module.exports = router;