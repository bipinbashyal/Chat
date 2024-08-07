const { Router } = require("express");

const { httpGetUsersExceptUserAndFriends } = require("./users.controller");

const usersRouter = Router();

usersRouter.get("/", httpGetUsersExceptUserAndFriends);

module.exports = usersRouter;
