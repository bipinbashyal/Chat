const jwt = require("jsonwebtoken");

const createToken = async (data) => {
  const token = await jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 60 }
  );
  return token;
};

const getDataFromToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  createToken,
  getDataFromToken,
};
