const { Router } = require("express");
const { httpGetUser } = require("./login.controller");

const loginRouter = Router();

loginRouter.post("/", httpGetUser);

module.exports = loginRouter;
