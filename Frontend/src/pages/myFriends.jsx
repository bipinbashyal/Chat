import { useEffect } from "react";
import UserCard from "@/components/userCard";
import { useFriendsContext } from "@/context/FriendsContext";
import { useUsersContext } from "@/hooks/useUsersContext";

const MyFriends = function () {
  // const [users, setUsers] = useState(null);
  const { friends, getAllFriends, setFriends, deleteFriend } =
    useFriendsContext();
  const { addUser } = useUsersContext();

  useEffect(() => {
    (async () => {
      setFriends(await getAllFriends());
    })();
  }, []);

  const handleClick = async (user) => {
    await deleteFriend(user);
    addUser(user);
  };

  return (
    <>
      {friends ? (
        friends.length ? (
          <div className="m-4">
            <div className="flex flex-row flex-wrap gap-8">
              {friends.map((friend) => (
                <UserCard
                  key={friend._id}
                  user={friend}
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
