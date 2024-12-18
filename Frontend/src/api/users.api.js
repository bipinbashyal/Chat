import axios from "axios";
axios.defaults.withCredentials = true;
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const getUsers = async () => {
  const response = await axios.get(`${BackendUrl}/users`, {
    withCredentials: true,
  });
  return response.data;
};

export { getUsers };
