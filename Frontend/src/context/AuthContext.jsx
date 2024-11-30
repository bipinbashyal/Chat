import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, logoutUser, getUser } from "../services/auth.service.js";
import { useSocketContext } from "./socketContext.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const { socket, connectSocket } = useSocketContext();

  const login = async (creds) => {
    const userData = await loginUser(creds);
    connectSocket();
    setUser(userData);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    socket.close();
  };

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) {
      setUser(currentUser);
      const socket = connectSocket();
      return () => socket?.close();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
