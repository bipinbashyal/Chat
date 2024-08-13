import { createContext, useContext, useState } from "react";

export const MessagesContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(null);
  const addMessage = (message) => {
    setMessages((prev) => {
      console.log(prev);
      if (prev) return [message, ...prev];
      else return [message];
    });
  };

  return (
    <MessagesContext.Provider value={{ messages, setMessages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
