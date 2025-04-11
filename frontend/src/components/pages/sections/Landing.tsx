import { useScrollToSection } from "../../hooks/navScroll";

function Landing() {
  const { scrollToSection } = useScrollToSection();

  return (
    <main className="relative flex md:h-[90vh] min-h-[80vh] w-full">
      <div className="relative flex flex-col w-full h-full px-1">
        <div className="flex  flex-col md:hidden w-full h-full  items-center py-28">
          <div className="w-full text-center z-10 mt-8">
            <h1 className="text-[#e5e5e5] text-7xl sm:text-8xl font-bold uppercase">
              <div className="text-[#e5e5e5]">
                <span className="w-full">BAR-BORN</span>
              </div>
            </h1>
            <p className="text-[#e5e5e5]/85 text-md font-semibold -mt-2 px-4">
              From the Bar, For the Strong
            </p>
          </div>

          <div className="flex justify-center items-center my-6 w-full">
            <img
              src="rings.jpg"
              alt="Rings Background"
              className="max-w-full max-h-full  object-contain p-6 rounded-[3rem] sm:p-10 sm:rounded-[6rem]"
            />
          </div>

          <div className="w-full flex justify-center z-10 mb-8">
            <a
              className="bg-[#f2f2f2]/90 text-[#0f0f0f] opacity-95 font-semibold w-10/12 flex justify-center items-center text-center px-4 py-2 rounded-md text-lg transform transition duration-500 cursor-pointer hover:scale-[1.03]"
              onClick={() => scrollToSection("equipment")}
            >
              Explore Collection
            </a>
          </div>
        </div>

        <div className="hidden md:block w-full h-full">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img
              src="rings.jpg"
              alt="Rings Background"
              className="max-w-full max-h-full object-contain md:p-20 md:rounded-[10rem] lg:p-25 lg:rounded-[12rem]"
            />
          </div>

          <div className="relative flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-[#0D0D0D] mt-2 rounded-md text-8xl lg:text-9xl font-bold uppercase flex flex-row items-center text-center p-2">
              <div className="text-[#090909]">
                <span className="w-full z-40">BAR-BORN</span>
              </div>
            </h1>
            <p className="text-[#0d0d0d]/85 font-semibold lg:text-xl -mt-5 px-4 flex justify-center items-center text-center z-50">
              From the Bar, For the Strong
            </p>
            <a
              className="bg-[#0f0f0f] text-[#f2f2f2] opacity-95 font-semibold w-fit flex justify-center items-center text-center mx-auto mt-12 px-4 py-2 rounded-md text-lg transform transition duration-500 cursor-pointer hover:scale-[1.03] z-50"
              onClick={() => scrollToSection("equipment")}
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;
