function Equipment() {
  return (
    <>
      <div className="h-full bg-gradient-to-br from-[#d2d2d2] via-[#2d2d2d] to-[#0d0d0d]">
        <div className="flex justify-start md:justify-center items-center ">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#1E1E1E] py-4 sm:py-6 px-6">
            Choose the equipment that’s right for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 p-4">
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
        </div>
      </div>
    </> //cfd0d1 444444 1E1E1E 343434 SCROLLABLE L8R
  );
}

export default Equipment;
