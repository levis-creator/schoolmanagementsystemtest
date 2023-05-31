require("dotenv").config();
const express = require("express");
const cors = require("cors");
const studentsRoutes = require("./routes/studentsRoutes");
const mongoose = require("mongoose");
const app = express();
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
// server response
mongoose.connect(mongoURI).then(() => {
  app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
});
