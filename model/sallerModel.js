const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sallerSchema = new Schema({
  name: { type: String },
  email: { type: String, require: true, unique: true },
  mobileNo: { type: String, require: true, unique: true },
  password: { type: String },
});

let sallerModel = mongoose.model("saller", sallerSchema);

module.exports = sallerModel;
