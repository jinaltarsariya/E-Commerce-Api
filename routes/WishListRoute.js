var express = require("express");
var router = express.Router();

const { userMiddleware } = require("../middleware/UserMiddleware");

const {
  postWishListData,
  getWishListData,
  updateWishListData,
  deleteWishListData,
} = require("../controller/WishListController");

router.post("/wishList/add", userMiddleware, postWishListData);

router.get("/wishList/get", userMiddleware, getWishListData);

router.put("/wishList/update", userMiddleware, updateWishListData);

router.delete("/wishList/delete", userMiddleware, deleteWishListData);

module.exports = router;
