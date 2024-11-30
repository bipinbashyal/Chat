import SentMessage from "./sentmessage";
import ReceivedMessage from "./receivedmessage";
import { useMessagesContext } from "@/context/MessagesContext";
import { useAuthContext } from "@/context/AuthContext";

const MessagesBlock = () => {
  const { messages } = useMessagesContext();
  const { user } = useAuthContext();

  return (
    <div className="flex flex-col-reverse overflow-y-scroll h-full">
      {messages ? (
        messages.length ? (
          messages.map((message) => {
            if (message.send_by === user.uid) {
              return (
                <SentMessage key={message._id}>{message.content}</SentMessage>
              );
            } else {
              return (
                <ReceivedMessage key={message._id}>
                  {message.content}
                </ReceivedMessage>
              );
            }
          })
        ) : (
          <div>No Messages</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MessagesBlock;
