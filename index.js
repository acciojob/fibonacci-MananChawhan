// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require("express");
const path = require("path");
const fibonacci = require("./script");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.html"));
});

app.post("/fibnocci", (req, res) => {
  const {n} = req.body;
  const ans = fibonacci(n);
  console.log(req.body)
  res.send({ message: ans });
});
//your code here
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.status(200).send(a + b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
