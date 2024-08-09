import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import { getUsers } from "@/api/users.api";
import { sendRequest } from "@/api/friends.api";

const AllUsers = function () {
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
      {users ? (
        users.length > 0 ? (
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
          <div>No Users</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AllUsers;
