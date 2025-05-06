import { useNavigate } from "react-router-dom";

function Mobility() {
  const navigate = useNavigate();
  return (
    <main className="flex">
      <div className="h-fit flex flex-col justify-center lg:items-center w-full px-4">
        <div className="lg:w-6/12 flex items-start justify-start px-8 py-6 text-xl">
          <a
            onClick={() => navigate("/")}
            className="text-[#e0e0e0] cursor-pointer p-1 rounded-lg -ml-4 px-4 bg-[#1a1a1a] shadow-md shadow-black/40 transition-all duration-500 hover:opacity-80"
          >
            Back
          </a>
        </div>

        <div className="flex flex-col gap-8 justify-between lg:w-6/12 h-full px-4">
          <div className="border-[#444444] p-6 rounded-lg mb-16 bg-gradient-to-br from-[#111111] to-[#111111] shadow-lg shadow-black/40 flex flex-col">
            <h3 className="text-[#e0e0e0] text-3xl md:text-4xl font-semibold mb-4">
              Introduction to Mobility
            </h3>

            <p className="text-[#e0e0e0] text-lg leading-relaxed">111111111</p>

            <ul className="text-[#e0e0e0] ml-4 mt-8 md:mt-4 list-disc md:p-2">
              <li>
                Preferably do the stretches once in the morning and once near
                the end of the day.
              </li>
              <li>
                Hold the stretch for ~30s seconds, anything past that is more
                effort with less gain.
              </li>
              <li>
                Repeat the exercises 1 to 2 times a day, for a total of 5
                minutes weekly.
              </li>
              <li>If the position hurts switch to another variation.</li>
              <li>Warmup with dynamic movements</li>
            </ul>

            <h3 className="text-[#e0e0e0] text-lg font-semibold leading-relaxed mt-16">
              Hamstrings and splits
            </h3>

            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">
                Repeat for 1 set for each exercise and hold for 30s
              </p>
              <ul className="ml-4 list-disc px-4">
                <li>Sitting pike stretch</li>
                <li>Standing pike stretch</li>
                <li>Standing pancake stretch</li>
                <li>Lotus stretch</li>
                <li>Pancake split</li>
                <li>Middle split</li>
              </ul>
            </div>

            <h3 className="text-[#e0e0e0] text-lg leading-relaxed mt-16 font-semibold">
              Shoulders{" "}
            </h3>

            <div className="ml-4 text-[#e0e0e0] leading-relaxed">
              <p className="font-semibold mt-4">
                Preferably do them after an upper body workout
              </p>
              <ul className="text-[#e0e0e0] ml-4 list-disc px-4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Mobility;
