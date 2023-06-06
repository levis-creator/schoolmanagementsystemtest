const Guardians = require("../models/guardianModel");

const getAllGuardians = async (req, res) => {
  const getGuardian = await Guardians.find({}).sort({ createdAt: -1 });
  res.status(200).json(getGuardian);
};
const getGuardian = async (req, res) => {
  res.json({
    msg: " getting single Guardian data",
  });
};
// this creates a new guardian in the system
const createGuardian = async (req, res) => {
  const { firstname, lastname, contact, nationalid } = req.body;
  try {
    const insertGuardian = await Guardians.create({
      firstname,
      lastname,
      contact,
      nationalid,
    });
    res.status(201).json(insertGuardian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateGuardian = async (req, res) => {
  res.json({
    msg: " update Guardian data",
  });
};
const deleteGuardian = async (req, res) => {
  res.json({
    msg: " deleting a Guardian Guardian data",
  });
};

module.exports = {
  getAllGuardians,
  getGuardian,
  createGuardian,
  updateGuardian,
  deleteGuardian,
};
