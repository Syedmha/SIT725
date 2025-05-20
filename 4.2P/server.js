// require("dotenv").config();
var express = require("express");
var app = express();
// const mongoose = require("mongoose");
const port = 3000;
app.use(express.static(__dirname)); 


// Database Connection

// const uri = process.env.MONGO_URI;
// mongoose
//     .connect(uri)
//     .then(() => console.log("Connected to MongoDB Atlas!"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const cardList = [
    {
        title: "Ferrari F1 Car",
        image: "public/images/ferrari-f1.jpeg",
        link: "About Ferrari F1 Car",
        desciption: "Ferrari doesn’t compete directly in F2 but supports Prema Racing, known for strong performances and developing future F1 talent.",
    },
    {
        title: "Mclaren F1 Car",
        image: "public/images/Mclaren-f1.jpeg",
        link: "About Mclaren F1 Car",
        desciption: "McLaren does not have a direct F2 team, focusing instead on F1 and IndyCar, with drive development handled through partnerships.",
    },
    {
        title: "RedBull F1 Car",
        image: "public/images/redbul-f1.jpeg",
        link: "About RedBull F1 Car",
        desciption: "Red Bull backs teams like Hitech and MP Motorsport, using F2 as a feeder series for its F1 junior program.",
    },
];
app.get("/api/projects", (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" });
});

// const ProjectSchema = new mongoose.Schema({
//     title: String,
//     image: String,
//     link: String,
//     description: String,
// });
// const Project = mongoose.model("Project", ProjectSchema);

// const sampleProject = new Project({
// title: "Kitten 4",
// image: "images/kitten-4.jpg",
// link: "About Kitten 4",
// description: "Demo description about kitten 4"
// });
// sampleProject.save()

app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});