const { getDataFromToken } = require("../utils/jwt");
const { getUserById } = require("../models/user/users.model");

const authenticateUser = async (req, res, next) => {
  try {
    const { data } = await getDataFromToken(req.cookies.token);
    const user = await getUserById(data);
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = authenticateUser;
