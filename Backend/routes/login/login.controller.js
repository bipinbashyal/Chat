const { getUserByEmail } = require("../../models/user/users.model");
const { createToken } = require("../../utils/jwt");
const { checkPassword } = require("../../utils/bcrypt");

const httpGetUser = async (req, res) => {
  const user = await getUserByEmail(req.body.email);
  if (user && (await checkPassword(user.password, req.body.password))) {
    const token = await createToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3600000,
    });
    const userData = {
      username: user.username,
      email: user.email,
      uid: user._id,
    };
    return res.status(200).json({ token, userData });
  } else {
    return res.status(401).json({ message: "invalid creds" });
  }
};

module.exports = {
  httpGetUser,
};
