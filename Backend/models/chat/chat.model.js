const chatModel = require("./chat.mongo");

const addChat = async (chat) => {
  try {
    return await chatModel.create(chat);
  } catch (err) {
    throw err;
  }
};

const editChat = async (chat, chatId) => {
  try {
    return await chatModel.findByIdAndUpdate(chatId, chat);
  } catch (err) {
    throw err;
  }
};

const removeChat = async (chatId) => {
  try {
    return await chatModel.findByIdAndDelete(chatId);
  } catch (err) {
    throw err;
  }
};

const getAllChat = async (userId) => {
  try {
    return await chatModel.find({ members: userId }).sort({ updatedAt: -1 });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateChat = async (chatId) => {
  try {
    return await chatModel.findById(chatId, {
      $currentDate: { updatedAt: true },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  addChat,
  getAllChat,
  updateChat,
  editChat,
  removeChat,
};
