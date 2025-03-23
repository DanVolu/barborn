function Rings() {
  return (
    <main className="flex">
      <div className="p-20 min-h-screen flex flex-col justify-center md:items-center w-full px-4 bg-gradient-to-br from-[#101010] to-[#2d2d2d]">
        <div className="flex flex-col xl:flex-row gap-8 justify-between md:w-10/12 px-4">
          <div className="min-w-10/12 h-[20rem] xl:min-w-[30rem] lg:h-[40rem] xl:h-[30rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            <img alt="Example" />
          </div>

          <div className="border-2 border-[#3a3a3a] p-6 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40 flex flex-col">
            <h3 className="text-[#d2d2d2] text-3xl font-semibold mb-4">
              Example Name
            </h3>
            <div className="flex flex-col gap-2 text-[#d2d2d2] text-lg mb-4">
              <p>Beginner to world-class</p>
              <p>Most common use - gymnastics</p>
            </div>
            <p className="text-[#d2d2d2] text-base leading-relaxed">
              <strong>Disclaimer:</strong> The views expressed here are solely
              those of the author. Gymnastic rings are one of the best
              investments for any calisthenics setup. They are versatile,
              portable, and enable a limitless range of exercises. Additionally,
              they are affordable, require minimal maintenance, and can be
              easily used indoors or outdoors—whether suspended from a tree
              branch or a pull-up bar. The only downside is that they can be
              challenging for beginners, but with practice, they can be
              mastered.
            </p>
            <button className="bg-[#d2d2d2] text-[#1b1b1b] py-2 px-4 rounded-lg mt-4 xl:mt-auto font-medium cursor-pointer hover:scale-105 hover:bg-[#d2d2d2]/80 transition-all duration-200 self-start">
              Browse for choices
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rings;
