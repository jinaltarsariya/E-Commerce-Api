const wishListModel = require("../model/WishListModel");

const postWishListData = async (req, res) => {
  try {
    let data = req.body;
 
    console.log(data);
    let result = await wishListModel.create(data);

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

const getWishListData = async (req, res) => {
  try {
    let result = await wishListModel
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

const updateWishListData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    await wishListModel.findByIdAndUpdate(findId, data);

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

const deleteWishListData = async (req, res) => {
  try {
    let findId = req.query.id;

    await wishListModel.findByIdAndDelete(findId);

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
  postWishListData,
  getWishListData,
  updateWishListData,
  deleteWishListData,
};
