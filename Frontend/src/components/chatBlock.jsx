import { useEffect } from "react";
import { useChatsContext } from "@/hooks/useChatsContext";
import ChatItem from "./chatItem";

const ChatBlock = ({ value }) => {
  console.log(value);
  const { chats, setChats, getChats } = useChatsContext();
  useEffect(() => {
    (async () => {
      setChats(await getChats());
    })();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-y-scroll items-center   w-full">
      {chats ? (
        chats.length > 0 ? (
          chats.map((chat) => {
            if (chat.isGroup) {
              if (chat.name.toLowerCase().startsWith(value.toLowerCase())) {
                return <ChatItem key={chat._id} name={chat.name} />;
              }
            } else if (
              chat.members[0].username
                .toLowerCase()
                .startsWith(value.toLowerCase())
            ) {
              console.log(chat);
              return (
                <ChatItem key={chat._id} name={chat.members[0].username} />
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
