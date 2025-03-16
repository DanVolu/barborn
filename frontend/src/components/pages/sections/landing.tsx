function Landing() {
  return (
    <main className="flex">
      <div className="flex flex-col justify-center md:items-center w-full h-screen px-4 bg-gradient-to-r from-[#1E1E1E] via-[#2a2a2a] to-[#444444]">
        <h1 className="text-[#DBDBDB] text-7xl sm:text-8xl md:text-9xl font-semibold uppercase flex gap-4 items-center">
          BAR-BORN
        </h1>
        <p className="text-[#DBDBDB] md:text-2xl px-4 text-end font-medium">
          From the Bar, For the Strong.
        </p>
      </div>
    </main>
  );
}

export default Landing;
