var express = require("express");
var router = express.Router();

const {
  postSallerData,
  getSallerData,
  updateSallerData,
  deleteSallerData,
  loginSaller,
} = require("../controller/SallerController");

router.post("/saller/add", postSallerData);
router.get("/saller/get", getSallerData);
router.put("/saller/update", updateSallerData);
router.delete("/saller/delete", deleteSallerData);
router.get("/saller/login", loginSaller);

module.exports = router;
