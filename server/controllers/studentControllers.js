getAllStudents = (req, res) => {
  res.json({
    msg: " getting all student data",
  });
};
getStudent = (req, res) => {
  res.json({
    msg: " getting single student data",
  });
};
createStudent = (req, res) => {
  res.json({
    msg: " create student data",
  });
};
updateStudent = (req, res) => {
  res.json({
    msg: " update student data",
  });
};
deleteStudent = (req, res) => {
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
