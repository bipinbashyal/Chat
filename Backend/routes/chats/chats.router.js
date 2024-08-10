const { Router } = require("express");

const {
  httpGetChats,
  httpAddChat,
  httpEditChat,
} = require("./chats.controller");

const chatsRouter = Router();

chatsRouter.get("/getChats", httpGetChats);
chatsRouter.post("/addChat", httpAddChat);
chatsRouter.post("/editChat", httpEditChat);

module.exports = chatsRouter;
