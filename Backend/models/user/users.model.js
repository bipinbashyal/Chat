const userModel = require("./users.mongo");
const { generateHash } = require("../../utils/bcrypt");

const addUser = async (data) => {
  data.password = await generateHash(data.password);
  return await userModel.create(data);
};

const addFriend = async (userId, friendId) => {
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
  return await userModel.find({});
};

const getFriends = async (userId) => {
  const user = await userModel.findById(userId).populate("friends").exec();
  return user.friends;
};

const getUsersExceptUserAndFriends = async (userId) => {
  const user = await userModel.findById(userId).exec();
  const excludeIds = user.friends.concat(userId);
  return await userModel
    .find({
      _id: { $nin: excludeIds },
    })
    .exec();
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
};
