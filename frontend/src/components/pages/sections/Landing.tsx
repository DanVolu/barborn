function Landing() {
  return (
    <main className="flex">
      <div className="flex flex-col justify-center md:items-center w-full h-screen md:h-screen px-4 bg-gradient-to-b from-[#101010] via-[#d2d2d2] to-[#2d2d2d]">
        <h1 className="text-[#343434] mt-2 lg:border-0 rounded-md text-8xl sm:text-9xl font-semibold uppercase flex flex-col md:flex-row items-center text-center p-2">
          <div className="hidden absolute -ml-24 top-0 -mt-55 inset-0 z-0 lg:flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}left-ring.png`}
              alt="gymnastic rings"
              className="w-[46rem] h-[46rem] object-contain"
              draggable="false"
            />
          </div>
          <div className="hidden absolute -mt-70 pl-65 inset-0 z-0 lg:flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}right.png`}
              alt="gymnastic rings"
              className="w-[56rem] h-[56rem] object-contain"
              draggable="false"
            />
          </div>
          <div className="hidden absolute -mt-70 pl-65 inset-0 z-40 lg:flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}partial-right.png`}
              alt="gymnastic rings"
              className="w-[56rem] h-[56rem] object-contain"
              draggable="false"
            />
          </div>
          <span className="w-full text-left md:text-center z-40">BAR-</span>
          <span className="w-full text-right md:inline block md:pr-4 z-5">
            BORN
          </span>
        </h1>
        <p className="text-[#343434] text-lg md:text-2xl px-4 text-end md:text-end font-medium z-50">
          From the Bar, For the Strong
        </p>
        <a href="#equipment" className="bg-[#343434] text-[#e2e2e2] text-center mt-4 px-4 py-2 rounded-md text-lg font-medium transform transition hover:scale-105 z-50">
          Explore Collection
        </a>
      </div>
    </main>
  );
}

export default Landing;
