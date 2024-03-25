const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware to parse json body
app.use(express.json());

// import routes
const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(zPORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to db
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to Todo API </h1>`);
});
