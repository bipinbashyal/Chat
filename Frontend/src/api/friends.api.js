import axios from "axios";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const sendRequest = async (friendId) => {
  return await axios.post(
    `${BackendUrl}/friends/sendRequest`,
    { friendId },
    { withCredentials: true }
  );
};

const cancelRequest = async (friendId) => {
  return await axios.post(
    `${BackendUrl}/friends/removeSentRequest`,
    { friendId },
    { withCredentials: true }
  );
};

const addFriend = async (friendId) => {
  return await axios.post(
    `${BackendUrl}/friends/addFriend`,
    { friendId },
    { withCredentials: true }
  );
};

const getReceivedRequests = async () => {
  const response = await axios.get(
    `${BackendUrl}/friends/getReceivedRequests`,
    { withCredentials: true }
  );
  return response.data.receivedRequests;
};

const getSentRequests = async () => {
  const response = await axios.get(`${BackendUrl}/friends/getSentRequests`, {
    withCredentials: true,
  });
  return response.data.sentRequests;
};

export {
  sendRequest,
  cancelRequest,
  addFriend,
  getReceivedRequests,
  getSentRequests,
};
