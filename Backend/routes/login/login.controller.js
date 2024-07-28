const { getUserByUsername } = require("../../models/user/users.model");
const { createToken } = require("../../utils/jwt");
const { checkPassword } = require("../../utils/bcrypt");

const httpGetUser = async (req, res) => {
  const user = await getUserByUsername(req.body.username);
  if (user && (await checkPassword(user.password, req.body.password))) {
    res.cookie("id", await createToken(user._id));
    return res.status(200).json({ message: "user logged in successfully" });
  } else {
    return res.status(401).json({ message: "invalid creds" });
  }
};

module.exports = {
  httpGetUser,
};
