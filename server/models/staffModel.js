const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
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
    
    role: {
      type: String,
      require: true,
    },
    nationalId: Number,
    contact: [
      {
        phone: [{type:String}],
        email: [{type:String}]
      },
    ],
    nextOfKin: [
      {
        firstname: String,
        lastname: String,
        relation: String,
        contact: [{ phone: String, email: String }],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);
