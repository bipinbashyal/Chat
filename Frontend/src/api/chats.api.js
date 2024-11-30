import axios from "axios";
axios.defaults.withCredentials = true;
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const getAllChat = async () => {
  try {
    const response = await axios.get(`${BackendUrl}/chats/getChats`, {
      params: { page: 0 },
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addChat = async (chat) => {
  try {
    return await axios.post(`${BackendUrl}/chats/addChat`, chat, {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getAllChat, addChat };
