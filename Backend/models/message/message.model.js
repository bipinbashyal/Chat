const messageModel = require("./message.mongo");

const getAllChatMessage = async (chatId) => {
  try {
    return await messageModel.find({ chat_id: chatId });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getAllChatMessage,
};
