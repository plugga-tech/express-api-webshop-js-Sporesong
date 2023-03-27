const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        required: true},
    products: {
        type: [mongoose.Types.ObjectId],
        ref: "product"},
    quantity: {
        type: Number,
        required: true},
    user: {
        type: [mongoose.Types.ObjectId],
        ref: "user"}
})



module.exports = mongoose.model("order", OrderSchema);