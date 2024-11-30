import { useEffect } from "react";
import UserCard from "@/components/userCard";
import { addFriend } from "@/api/friends.api";
import { useReceivedRequestsContext } from "@/context/ReceivedRequestContext";
import { useFriendsContext } from "@/context/FriendsContext";

const ReceivedRequests = function () {
  const {
    receivedRequests,
    setReceivedRequests,
    getAllReceivedRequests,
    removeReceivedRequest,
  } = useReceivedRequestsContext();

  const { addFriendInList } = useFriendsContext();

  useEffect(() => {
    (async () => {
      setReceivedRequests(await getAllReceivedRequests());
      console.log(receivedRequests);
    })();
  }, []);

  const handleClick = async (user) => {
    await addFriend(user);
    removeReceivedRequest(user);
    addFriendInList(user);
  };

  return (
    <>
      {receivedRequests ? (
        receivedRequests.length ? (
          <div className="m-4">
            <div className="flex flex-row flex-wrap gap-8">
              {receivedRequests.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                  buttonText={"Accept Request"}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>No Received Requests</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ReceivedRequests;
