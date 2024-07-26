const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the backend");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Thanks");
});
app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Thanks");
});

module.exports = app;
