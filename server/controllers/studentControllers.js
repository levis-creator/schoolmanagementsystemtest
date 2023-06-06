const Student = require("../models/studentModel");
const mongoose = require("mongoose");
const getAllStudents = async (req, res) => {
  const getStudent = await Student.find({}).sort({ createdAt: -1 });
  res.status(200).json(getStudent);
};
const getStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Student" });
  }
  const getStudent = await Student.findById(id);
  if (!getStudent) {
    return res.status(404).json({ error: "No such Student" });
  }
  res.status(200).json(getStudent);
};
// this creates a new student in the system
const createStudent = async (req, res) => {
  const { firstname, middlename, lastname, gender, dob, guardians } = req.body;
  try {
    const insertStudent = await Student.create({
      firstname,
      middlename,
      lastname,
      gender,
      dob,
      guardians,
    });
    res.status(201).json(insertStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Student" });
  }
  const updateStudent = await Student.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!updateStudent) {
    return res.status(404).json({ error: "No such Student" });
  }
  res.status(200).json(updateStudent);
};
const deleteStudent = async (req, res) => {
  res.json({
    msg: " deleting a student student data",
  });
};

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
