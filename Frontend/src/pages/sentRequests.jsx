import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import { getSentRequests } from "@/api/friends.api";
import { cancelRequest } from "@/api/friends.api";

const SentRequests = function () {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      setUsers(await getSentRequests());
    })();
  }, []);

  const handleClick = async (user) => {
    return await cancelRequest(user);
  };

  return (
    <>
      {users ? (
        users.length > 0 ? (
          <div className="m-4">
            <div className="flex flex-row flex-wrap gap-8">
              {users.map((user) => (
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
