const userModel = require("./users.mongo");
const { generateHash } = require("../../utils/bcrypt");

const addUser = async (data) => {
  data.password = await generateHash(data.password);
  return await userModel.create(data);
};

const getUserById = async (id) => {
  return await userModel.findOne({ id });
};
const getUserByUsername = async (username) => {
  return await userModel.findOne({ username });
};

module.exports = {
  addUser,
  getUserById,
  getUserByUsername,
};
