const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const registerRouter = require("./routes/register/register.router");
const loginRouter = require("./routes/login/login.router");

const authenticate = require("./auth/server.auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.get("/", authenticate, (req, res) => {
  res.send("welcome to the backend");
});

module.exports = app;
