import SentMessage from "./sentmessage";
import ReceivedMessage from "./receivedmessage";
import { useMessagesContext } from "@/context/messagesContext";
import { useAuthContext } from "@/context/authContext";

// const messages = [
//   {
//     time: 1,
//     content: "Hello it's a text message",
//     type: "received",
//   },
//   {
//     time: 2,
//     content: "Hello it's a sent text message",
//     type: "sent",
//   },
//   {
//     time: 3,
//     content: "Hello it's another received text message",
//     type: "received",
//   },
//   {
//     time: 4,
//     content: "Hello it's another sent text message",
//     type: "sent",
//   },
// ];

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
