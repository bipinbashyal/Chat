import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import { useChatsContext } from "@/hooks/useChatsContext";
import { useMessagesContext } from "@/context/messagesContext";
import { useAuthContext } from "@/context/AuthContext";
import { useSocketContext } from "@/context/socketContext";

const SendBar = function () {
  const [value, setValue] = useState("");
  const { currentChat } = useChatsContext();
  const { addMessage } = useMessagesContext();
  const { user } = useAuthContext();
  const { sendSocketMessage } = useSocketContext();

  const handleClick = async () => {
    const message = {
      chat_id: currentChat._id,
      send_by: user.uid,
      content: value,
      media_url: null,
      type: "message",
    };
    console.log(message);
    message.type = "message";
    await sendSocketMessage(message);
    addMessage(message);
    setValue("");
  };

  return (
    <div className="flex flex-[30%] items-center justify-between border-2 rounded-full h-[3.5vw]  bg-[#9AD0C2]">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="send message"
        className="focus:outline-none ml-[1vw] bg-[#9AD0C2] text-lg min-w-0 w-full h-[3.3vw]"
      />
      <div
        onClick={() => handleClick(value)}
        className="mx-[1vw] cursor-pointer"
      >
        <IoSendSharp />
      </div>
    </div>
  );
};

export default SendBar;
