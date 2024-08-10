const {
  addChat,
  editChat,
  getAllChat,
} = require("../../models/chat/chat.model");

const httpAddChat = async (req, res) => {
  try {
    return res.json(await addChat(req.body.chat));
  } catch (err) {
    return res.json(err);
  }
};

const httpGetChats = async (req, res) => {
  try {
    console.log(req.query);
    return res.json(await getAllChat(req.user._id, req.query.page));
  } catch (err) {
    return res.json(err);
  }
};

const httpEditChat = async (req, res) => {
  try {
    return res.json(await editChat(req.body.chatId, req.body.chat));
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  httpAddChat,
  httpGetChats,
  httpEditChat,
};
