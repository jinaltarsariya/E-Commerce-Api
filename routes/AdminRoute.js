var express = require("express");
var router = express.Router();

const {
  postAdminData,
  getAdminData,
  updateAdminData,
  deleteAdminData,
  loginAdmin,
  adminDeleteUser,
  adminDeleteSaller,
} = require("../controller/AdminController");

router.post("/admin/add", postAdminData);
router.get("/admin/get", getAdminData);
router.put("/admin/update", updateAdminData);
router.delete("/admin/delete", deleteAdminData);
router.get("/admin/login", loginAdmin);
router.delete("/admin/deleteUser", adminDeleteUser);
router.delete("/admin/deleteSaller", adminDeleteSaller);

module.exports = router;
