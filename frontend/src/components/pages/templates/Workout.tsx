import { useNavigate } from "react-router-dom";

function Workout() {
  const navigate = useNavigate();
  return (
    <main className="flex ">
      <div className="min-h-screen flex flex-col justify-center md:items-center w-full px-4 bg-gradient-to-br from-[#101010] via-[#424242] to-[#2d2d2d]">
        <div className="w-10/12 flex items-start justify-start px-4 py-6 text-xl">
          <a
            onClick={() => navigate("/")}
            className="text-[#d2d2d2] cursor-pointer p-1 rounded-lg -ml-4 px-4 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/80 hover:text-[#e8e8e8]"
          >
            Back
          </a>
        </div>

        <div className="border-2 w-10/12  border-[#3a3a3a] p-4 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40 flex flex-col">
          :p
        </div>
      </div>
    </main>
  );
}

export default Workout;
