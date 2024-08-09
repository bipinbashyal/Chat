import axios from "axios";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const sendRequest = async (friendId) => {
  return await axios.post(
    `${BackendUrl}/friends/sendRequest`,
    { friendId },
    { withCredentials: true }
  );
};

export { sendRequest };
