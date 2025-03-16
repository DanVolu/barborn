function Landing() {
  return (
    <main className="flex">
      <div className="flex flex-col justify-center md:items-center w-full h-screen px-4 bg-gradient-to-br from-[#1E1E1E] via-[#cfd0d1] to-[#444444]">
        <h1 className="text-[#444444] text-6xl sm:text-8xl md:text-9xl font-semibold uppercase flex gap-4 items-center">
          BAR-BORN
        </h1>
        <p className="text-[#444444] md:text-2xl px-4 text-end font-medium">
          From the Bar, For the Strong.
        </p>
      </div>
    </main>
  );
}

export default Landing;
