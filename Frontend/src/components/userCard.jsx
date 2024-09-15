import React, { useState } from "react";
import { Button } from "./ui/button";

const UserCard = ({ user, buttonText, handleClick }) => {
  const [loading, setLoading] = useState(false);
  const handleMouseClick = async (user) => {
    setLoading(true);
    await handleClick(user);
    setLoading(false);
  };
  return (
    <div className="flex flex-wrap flex-col items-center justify-center bg-white gap-2 px-8 py-2 min-w-48">
      <div className="w-20 h-20 rounded-full bg-red-400">
        <img src="user.pic" alt="Profile Pic" />
      </div>
      <div className="font-bold">{user.username}</div>
      <div className="text-slate-400">{user.email}</div>
      {loading ? (
        <Button className={"opacity-75 cursor-not-allowed"}>
          {buttonText}
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLoading(true);
            handleMouseClick(user);
          }}
        >
          {buttonText}
        </Button>
      )}
      {/* <Button
        onClick={() => {
          handleClick(user);
        }}
      >
        {buttonText}
      </Button> */}
    </div>
  );
};

export default UserCard;
