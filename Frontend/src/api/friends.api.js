import axios from "axios";
axios.defaults.withCredentials = true;
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const sendRequest = async (user) => {
  return await axios.post(
    `${BackendUrl}/friends/sendRequest`,
    { friendId: user._id },
    { withCredentials: true }
  );
};

const cancelRequest = async (user) => {
  return await axios.post(
    `${BackendUrl}/friends/removeSentRequest`,
    { friendId: user._id },
    { withCredentials: true }
  );
};

const addFriend = async (user) => {
  return await axios.post(
    `${BackendUrl}/friends/addFriend`,
    { friendId: user._id },
    { withCredentials: true }
  );
};

const removeFriend = async (user) => {
  return await axios.post(
    `${BackendUrl}/friends/removeFriend`,
    { friendId: user._id },
    { withCredentials: true }
  );
};

const getFriends = async () => {
  const response = await axios.get(`${BackendUrl}/friends/getFriends`, {
    withCredentials: true,
  });
  return response.data.friends;
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
  removeFriend,
  getFriends,
  getReceivedRequests,
  getSentRequests,
};
