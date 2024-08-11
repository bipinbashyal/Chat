const { Router } = require("express");

const {
  httpGetChatMessages,
  httpAddMessage,
  httpRemoveMessage,
} = require("./messages.controller");

const messagesRouter = Router();

messagesRouter.get("/getmessages", httpGetChatMessages);
messagesRouter.post("/addmessage", httpAddMessage);
messagesRouter.post("/removemessage", httpRemoveMessage);

module.exports = messagesRouter;
