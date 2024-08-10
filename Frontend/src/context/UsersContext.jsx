import { createContext, useState } from "react";
import { getUsers } from "@/api/users.api";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const getAllUsers = async () => {
    return await getUsers();
  };
  const removeUser = (User) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        if (user._id == User._id) return false;
        return true;
      });
    });
  };
  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <UsersContext.Provider
      value={{ users, setUsers, getAllUsers, removeUser, addUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
