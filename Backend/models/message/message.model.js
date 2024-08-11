const messageModel = require("./message.mongo");

const getAllChatMessage = async (chatId, page) => {
  try {
    return await messageModel
      .find({ chat_id: chatId })
      .sort({ createdAt: -1 })
      .skip(page * 10)
      .limit(10);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addMessage = async (message) => {
  try {
    return await messageModel.create(message);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const removeMessage = async (messageId) => {
  try {
    return await messageModel.findByIdAndDelete(messageId);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllChatMessage,
  addMessage,
  removeMessage,
};
