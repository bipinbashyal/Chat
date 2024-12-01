const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT_ROUND;

const generateHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error);
    throw new Error("Error hashing password");
  }
};

const checkPassword = async (hash, password) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

module.exports = {
  generateHash,
  checkPassword,
};
