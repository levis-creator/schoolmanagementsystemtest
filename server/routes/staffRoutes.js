const express = require("express");
const {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffControllers");

const router = express.Router();

router.get("/", getAllStaffs);
router.get("/:id", getStaff);
router.post("/", createStaff);
router.patch("/:id", updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;
