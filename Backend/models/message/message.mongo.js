const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  chat_id: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
  send_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  media_url: {
    type: String,
  },
});

const messageModel = model("Message", messageSchema);

module.exports = messageModel;
