import axios from "axios";
const BackendUrl = "http://localhost:8080";

const registerUser = async (userData) => {
  return await axios.post(`${BackendUrl}/register`, userData);
};

const loginUser = async (creds) => {
  const response = await axios.post(`${BackendUrl}/login`, creds);
  if (response.data?.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = async () => {
  localStorage.removeItem("user");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { registerUser, loginUser, logoutUser, getUser };
