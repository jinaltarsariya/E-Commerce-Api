const purchageModel = require("../model/PurchageModel");
const moment = require("moment");

const postPurchageData = async (req, res) => {
  try {
    let data = req.body;

    data.date = await moment().format("DD-MM-YYYY hh:mm:ss a");

    let result = await purchageModel.create(data);

    res.status(201).json({
      status: true,
      msg: "date created !",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getPurchageData = async (req, res) => {
  try {
    let data = await purchageModel
      .find()
      .populate("product_id")
      .populate("user_id");

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

const updatePurchageData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    await purchageModel.findByIdAndUpdate(findId, data);

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

const deletePurchageData = async (req, res) => {
  try {
    let findId = req.query.id;

    await purchageModel.findByIdAndDelete(findId);

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
  postPurchageData,
  getPurchageData,
  updatePurchageData,
  deletePurchageData,
};
