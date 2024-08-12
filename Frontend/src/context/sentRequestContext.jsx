import { createContext, useContext, useState } from "react";
import { getSentRequests } from "@/api/friends.api";

export const SentRequestsContext = createContext(null);

export const SentRequestsProvider = ({ children }) => {
  const [sentRequests, setSentRequests] = useState(null);
  const getAllSentRequests = async () => {
    return await getSentRequests();
  };
  const addSentRequest = (user) => {
    setSentRequests((prev) => {
      if (prev) return [user, ...prev];
      else return [user];
    });
  };

  const removeSentRequest = (user) => {
    setSentRequests((prev) =>
      prev.filter((User) => {
        if (User._id == user._id) return false;
        return true;
      })
    );
  };

  return (
    <SentRequestsContext.Provider
      value={{
        sentRequests,
        setSentRequests,
        getAllSentRequests,
        addSentRequest,
        removeSentRequest,
      }}
    >
      {children}
    </SentRequestsContext.Provider>
  );
};

export const useSentRequestsContext = () => useContext(SentRequestsContext);
