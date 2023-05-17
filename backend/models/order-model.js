const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product"  // Update the reference name to match the model name
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
});



module.exports = mongoose.model("order", OrderSchema);