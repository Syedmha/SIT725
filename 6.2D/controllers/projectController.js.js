const Project = require("../models/Project");

exports.renderHome = async (req, res) => {
  const projects = await Project.find({});
  res.render("index", { projects });
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const image = req.file.filename;
    const newProject = new Project({ title, description, link, image });
    await newProject.save();
    res.redirect("/?submitted=true");
  } catch (err) {
    res.status(400).send("Error uploading project");
  }
};
