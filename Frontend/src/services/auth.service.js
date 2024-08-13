import axios from "axios";
import Cookies from "js-cookie";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const registerUser = async (userData) => {
  return await axios.post(`${BackendUrl}/register`, userData);
};

const loginUser = async (creds) => {
  const response = await axios.post(`${BackendUrl}/login`, creds);
  if (response.data?.token) {
    localStorage.setItem("user", JSON.stringify(response.data.userData));
    Cookies.set("token", response.data.token);
  }
  return response.data.userData;
};

const logoutUser = async () => {
  localStorage.removeItem("user");
};

const getUser = () => {
  const cookie = Cookies.get("token");
  if (!cookie) return null;
  return JSON.parse(localStorage.getItem("user"));
};

export { registerUser, loginUser, logoutUser, getUser };
