const { Router } = require("express");
const {
  httpAddFriend,
  httpSendRequest,
  httpRemoveFriend,
  httpRemoveSentRequest,
  httpRemoveRecievedRequest,
} = require("./friends.controller");

const friendsRouter = Router();

friendsRouter.post("/addFriend", httpAddFriend);
friendsRouter.post("/removeFriend", httpRemoveFriend);
friendsRouter.post("/sendRequest", httpSendRequest);
friendsRouter.post("/removeSentRequest", httpRemoveSentRequest);
friendsRouter.post("/removeReceivedRequest", httpRemoveRecievedRequest);

module.exports = friendsRouter;
