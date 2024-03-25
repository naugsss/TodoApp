const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
      process.exit(1);
    });
};

module.exports = dbConnect;
