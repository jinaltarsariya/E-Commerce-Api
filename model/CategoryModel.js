const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String },
  image: { type: String },
  date: { type: String },
});

let categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
