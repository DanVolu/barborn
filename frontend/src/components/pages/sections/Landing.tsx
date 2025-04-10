import { useScrollToSection } from "../../hooks/navScroll";

function Landing() {
  const { scrollToSection } = useScrollToSection();

  return (
    <main className="relative flex h-[80vh] lg:h-screen md:w-full">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="rings.jpg"
          alt="Rings Background"
          className="max-w-full max-h-full object-contain p-6 rounded-[3rem] sm:p-10 sm:rounded-[6rem] md:p-20 md:rounded-[10rem] lg:p-25 lg:rounded-[12rem]"
        />
      </div>

      <div className="relative flex flex-col justify-center  md:items-center w-full h-full px-4">
        <h1 className="text-[#0D0D0D] mt-2 lg:border-0 rounded-md text-7xl sm:text-8xl lg:text-9xl font-bold uppercase flex flex-col md:flex-row items-center text-center p-2">
          <div className="text-[#090909]">
            <span className="w-full z-40">BAR-BORN</span>
          </div>
        </h1>
        <p className="text-[#0d0d0d]/85 text-md font-semibold lg:text-xl -mt-5 px-4 flex justify-center items-center text-center z-50">
          From the Bar, For the Strong
        </p>
        <a
          className="bg-[#0f0f0f] text-[#f2f2f2] opacity-95 font-semibold w-10/12 md:w-fit flex justify-center items-center text-center mx-auto mt-12 px-4 py-2 rounded-md text-lg transform transition duration-500 cursor-pointer hover:scale-[1.03] z-50"
          onClick={() => scrollToSection("equipment")}
        >
          Explore Collection
        </a>
      </div>
    </main>
  );
}

export default Landing;
