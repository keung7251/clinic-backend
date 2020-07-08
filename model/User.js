const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phone: {
        type: String,
        required: true,
        min: 8,
        max: 20,
    },
    address: {
        type: String,
        required: true,
        min: 8,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);