require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = 3000;

// Index
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
