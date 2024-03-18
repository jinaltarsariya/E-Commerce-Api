var express = require("express");
var router = express.Router();

const upload = require("../Multer");

const { sallerMiddleware } = require("../middleware/SallerMiddleware");
const { userMiddleware } = require("../middleware/UserMiddleware");

const {
  postProductData,
  getProductData,
  updateProductData,
  deleteProductData,
} = require("../controller/ProductController");

router.post(
  "/product/add",
  upload.single("image"),
  sallerMiddleware,
  postProductData
);

router.get("/product/get", userMiddleware, getProductData);

router.put(
  "/product/update",
  upload.single("image"),
  sallerMiddleware,
  updateProductData
);

router.delete("/product/delete", sallerMiddleware, deleteProductData);

module.exports = router;
