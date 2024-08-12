const ChatItem = function ({ name }) {
  return (
    <div className="bg-[#2D9596] hover:bg-[#2e8c8f] cursor-pointer w-full h-[4vw] mb-2 border-2 border-[#95fafc] flex items-center justify-center text-lg hover:text-xl animate delay-100">
      {name}
    </div>
  );
};

export default ChatItem;
