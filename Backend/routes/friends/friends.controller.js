const {
  addFriend,
  addSentRequest,
  addReceivedRequest,
  removeFriend,
  removeSentRequest,
  removeReceivedRequest,
} = require("../../models/user/users.model");

const httpAddFriend = async (userId, friendId) => {
  return await addFriend(userId, friendId);
};

const httpAddSentRequest = async (userId, friendId) => {
  return await addSentRequest(userId, friendId);
};
const httpAddReceivedRequest = async (userId, friendId) => {
  return await addReceivedRequest(userId, friendId);
};

const httpSendRequest = async (userId, friendId) => {
  await httpAddReceivedRequest(friendId, userId);
  return await httpAddSentRequest(userId, friendId);
};

const httpRemoveFriend = async (userId, friendId) => {
  await removeFriend(friendId, userId);
  return await removeFriend(userId, friendId);
};

const httpRemoveSentRequest = async (userId, friendId) => {
  await removeReceivedRequest(friendId, userId);
  return await removeSentRequest(userId, friendId);
};

const httpRemoveRecievedRequest = async (userId, friendId) => {
  await removeSentRequest(friendId, userId);
  return await removeReceivedRequest(userId, friendId);
};

module.exports = {
  httpAddFriend,
  httpSendRequest,
  httpRemoveFriend,
  httpRemoveSentRequest,
  httpRemoveRecievedRequest,
};
