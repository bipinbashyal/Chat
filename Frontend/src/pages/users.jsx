import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import { getUsers } from "@/api/users.api";
import { sendRequest } from "@/api/friends.api";

const Users = function () {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, []);

  const handleClick = async (friendId) => {
    return await sendRequest(friendId);
  };

  return (
    <>
      <div>This is Users page.</div>
      {users ? (
        <div className="m-4">
          <div className="flex flex-row flex-wrap gap-8">
            {users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                buttonText={"Add Friend"}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Users;
