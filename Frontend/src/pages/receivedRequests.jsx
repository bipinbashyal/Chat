import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import { getReceivedRequests } from "@/api/friends.api";
import { addFriend } from "@/api/friends.api";

const ReceivedRequests = function () {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      setUsers(await getReceivedRequests());
    })();
  }, []);

  const handleClick = async (friendId) => {
    return await addFriend(friendId);
  };

  return (
    <>
      {users ? (
        users.length ? (
          <div className="m-4">
            <div className="flex flex-row flex-wrap gap-8">
              {users.map((user) => (
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
