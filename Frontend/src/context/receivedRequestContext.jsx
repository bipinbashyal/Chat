import { createContext, useContext, useState } from "react";
import { getReceivedRequests } from "@/api/friends.api";

export const ReceivedRequestsContext = createContext(null);

export const ReceivedRequestsProvider = ({ children }) => {
  const [receivedRequests, setReceivedRequests] = useState(null);
  const getAllReceivedRequests = async () => {
    return await getReceivedRequests();
  };
  const addReceivedRequest = (user) => {
    setReceivedRequests((prev) => {
      if (prev) return [user, ...prev];
      else return [user];
    });
  };

  const removeReceivedRequest = (user) => {
    setReceivedRequests((prev) =>
      prev.filter((User) => {
        if (User._id == user._id) return false;
        return true;
      })
    );
  };

  return (
    <ReceivedRequestsContext.Provider
      value={{
        receivedRequests,
        setReceivedRequests,
        getAllReceivedRequests,
        addReceivedRequest,
        removeReceivedRequest,
      }}
    >
      {children}
    </ReceivedRequestsContext.Provider>
  );
};

export const useReceivedRequestsContext = () =>
  useContext(ReceivedRequestsContext);
