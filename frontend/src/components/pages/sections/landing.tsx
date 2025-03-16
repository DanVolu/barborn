function Landing() {
  return (
    <main className="flex">
      <div className="flex flex-col justify-center items-center w-full h-screen px-4 bg-[#1E1E1E]">
        <h1 className="text-[#DBDBDB] text-9xl font-semibold uppercase flex gap-4 items-center">
          Bar-B
          {/* <span className="relative inline-block w-[70px] h-[70px] border-8 border-[#c49a6c] rounded-full translate-y-2">
            <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[12px] h-[35px] bg-black"></span>
          </span> */}
          ORN
        </h1>
        <p className="text-[#DBDBDB] text-2xl px-4 text-center font-medium">
          From the Bar, For the Strong.
        </p>
      </div>
    </main>
  );
}

export default Landing;
