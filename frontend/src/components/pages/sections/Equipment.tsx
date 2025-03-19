function Equipment() {
  return (
    <>
      <div className="h-full bg-gradient-to-br from-[#d2d2d2] via-[#2d2d2d] to-[#0d0d0d]">
        <div className="flex justify-start md:justify-center items-center">
          <h2 className="text-xl lg:text-2xl font-medium text-[#1E1E1E] py-4 sm:py-6 px-6">
            Choose the equipment that’s right for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 p-4">
          <div className="h-[35rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
              Gymnastic rings
            </h3>
          </div>
          <div className="h-[35rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
              Parallete bars
            </h3>
          </div>
          <div className="h-[35rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
              Weights
            </h3>
          </div>
          <div className="h-[35rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
              Accessories
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Equipment;
