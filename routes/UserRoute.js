var express = require("express");
var router = express.Router();

const {
  postUserData,
  getUserData,
  updateUserData,
  deleteUserData,
  loginUser,
} = require("../controller/UserController");

router.post("/user/add", postUserData);
router.get("/user/get", getUserData);
router.put("/user/update", updateUserData);
router.delete("/user/delete", deleteUserData);
router.get("/user/login", loginUser);

module.exports = router;
