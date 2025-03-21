function Rings() {
  return (
    <main className="flex">
      <div className="flex flex-col justify-center md:items-center w-full h-screen md:h-screen px-4 bg-gradient-to-br from-[#101010] via-[#d2d2d2] to-[#2d2d2d]">
        <h1 className="text-[#343434] border-3 lg:border-0 rounded-md text-8xl sm:text-9xl font-semibold uppercase flex flex-col md:flex-row items-center text-center p-2 -mt-10">
          <div className="hidden  absolute -ml-24 top-0 -mt-55 inset-0 z-0 lg:flex justify-center items-center ">
          </div>
          <span className="w-full text-left md:text-center z-40">BAR-</span>
          <span className="w-full text-right md:inline block pr-4 z-5">
            BORN
          </span>
        </h1>
        <p className="text-[#343434] text-lg md:text-2xl px-4 text-end md:text-end font-medium z-50">
          From the Bar, For the Strong
        </p>
      </div>
    </main>
  );
}

export default Rings;
