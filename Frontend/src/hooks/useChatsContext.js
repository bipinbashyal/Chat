import { ChatsContext } from "@/context/ChatsContext";
import { useContext } from "react";

export const useChatsContext = () => useContext(ChatsContext);
