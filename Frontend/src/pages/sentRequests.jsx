import { useEffect } from "react";
import UserCard from "@/components/userCard";
import { cancelRequest } from "@/api/friends.api";
import { useSentRequestsContext } from "@/context/sentRequestContext";
import { useUsersContext } from "@/hooks/useUsersContext";

const SentRequests = function () {
  const {
    sentRequests,
    setSentRequests,
    getAllSentRequests,
    removeSentRequest,
  } = useSentRequestsContext();

  const { addUser } = useUsersContext();

  useEffect(() => {
    (async () => {
      setSentRequests(await getAllSentRequests());
    })();
  }, []);

  const handleClick = async (user) => {
    await cancelRequest(user);
    removeSentRequest(user);
    addUser(user);
  };

  return (
    <>
      {sentRequests ? (
        sentRequests.length > 0 ? (
          <div className="m-4">
            <div className="flex flex-row flex-wrap gap-8">
              {sentRequests.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                  buttonText={"cancel Request"}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>No Sent Requests</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SentRequests;
