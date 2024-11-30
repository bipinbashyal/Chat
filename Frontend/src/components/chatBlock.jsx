import { useEffect } from "react";
import { useChatsContext } from "@/hooks/useChatsContext";
import { useMessagesContext } from "@/context/messagesContext";
import ChatItem from "./chatItem";
import { getChatMessages } from "../api/messages.api";

const ChatBlock = ({ value }) => {
  console.log(value);
  const { chats, setChats, getChats, setCurrentChat } = useChatsContext();
  const { setMessages } = useMessagesContext();
  useEffect(() => {
    (async () => {
      setChats(await getChats());
    })();
  }, []);

  const handleClick = async (chat) => {
    await setCurrentChat(chat);
    setMessages(await getChatMessages(chat, 0));
  };

  return (
    <div className="flex flex-col h-full overflow-y-scroll items-center   w-full">
      {chats ? (
        chats.length > 0 ? (
          chats.map((chat) => {
            if (chat.isGroup) {
              if (chat.name.toLowerCase().startsWith(value.toLowerCase())) {
                return (
                  <ChatItem
                    key={chat._id}
                    name={chat.username}
                    handleClick={handleClick}
                    chat={chat}
                  />
                );
              }
            } else if (
              chat.members[0].username
                .toLowerCase()
                .startsWith(value.toLowerCase())
            ) {
              console.log(chat);
              return (
                <ChatItem
                  key={chat._id}
                  name={chat.members[0].username}
                  handleClick={handleClick}
                  chat={chat}
                />
              );
            }
          })
        ) : (
          <div>No chats</div>
        )
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default ChatBlock;
