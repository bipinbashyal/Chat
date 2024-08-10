import React from "react";
import { Link } from "react-router-dom";

const UsersNav = () => {
  return (
    <div className="sticky w-full h-[5vw] bg-[#265073] text-[#F2E6E6] font-sans text-[1.5vw] flex items-center justify-between">
      <ul className="flex w-[25vw] items-center justify-between">
        <Link
          to="/users"
          className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
        >
          All Users
        </Link>
        <Link
          to="/users/received"
          className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
        >
          Received Requests
        </Link>
        <Link
          to="/users/sent"
          className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
        >
          Sent Requests
        </Link>
        <Link
          to="/users/friends"
          className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
        >
          My Friends
        </Link>
      </ul>
    </div>
  );
};

export default UsersNav;
