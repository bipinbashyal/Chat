const chatModel = require("./chat.mongo");

const addChat = async (chat) => {
  try {
    return await chatModel.create(chat);
  } catch (err) {
    throw err;
  }
};

const editChat = async (chatId, chat) => {
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

const getAllChat = async (userId, page) => {
  return await chatModel.aggregate([
    {
      $project: {
        name: 1, // Include other fields as needed
        isGroup: 1,
        created_by: 1,
        members: {
          $filter: {
            input: "$members",
            as: "member",
            cond: { $ne: ["$$member", userId] },
          },
        },
      },
    },
    {
      $lookup: {
        from: "users", // The collection to join with
        localField: "members", // Field in the User collection
        foreignField: "_id", // Field in the Friend collection
        as: "members", // Output field to store the joined documents
      },
    },
    { $skip: Number(page) * 10 },
    { $limit: 10 },
  ]);

  // try {
  //   return await chatModel
  //     .find({ members: userId })
  //     .sort({ updatedAt: -1 })
  //     .skip(Number(page) * 10)
  //     .limit(10);
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }
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
