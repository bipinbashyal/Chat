const FriendBlock = function (friend) {
  return (
    <div className="bg-[#2D9596] hover:bg-[#2e8c8f] cursor-pointer w-[22vw] h-[4vw] mb-2 border-2 border-blue-200 flex items-center justify-center text-lg hover:text-xl animate delay-100">
      {friend}
    </div>
  );
};

export default FriendBlock;
