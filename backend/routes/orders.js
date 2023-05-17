var express = require('express');
const OrderModel = require('../models/order-model');
const UserModel = require("../models/user-model");
const ProductModel = require("../models/product-model");
var router = express.Router();

router.post("/add", async function(request, response) {
  const { products, user } = request.body;
  const currentUser = await UserModel.findById(user);
  const orderedProducts = [];

  let totalQuantity = 0; 

  for (let i = 0; i < products.length; i++) {
    const product = await ProductModel.findById(products[i].productId);
    if (!product) {
      return response.status(400).send(`Product was not found`);
    }

    orderedProducts.push({
      product: product._id,
      quantity: products[i].quantity
    });

    

    totalQuantity += products[i].quantity; 
    product.lager -= products[i].quantity;
    await product.save();
  }

  const order = new OrderModel({
    products: orderedProducts,
    quantity: totalQuantity, 
    user: currentUser._id
  });

  await order.save();
  response.send(order);
});

  
  
module.exports = router;