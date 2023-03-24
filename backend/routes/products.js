var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/', function(request, response) {
    response.send('products routern');
  });

router.post("/add", function(request, response) {
    let newProduct = request.body;
    newProduct.id = //generera nummer här;
    products.push(newProduct);
})  

  module.exports = router;