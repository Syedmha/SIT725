const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController.js.js");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.get("/", projectController.renderHome);
router.post("/projects", upload.single("image"), projectController.createProject);

module.exports = router;
