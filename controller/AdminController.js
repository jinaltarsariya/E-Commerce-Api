const adminModel = require("../model/AdminModel");
const userModel = require("../model/UserModel");
const sallerModel = require("../model/sallerModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postAdminData = async (req, res) => {
  try {
    let data = req.body;

    if (!data.name || !data.email || !data.mobileNo || !data.password) {
      throw new Error("plz fill up all field !");
    }

    if (data.mobileNo.length < 10 || data.mobileNo.length > 10) {
      throw new Error("plz enter valid number !");
    }

    data.password = await bcrypt.hash(data.password, 10);
    let result = await adminModel.create(data);
    let token = jwt.sign({ id: result._id }, "ADMIN-AUTH");

    res.status(201).json({
      status: true,
      msg: "data created !",
      token: token,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getAdminData = async (req, res) => {
  try {
    let result = await adminModel.find();
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const updateAdminData = async (req, res) => {
  try {
    let findId = req.query.id;
    let data = req.body;

    if (data.mobileNo) {
      if (data.mobileNo.length < 10 || data.mobileNo.length > 10) {
        throw new Error("plz enter valid number !");
      }
    }
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    await adminModel.findByIdAndUpdate(findId, data);

    res.status(200).json({
      status: true,
      data: "date updated !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const deleteAdminData = async (req, res) => {
  try {
    let findId = req.query.id;

    await adminModel.findByIdAndDelete(findId);

    res.status(200).json({
      status: true,
      data: "date deleted !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
    let chechUsername = await adminModel.findOne({
      $or: [{ email: req.body.username }, { mobileNo: req.body.username }],
    });

    if (!chechUsername) {
      throw new Error("plz enter valid username");
    }

    let checkPassword = await bcrypt.compare(
      req.body.password,
      chechUsername.password
    );

    if (!checkPassword) {
      throw new Error("plz enter valid password !");
    }

    res.status(200).json({
      status: true,
      data: "login successfully !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const adminDeleteUser = async (req, res) => {
  try {
    let findId = req.query.id;
    await userModel.findByIdAndDelete(findId);
    res.status(200).json({
      status: true,
      data: "date deleted !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const adminDeleteSaller = async (req, res) => {
  try {
    let findId = req.query.id;
    await sallerModel.findByIdAndDelete(findId);
    res.status(200).json({
      status: true,
      data: "date deleted !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};
module.exports = {
  postAdminData,
  getAdminData,
  updateAdminData,
  deleteAdminData,
  loginAdmin,
  adminDeleteUser,
  adminDeleteSaller,
};
