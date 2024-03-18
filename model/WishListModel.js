const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wishListSchema = new Schema({
  product_id: { type: mongoose.Schema.ObjectId, ref: "product" },
  user_id: { type: mongoose.Schema.ObjectId, ref: "user" },
});

let wishListModel = mongoose.model("wishList", wishListSchema);

module.exports = wishListModel;
