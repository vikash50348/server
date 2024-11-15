require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.get("/twitter", (req, res) => {
  res.send("twitter");
});
app.listen(process.env.PORT, () => {
  console.log(`running on poart ${port}`);
});
