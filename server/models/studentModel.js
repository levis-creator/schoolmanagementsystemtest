const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
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
    dob: {
      type: String,
      require: true,
    },
    guardians: [{type: Schema.Types.ObjectId, ref: "Guardians"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Students", studentSchema);
