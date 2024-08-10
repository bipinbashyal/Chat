const { Router } = require("express");
const {
  httpAddFriend,
  httpSendRequest,
  httpRemoveFriend,
  httpRemoveSentRequest,
  httpRemoveRecievedRequest,
  httpGetReceivedRequests,
  httpGetSentRequests,
  httpGetFriends,
} = require("./friends.controller");

const friendsRouter = Router();

friendsRouter.get("/getReceivedRequests", httpGetReceivedRequests);
friendsRouter.get("/getSentRequests", httpGetSentRequests);
friendsRouter.get("/getFriends", httpGetFriends);

friendsRouter.post("/addFriend", httpAddFriend);
friendsRouter.post("/removeFriend", httpRemoveFriend);
friendsRouter.post("/sendRequest", httpSendRequest);
friendsRouter.post("/removeSentRequest", httpRemoveSentRequest);
friendsRouter.post("/removeReceivedRequest", httpRemoveRecievedRequest);

module.exports = friendsRouter;
