const { addUser } = require("../../models/user/users.model");

const httpRegisterUser = async (req, res) => {
  return res.status(201).json(await addUser(req.body));
};

module.exports = { httpRegisterUser };
