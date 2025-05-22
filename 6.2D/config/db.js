const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

const uri = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = connectDB;
