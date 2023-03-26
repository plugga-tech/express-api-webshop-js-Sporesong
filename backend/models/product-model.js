const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    productName: String,
    description: String,
    price: Number
});

