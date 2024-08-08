import React from "react";
import UserCard from "@/components/userCard";

const users = [
  {
    username: "Bipin Bashyal",
    email: "a@b.com",
    profile: "aaa",
  },
  {
    username: "Bishal Lami",
    email: "a@c.com",
    profile: "ddd",
  },
];

const usersComp = users.map((user) => (
  <UserCard user={user} buttonText={"Add Friend"} />
));
const Users = function () {
  return (
    <div className="m-4">
      <div>This is Users page.</div>
      <div className="flex flex-row flex-wrap gap-8">{usersComp}</div>
    </div>
  );
};

export default Users;
