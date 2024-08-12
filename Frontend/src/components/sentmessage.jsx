const SentMessage = function ({ children }) {
  return (
    <div className=" w-full h-fit flex flex-row-reverse">
      <div className=" p-4 bg-[#51718B] w-fit max-w-[50%] ml-[2%] mb-[1vw] rounded-2xl border-2">
        {children}
      </div>
    </div>
  );
};

export default SentMessage;
