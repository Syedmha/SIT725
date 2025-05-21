const express = require('express');
const app = express();
const projectRoutes = require("./routes/projectRoutes");
const path = require('path');
const multer = require("multer");
const connectDB = require("./config/db");
require('dotenv').config();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
app.use(express.static(__dirname)); 


// API routes
app.use("/", projectRoutes);


// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g. 1695293723.jpg
  }
});

const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
