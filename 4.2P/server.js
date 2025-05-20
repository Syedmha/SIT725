require("dotenv").config();
var express = require("express");
var app = express();
const mongoose = require("mongoose");
const port = 3000;
app.use(express.static(__dirname)); 


// Database Connection

const uri = process.env.MONGO_URI;
mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model("Project", ProjectSchema);


app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});