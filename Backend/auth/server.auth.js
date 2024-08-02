const { getDataFromToken } = require("../utils/jwt");
const { getUserById } = require("../models/user/users.model");

const authenticateUser = async (req, res, next) => {
  try {
    const id = await getDataFromToken(req.cookies.id);
    const user = getUserById(id);
    console.log(id, user);
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = authenticateUser;
