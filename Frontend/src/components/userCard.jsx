import React from "react";
import { Button } from "./ui/button";

const UserCard = ({ user, buttonText }) => {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center bg-white gap-2 px-8 py-2 min-w-48">
      <div className="w-20 h-20 rounded-full bg-red-400">
        <img src="user.pic" alt="Profile Pic" />
      </div>
      <div className="font-bold">{user.username}</div>
      <div className="text-slate-400">{user.email}</div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default UserCard;
