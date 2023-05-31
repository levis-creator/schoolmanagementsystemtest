const express = require("express");
const {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
