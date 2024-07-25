import { Link } from "react-router-dom";
import logo from "../assets/letterline_logo.png"


const Navbar=function(){
    return(
        <>
            <div className="w-full h-[5.5vw] bg-[#265073] text-[#F2E6E6] font-sans text-[1.5vw] flex items-center justify-between">
                <img className="h-[5vw] ml-[1vw]" src={logo} alt="logo" />

                <ul className="flex w-[25vw] items-center justify-between">
                    <Link to="/" className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]">Home</Link>
                    <Link to="/friends" className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]">Friends</Link>
                    <Link to="/settings" className="animate delay-100 px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]">Settings</Link>
                </ul>
                <Link to="/" className="animate delay-100 mr-[1vw] px-5 py-2  hover:cursor-pointer hover:rounded-full hover:bg-[#174164]">Logout</Link>
            </div>
        </>
    )
}

export default Navbar;