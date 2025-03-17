function Equipment() {
  return (
    <>
      <div className="h-full bg-gradient-to-br from-[#cfd0d1] via-[#444444] to-[#0d0d0d]">
        <div className="flex justify-start md:justify-center items-center ">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#1E1E1E] py-8 sm:py-15 p-6">
            Choose the equipment that’s right for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 p-5">
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
          <div className="h-[35rem] rounded-md bg-[#1E1E1E]"></div>
        </div>
      </div>
    </> //cfd0d1 444444 1E1E1E SCROLLABLE L8R
  );
}

export default Equipment;
