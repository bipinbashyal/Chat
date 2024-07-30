const chatModel = require("./chat.mongo");

const getAllChat = async (userId) => {
  try {
    return await chatModel.find({ members: userId });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getAllChat,
};
