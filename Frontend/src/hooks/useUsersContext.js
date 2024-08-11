import { UsersContext } from "@/context/usersContext";
import { useContext } from "react";

export const useUsersContext = () => useContext(UsersContext);
