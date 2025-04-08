import { useScrollToSection } from "../../hooks/navScroll";

function Landing() {
  const { scrollToSection } = useScrollToSection();

  return (
    <main className="flex">
      <div className="flex flex-col justify-center md:items-center w-full h-screen md:h-screen px-4 bg-gradient-to-b from-[#0d0d0d] via-[#434343] to-[#0d0d0d]">
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
          <div className="invert">
            <span className="w-full text-left md:text-center z-40">BAR-</span>
            <span className="w-full text-right md:inline block md:pr-4 z-5">
              BORN
            </span>
          </div>
        </h1>
        <p className="text-[#343434]/90 text-lg md:text-2xl px-4 text-end md:text-end font-medium z-50 invert">
          From the Bar, For the Strong
          {/* Your resource for bodyweight training gear, supplements, and expert
          advice. */}
        </p>
        <a
          className="bg-[#343434] text-[#e2e2e2] invert text-center mt-8 px-4 py-2 rounded-md text-lg font-medium transform duration-500 transition cursor-pointer opacity-90 hover:opacity-80 z-50"
          onClick={() => scrollToSection("equipment")}
        >
          Explore Collection
        </a>
      </div>
    </main>
  );
}

export default Landing;
