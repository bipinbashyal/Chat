const {
  getUsersExceptUserAndFriends,
} = require("../../models/user/users.model");
const httpGetUsersExceptUserAndFriends = async (req, res) => {
  return res.status(200).json(await getUsersExceptUserAndFriends(req.user._id));
};

module.exports = {
  httpGetUsersExceptUserAndFriends,
};
