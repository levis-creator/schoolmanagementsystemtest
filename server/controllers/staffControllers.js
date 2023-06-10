const Staff=require("../models/staffModel")
const mongoose = require("mongoose");
const getAllStaffs = async (req, res) => {
  const getStaff = await Staff.find({}).sort({ createdAt: -1 });
  res.status(200).json(getStaff);
};
const getStaff = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Staff" });
  }
  const getStaff = await Staff.findById(id);
  if (!getStaff) {
    return res.status(404).json({ error: "No such Staff" });
  }
  res.status(200).json(getStaff);
};
// this creates a new Staff in the system
const createStaff = async (req, res) => {
  const { firstname, middlename, lastname, gender, contact, nextOfKin } = req.body;
  try {
    const insertStaff = await Staff.create({
      firstname,
      middlename,
      lastname,
      gender,
      contact,
      nextOfKin,
    });
    res.status(201).json(insertStaff);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateStaff = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Staff" });
  }
  const updateStaff = await Staff.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!updateStaff) {
    return res.status(404).json({ error: "No such Staff" });
  }
  res.status(200).json(updateStaff);
};
const deleteStaff = async (req, res) => {
  res.json({
    msg: " deleting a Staff Staff data",
  });
};

module.exports = {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff,
};