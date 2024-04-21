const { Double } = require("bson");
const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    active: Boolean,
})


const Item = model("Item", ItemSchema)

module.exports = Item;