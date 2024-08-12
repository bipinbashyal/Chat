import SentMessage from "./sentmessage";
import ReceivedMessage from "./receivedmessage";

const messages = [
  {
    time: 1,
    content: "Hello it's a text message",
    type: "received",
  },
  {
    time: 2,
    content: "Hello it's a sent text message",
    type: "sent",
  },
  {
    time: 3,
    content: "Hello it's another received text message",
    type: "received",
  },
  {
    time: 4,
    content: "Hello it's another sent text message",
    type: "sent",
  },
];

const MessagesBlock = () => {
  return (
    <div className="flex flex-col-reverse overflow-y-scroll h-full">
      {messages.map((message) => {
        if (message.type === "sent") {
          return <SentMessage>{message.content}</SentMessage>;
        } else {
          return <ReceivedMessage>{message.content}</ReceivedMessage>;
        }
      })}
      {/* <div className="h-full"></div> */}
    </div>
  );
};

export default MessagesBlock;
