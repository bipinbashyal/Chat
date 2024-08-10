import { UsersContext } from "@/context/UsersContext";
import { useContext } from "react";

export const useUsersContext = () => useContext(UsersContext);
