import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
// import logo from "../assets/letterline_logo.png"

const Navbar = function () {
  const { user, logout } = useContext(AuthContext);
  const [hamb, setHamb] = useState(true);
  return (
    <>
      <div
        className={
          hamb
            ? " w-full bg-[#265073] text-[#F2E6E6] font-sans text-[15px] flex flex-col  items-center justify-center md:justify-between md:text-[1.5vw] md:h-[12vh] md:flex-row h-screen absolute top-0 left-0 md:sticky"
            : "sticky w-full h-[10vh] bg-[#265073] text-[#F2E6E6] flex flex-row-reverse items-center"
        }
      >
        {/* <img className="h-[5vw] ml-[1vw]" src={logo} alt="logo" /> */}

        {!hamb ? (
          <div
            onClick={() => {
              setHamb(!hamb);
            }}
            className=" md:hidden pr-2"
          >
            nav
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setHamb(!hamb);
              }}
              className="absolute top-2 right-2 md:hidden"
            >
              close
            </div>
            <ul className="flex flex-col w-[25vw] items-center justify-center md:flex-row md:justify-between">
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
          </>
        )}
        {!user ? null : (
          <Link
            onClick={logout}
            to="/"
            className={
              hamb
                ? "animate delay-100 mr-[1vw] px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]"
                : "hidden"
            }
          >
            Logout
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
