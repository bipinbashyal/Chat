const express = require("express");
const cors = require("cors");
const registerRouter = require("./routes/register/register.router");
const loginRouter = require("./routes/login/login.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("welcome to the backend");
});

module.exports = app;
