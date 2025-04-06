import { useNavigate } from "react-router-dom";

function Workout() {
  const navigate = useNavigate();
  return (
    <main className="flex">
      <div className="min-h-screen flex flex-col justify-center md:items-center w-full px-4 bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#0d0d0d]">
        <div className="w-8/12 flex items-start justify-start px-8 py-6 text-xl">
          <a
            onClick={() => navigate("/")}
            className="text-[#e0e0e0] cursor-pointer p-1 rounded-lg -ml-4 px-4 bg-[#1e1e1e] shadow-lg shadow-black/40 transition-all duration-500 hover:opacity-90"
          >
            Back
          </a>
        </div>

        <div className="flex flex-col gap-8 justify-between w-8/12 h-full px-4">
          <div className="border-[#444444] p-6 rounded-lg bg-gradient-to-br h-full from-[#111111] to-[#111111] shadow-lg shadow-black/40 flex flex-col">
            <h3 className="text-[#e0e0e0] text-3xl md:text-4xl font-semibold mb-4">
              Bare-bones template
            </h3>

            <div className="flex flex-col text-[#e0e0e0] text-lg mb-4">
              <h2></h2>
            </div>
            <p className="text-[#e0e0e0] text-base leading-relaxed space-x-2">
              sasa
            </p>
            <div className="mt-4">
              <strong className="text-[#e0e0e0]">aaadasda</strong>
              <ul className="text-[#e0e0e0] ml-5 mt-2 list-disc"></ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Workout;
