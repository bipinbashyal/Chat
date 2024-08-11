import { ChatsContext } from "@/context/chatsContext";
import { useContext } from "react";

export const useChatsContext = () => useContext(ChatsContext);
