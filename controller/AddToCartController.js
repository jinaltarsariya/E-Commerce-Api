const addToCartModel = require("../model/AddToCartModel");

const postAddToCartData = async (req, res) => {
  try {
    let data = req.body;

    let result = await addToCartModel.create(data);

    res.status(201).json({
      status: true,
      msg: "data created !",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getAddToCartData = async (req, res) => {
  try {
    let result = await addToCartModel
      .find()
      .populate("product_id")
      .populate("user_id");

    res.status(200).json({
      status: true,
      msg: "data find !",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const updateAddToCartData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    await addToCartModel.findByIdAndUpdate(findId, data);

    res.status(200).json({
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

const deleteAddToCartData = async (req, res) => {
  try {
    let findId = req.query.id;

    await addToCartModel.findByIdAndDelete(findId);

    res.status(200).json({
      status: true,
      msg: "data delete !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = {
  postAddToCartData,
  getAddToCartData,
  updateAddToCartData,
  deleteAddToCartData,
};
