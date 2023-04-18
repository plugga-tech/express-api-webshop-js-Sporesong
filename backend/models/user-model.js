const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {type: String,
        required: true},
    email: {type: String,
        required: true},
    password: {type: String,
        required: true}
});

UserSchema.methods.comparePassword =  function (loginPassword) {
    return this.password === loginPassword;
};

module.exports = mongoose.model("user", UserSchema);