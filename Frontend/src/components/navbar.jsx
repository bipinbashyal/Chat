import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
// import logo from "../assets/letterline_logo.png"

const Navbar = function () {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <div className="sticky w-full h-[12vh] bg-[#265073] text-[#F2E6E6] font-sans text-[1.5vw] flex items-center justify-between">
        {/* <img className="h-[5vw] ml-[1vw]" src={logo} alt="logo" /> */}

        <ul className="flex w-[25vw] items-center justify-between">
          <Link
            to="/"
            className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
          >
            Users
          </Link>
          <Link
            to="/settings"
            className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
          >
            Settings
          </Link>
        </ul>
        {!user ? null : (
          <Link
            onClick={logout}
            to="/"
            className="animate delay-100 mr-[1vw] px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
          >
            Logout
          </Link>
        )}
        {/* <Link
          to="/"
          className="animate delay-100 mr-[1vw] px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
        >
          Logout
        </Link> */}
      </div>
    </>
  );
};

export default Navbar;
