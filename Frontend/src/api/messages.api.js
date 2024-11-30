import axios from "axios";
axios.defaults.withCredentials = true;
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const getChatMessages = async (chat, page) => {
  const response = await axios.get(`${BackendUrl}/messages/getmessages`, {
    params: { chatId: chat._id, page },
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

const sendMessage = async (message) => {
  const response = await axios.post(
    `${BackendUrl}/messages/addmessage`,
    {
      message,
    },
    { withCredentials: true }
  );
  console.log(response);
  return response.data;
};

const removeMessage = async (message) => {
  const response = await axios.post(
    `${BackendUrl}/messages/removemessage`,
    { messageId: message._id },
    { withCredentials: true }
  );
  console.log(response);
  return response.data;
};

export { getChatMessages, sendMessage, removeMessage };
