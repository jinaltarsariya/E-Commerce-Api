var express = require("express");
var router = express.Router();

const {
  postPurchageData,
  getPurchageData,
  updatePurchageData,
  deletePurchageData,
} = require("../controller/PurchageController");

const { userMiddleware } = require("../middleware/UserMiddleware");

router.post("/purchage/add", userMiddleware, postPurchageData);
router.get("/purchage/get", userMiddleware, getPurchageData);
router.put("/purchage/update", userMiddleware, updatePurchageData);
router.delete("/purchage/delete", userMiddleware, deletePurchageData);

module.exports = router;
