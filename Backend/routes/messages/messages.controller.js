const {
  addMessage,
  getAllChatMessage,
  removeMessage,
} = require("../../models/message/message.model");

const httpAddMessage = async (req, res) => {
  return res.json(await addMessage(req.body.message));
};

const httpGetChatMessages = async (req, res) => {
  return res.json(
    await getAllChatMessage(req.query.chatId, Number(req.query.page))
  );
};

const httpRemoveMessage = async (req, res) => {
  return res.json(await removeMessage(req.body.messageId));
};

module.exports = {
  httpAddMessage,
  httpGetChatMessages,
  httpRemoveMessage,
};
