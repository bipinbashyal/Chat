import { useEffect } from "react";
import UserCard from "@/components/userCard";
import { sendRequest } from "@/api/friends.api";
import { useUsersContext } from "@/hooks/useUsersContext";
import { useSentRequestsContext } from "@/context/sentRequestContext";

const AllUsers = function () {
  const { users, setUsers, getAllUsers, removeUser } = useUsersContext();
  const { addSentRequest } = useSentRequestsContext();

  useEffect(() => {
    (async () => {
      setUsers(await getAllUsers());
      console.log(users);
    })();
  }, []);

  const handleClick = async (user) => {
    await sendRequest(user);
    removeUser(user);
    addSentRequest(user);
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
