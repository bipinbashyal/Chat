import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import { getFriends, removeFriend } from "@/api/friends.api";

const MyFriends = function () {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      setUsers(await getFriends());
    })();
  }, []);

  const handleClick = async (friendId) => {
    return await removeFriend(friendId);
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
                  buttonText={"Remove Friend"}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>No Any Friends</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MyFriends;
