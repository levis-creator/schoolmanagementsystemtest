require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// routes imports
const studentsRoutes = require("./routes/studentsRoutes");
const guardiansRoutes = require("./routes/guardiansRoutes");
const staffRoutes = require("./routes/staffRoutes");

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(cors());
// routes
app.use("/api/students", studentsRoutes);
app.use("/api/guardians", guardiansRoutes);
app.use("/api/staffs", staffRoutes);

// server response
mongoose
  .connect(mongoURI)
  .then(() => {
    // listening for request
    app.listen(port, () => {
      console.log(`connected to db && listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
