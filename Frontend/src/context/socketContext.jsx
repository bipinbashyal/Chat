import { createContext, useContext, useState } from "react";
import { useMessagesContext } from "./MessagesContext";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;

export const SocketContext = createContext(null);
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { addMessage } = useMessagesContext();
  const connectSocket = () => {
    const newsocket = new WebSocket("wss://chat-sore.onrender.com");
    newsocket.onmessage = (event) => {
      console.log(event.data);
      addMessage(JSON.parse(event.data));
    };
    setSocket(newsocket);
    return socket;
  };
  const sendSocketMessage = async (message) => {
    console.log(message);
    await socket.send(JSON.stringify(message));
  };
  return (
    <SocketContext.Provider
      value={{ socket, setSocket, connectSocket, sendSocketMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
