const categoryModel = require("../model/CategoryModel");
const moment = require("moment");

const postCategoryData = async (req, res) => {
  try {
    let data = req.body;

    data.image = req.file.filename;

    data.date = moment(Date.now()).format("DD-MM-YYYY hh:mm:ss a");
    let result = await categoryModel.create(data);

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

const getCategoryData = async (req, res) => {
  try {
    let result = await categoryModel.find();

    res.status(200).json({
      status: true,
      msg: "data Find !",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const updateCategoryData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    data.image = req.file.filename;
    data.date = moment(Date.now()).format("DD-MM-YYYY hh:mm:ss a");

    await categoryModel.findByIdAndUpdate(findId, data);

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

const deleteCategoryData = async (req, res) => {
  try {
    let findId = req.query.id;
    await categoryModel.findByIdAndDelete(findId);

    res.status(200).json({
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
  postCategoryData,
  getCategoryData,
  updateCategoryData,
  deleteCategoryData,
};
