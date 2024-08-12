import { useState } from "react";
import SearchBar from "../components/searchbar.jsx";
import SendBar from "../components/sendbar.jsx";
import ChatBlock from "@/components/chatBlock.jsx";
import MessagesBlock from "@/components/messagesBlock.jsx";
import { IconContext } from "react-icons";
import FileUpload from "../components/fileupload.jsx";
import PhotoUpload from "../components/photoupload.jsx";
import SendVoice from "../components/sendvoice.jsx";

function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-[100vw] m-auto bg-[#D9D9D9] h-[88vh]  ">
      <div className="flex-[23vw] bg-[#265073] flex flex-col items-center ">
        <div className="my-[1vw] w-full cursor-pointer">
          <SearchBar setValue={setValue} value={value} />
        </div>
        <ChatBlock value={value} />
      </div>

      <div className="flex-[70%] h-full flex flex-col-reverse">
        <div className="w-full bg-slate-400 flex items-center">
          <div className="flex-[20%] flex items-center h-full justify-between mx-[1vw]">
            <IconContext.Provider value={{ size: 23 }}>
              <FileUpload />
              <PhotoUpload />
              <SendVoice />
            </IconContext.Provider>
          </div>
          <div className="w-full m-[0.5vw]">
            <SendBar />
          </div>
        </div>
        <MessagesBlock />
      </div>
    </div>
  );
}

export default Home;
