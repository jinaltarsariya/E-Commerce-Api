const productModel = require("../model/ProductModel");
const moment = require("moment");

const postProductData = async (req, res) => {
  try {
    let data = req.body;

    console.log(data);

    data.image = req.file.filename;
    data.date = moment(Date.now()).format("DD-MM-YYYY hh:mm:ss a");

    let result = await productModel.create(data);

    res.status(201).json({
      status: true,
      msg: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getProductData = async (req, res) => {
  try {
    let data = await productModel
      .find()
      .populate("category_id")
      .populate("saller_id");
    res.status(201).json({
      status: true,
      msg: data,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const updateProductData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    data.image = req.file.filename;
    await productModel.findByIdAndUpdate(findId, data);

    res.status(201).json({
      status: true,
      msg: "data update !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const deleteProductData = async (req, res) => {
  try {
    let findId = req.query.id;

    await productModel.findByIdAndDelete(findId);

    res.status(201).json({
      status: true,
      msg: "data deleted !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = {
  postProductData,
  getProductData,
  updateProductData,
  deleteProductData,
};
