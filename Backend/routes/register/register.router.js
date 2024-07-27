const { Router } = require("express");

const { httpRegisterUser } = require("./register.controller");

const registerRouter = Router();

registerRouter.post("/", httpRegisterUser);

module.exports = registerRouter;
