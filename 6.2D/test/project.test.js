const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../server");
const Project = require("../models/Project");
const path = require("path");
const fs = require("fs");
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

const uri = process.env.MONGO_URI;

chai.use(chaiHttp);

describe("Project Routes", () => {

  before(async () => {
    await mongoose.connect(uri);
    // await Project.deleteMany({});
  });

  it("should GET the home page with projects", (done) => {
    chai.request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include("Welcome to SIT725 Week 4");
        done();
      });
  });

  it("should fail POST when required fields are missing", (done) => {
    chai.request(app)
      .post("/")
      .type("form")
      .send({ title: "", description: "", link: "" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.include("");
        done();
      });
  });

  it("should return 400 when image file is missing", (done) => {
  chai.request(app)
    .post("/projects")
    .type("form")
    .field("title", "No Image")
    .field("description", "Missing file field")
    .field("link", "https://example.com")
    .end((err, res) => {
      expect(res).to.have.status(400);
      expect(res.text).to.include("");
      done();
    });
});


  it("should find the newly added project in the database", async () => {
    const project = await Project.findOne({ title: "Test Card" });
    expect(project).to.exist;
    expect(project.description).to.equal("A test card");
  });

});
