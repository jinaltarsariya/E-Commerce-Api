const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const purchageSchema = new Schema({
  product_id: [{ type: mongoose.Schema.ObjectId, ref: "product" }],
  user_id: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: String
});

let purchageModel = mongoose.model("purchage", purchageSchema);

module.exports = purchageModel;
