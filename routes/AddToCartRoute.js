var express = require("express");
var router = express.Router();

const { userMiddleware } = require("../middleware/UserMiddleware");

const {
  postAddToCartData,
  getAddToCartData,
  updateAddToCartData,
  deleteAddToCartData,
} = require("../controller/AddToCartController");

router.post("/addToCart/add", userMiddleware, postAddToCartData);

router.get("/addToCart/get", userMiddleware, getAddToCartData);

router.put("/addToCart/update", userMiddleware, updateAddToCartData);

router.delete("/addToCart/delete", userMiddleware, deleteAddToCartData);

module.exports = router;
