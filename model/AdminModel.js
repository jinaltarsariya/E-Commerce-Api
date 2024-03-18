const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: { type: String },
  email: { type: String, require: true, unique: true },
  mobileNo: { type: String, require: true, unique: true },
  password: { type: String },
});

let adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;
