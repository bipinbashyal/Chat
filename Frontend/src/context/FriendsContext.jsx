import { createContext, useContext, useState } from "react";
import { getFriends, removeFriend } from "@/api/friends.api";

export const FriendsContext = createContext(null);

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState(null);
  const getAllFriends = async () => {
    return await getFriends();
  };

  const addFriendInList = (friend) => {
    setFriends((prev) => {
      if (prev) return [friend, ...prev];
      else return [friend];
    });
  };

  const deleteFriend = async (user) => {
    await removeFriend(user);
    setFriends((prev) => {
      return prev.filter((friend) => {
        if (friend._id == user._id) return false;
        return true;
      });
    });
  };

  return (
    <FriendsContext.Provider
      value={{
        friends,
        setFriends,
        getAllFriends,
        addFriendInList,
        deleteFriend,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriendsContext = () => {
  return useContext(FriendsContext);
};
