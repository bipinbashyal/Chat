import { createContext, useState } from "react";
import { getAllChat } from "@/api/chats.api";

export const ChatsContext = createContext(null);

export const ChatsProvider = ({ children }) => {
  const [chats, setChats] = useState(null);

  const addChat = (chat) => {
    setChats((prev) => {
      if (prev) return [chat, ...prev];
      else return [chat];
    });
  };

  const getChats = async () => {
    return await getAllChat();
  };

  const removeChat = (chatId) => {
    setChats((prev) => {
      prev.filter((chat) => {
        if (chat._id == chatId) {
          return false;
        }
        return true;
      });
    });
  };
  return (
    <ChatsContext.Provider
      value={{ chats, setChats, addChat, removeChat, getChats }}
    >
      {children}
    </ChatsContext.Provider>
  );
};
