var express = require('express');
const OrderModel = require('../models/order-model');
var router = express.Router();

router.get('/all',async function(request, response) {
   const orders = await OrderModel.find().populate("products");
   response.status(200).json(orders);
  });

router.post("/add", async function(request, response) {
    const order = await OrderModel.create(request.body);
    const products = order.products;
    products.forEach(async (product) => {
        await ProductModel.updateOne({name: request.body.name}, {$set: {lager: - quantity}});  
    });
    response.status(201).json(order);
});


  module.exports = router;