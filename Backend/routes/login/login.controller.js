const { getUserById } = require("../../models/user/users.model");

const httpGetUser = async (req, res) => {
  res.send("Thanks for login");
};

module.exports = {
  httpGetUser,
};
