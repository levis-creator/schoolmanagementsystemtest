const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    admission_date: {
      type: Date,
    },
    admission_no: {
      type: String,
    },
  },
  [Timestamp]
);
