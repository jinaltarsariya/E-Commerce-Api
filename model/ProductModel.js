const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  category_id: { type: mongoose.Schema.ObjectId, ref: "category" },
  saller_id: { type: mongoose.Schema.ObjectId, ref: "saller" },
  name: { type: String, require: true },
  discription: { type: String, require: true },
  price: { type: String, require: true },
  image: String,
  date: { type: String },
});

let productModel = mongoose.model("product", productSchema);

module.exports = productModel;
