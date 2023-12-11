import { IoSendSharp } from "react-icons/io5";
const SendBar=function(){
    return(
        <div className="flex flex-[30%] items-center justify-between border-2 rounded-full h-[3.5vw]  bg-[#9AD0C2]">
            <input type="text" placeholder='send message' className="focus:outline-none ml-[1vw] bg-[#9AD0C2] text-lg min-w-0 w-full h-[3.3vw]" />
            <div className="mx-[1vw] cursor-pointer">
                <IoSendSharp />
            </div>
        </div>
    )
}

export default SendBar;