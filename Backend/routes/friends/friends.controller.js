const {
  addFriend,
  addSentRequest,
  addReceivedRequest,
  removeFriend,
  removeSentRequest,
  removeReceivedRequest,
} = require("../../models/user/users.model");

const httpAddFriend = async (req, res) => {
  return res.json(await addFriend(req.user._id, req.body.friendId));
};

// const httpAddSentRequest = async (req, res) => {
//   return res.json(await addSentRequest(req.user._id, req.body.friendId));
// };
// const httpAddReceivedRequest = async (req, res) => {
//   return res.json(await addReceivedRequest(req.user._id, req.body.friendId));
// };

const httpSendRequest = async (req, res) => {
  console.log(req.body, req.user._id);
  await addReceivedRequest(req.body.friendId, req.user._id);
  return res.json(await addSentRequest(req.user._id, req.body.friendId));
};

const httpRemoveFriend = async (req, res) => {
  await removeFriend(req.body.friendId, req.user._id);
  return res.json(await removeFriend(req.user._id, req.body.friendId));
};

const httpRemoveSentRequest = async (req, res) => {
  await removeReceivedRequest(req.body.friendId, req.user._id);
  return res.json(await removeSentRequest(req.user._id, req.body.friendId));
};

const httpRemoveRecievedRequest = async (req, res) => {
  await removeSentRequest(req.body.friendId, req.user._id);
  return res.json(await removeReceivedRequest(req.user._id, req.body.friendId));
};

module.exports = {
  httpAddFriend,
  httpSendRequest,
  httpRemoveFriend,
  httpRemoveSentRequest,
  httpRemoveRecievedRequest,
};
