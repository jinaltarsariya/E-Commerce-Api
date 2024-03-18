var express = require("express");
var router = express.Router();

const upload = require("../Multer");

const { adminMiddleware } = require("../middleware/AdminMiddleware");

const {
  postCategoryData,
  getCategoryData,
  updateCategoryData,
  deleteCategoryData,
} = require("../controller/CategoryController");

router.post(
  "/category/add",
  upload.single("image"),
  adminMiddleware,
  postCategoryData
);

router.get("/category/get", getCategoryData);

router.put(
  "/category/update",
  upload.single("image"),
  adminMiddleware,
  updateCategoryData
);

router.delete("/category/delete", adminMiddleware, deleteCategoryData);

module.exports = router;
