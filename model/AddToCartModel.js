const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addToCartSchema = new Schema({
  product_id: { type: mongoose.Schema.ObjectId, ref: "product" },
  user_id: { type: mongoose.Schema.ObjectId, ref: "user" },
});

let addToCartModel = mongoose.model("addToCart", addToCartSchema);

module.exports = addToCartModel;
