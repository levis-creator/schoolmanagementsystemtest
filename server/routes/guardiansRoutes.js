const express = require("express");
const {
  getAllGuardians,
  getGuardian,
  createGuardian,
  updateGuardian,
  deleteGuardian,
} = require("../controllers/guardianControllers");

const router = express.Router();

router.get("/", getAllGuardians);
router.get("/:id", getGuardian);
router.post("/", createGuardian);
router.patch("/:id", updateGuardian);
router.delete("/:id", deleteGuardian);

module.exports = router;
