const userModel = require("./users.mongo");
const { removeFriendsChat } = require("../chat/chat.model");
const { generateHash } = require("../../utils/bcrypt");

const addUser = async (data) => {
  data.password = await generateHash(data.password);
  return await userModel.create(data);
};

const addFriend = async (userId, friendId) => {
  await userModel.findByIdAndUpdate(friendId, {
    $addToSet: { friends: userId },
  });
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const removeFriend = async (userId, friendId) => {
  await removeFriendsChat(userId, friendId);
  await userModel.findByIdAndUpdate(friendId, { $pull: { friends: userId } });
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const addSentRequest = async (userId, friendId) => {
  await userModel.findByIdAndUpdate(friendId, {
    $addToSet: { receivedRequests: userId },
  });
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $addToSet: { sentRequests: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const removeSentRequest = async (userId, friendId) => {
  await userModel.findByIdAndUpdate(friendId, {
    $pull: { receivedRequests: userId },
  });
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $pull: { sentRequests: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const addReceivedRequest = async (userId, friendId) => {
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $addToSet: { receivedRequests: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const removeReceivedRequest = async (userId, friendId) => {
  const user = await userModel
    .findByIdAndUpdate(
      userId,
      { $pull: { receivedRequests: friendId } },
      { new: true } // Return the updated document
    )
    .exec();
  return user;
};

const getUserById = async (userId) => {
  return await userModel.findById(userId);
};
const getUserByEmail = async (email) => {
  return await userModel.findOne({ email });
};

const getAllUsers = async () => {
  return await userModel.find({}).select("username email ");
};

const getFriends = async (userId) => {
  return await userModel
    .findById(userId)
    .populate("friends")
    .select("friends")
    .exec();
};

const getUsersExceptUserAndFriends = async (userId) => {
  const user = await userModel.findById(userId).exec();
  const excludeIds = [
    ...user.friends,
    ...user.sentRequests,
    ...user.receivedRequests,
    userId,
  ];
  return await userModel
    .find({
      _id: { $nin: excludeIds },
    })
    .select("username email ")
    .exec();
};

const getReceivedRequests = async (userId) => {
  return await userModel
    .findById(userId)
    .populate("receivedRequests")
    .select("receivedRequests");
};

const getSentRequests = async (userId) => {
  return await userModel
    .findById(userId)
    .populate("sentRequests")
    .select("sentRequests");
};

module.exports = {
  addUser,
  addFriend,
  addSentRequest,
  addReceivedRequest,
  removeFriend,
  removeSentRequest,
  removeReceivedRequest,
  getUserById,
  getUserByEmail,
  getAllUsers,
  getUsersExceptUserAndFriends,
  getFriends,
  getReceivedRequests,
  getSentRequests,
};
