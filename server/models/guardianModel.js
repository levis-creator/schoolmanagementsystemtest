const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guardianSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    contact: {
      phonenumber: [
        {
          type: String,
        },
      ],
      email: [{ type: String }],
    },
    nationalid: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Guardians", guardianSchema);
