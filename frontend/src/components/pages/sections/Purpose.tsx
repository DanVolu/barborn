function Purpose() {
  return (
    <div className="h-full bg-gradient-to-br from-[#d2d2d2] via-[#2d2d2d] to-[#0d0d0d]">
      <div className="flex justify-center items-center py-6">
        <h2 className="text-3xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#141414] to-[#212121] px-6">
          The purpose of Bar-born
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-4 w-11/12 mx-auto pb-44 pt-12">
        <div className="flex flex-col justify-between rounded-lg p-5 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 w-full sm:w-[35rem] h-72">
          <div>
            <h3 className="text-2xl text-[#d2d2d2] font-medium mb-4">
              Not just selling—making sure you know if you need it and how to
              use it.
            </h3>
            <p className="text-[#c2c2c2] text-lg">
              Too much fitness gear gets bought and barely used. We break down
              what’s worth it, what’s not, and how to get the most out of what
              you buy.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg p-5 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 w-full sm:w-[35rem] h-72">
          <div>
            <h3 className="text-2xl text-[#d2d2d2] font-medium my-4">
              Finding the best quality
            </h3>
            <p className="text-[#c2c2c2] text-lg xl:pt-2">
              Not everything labeled 'premium' is worth it—we sort through the
              hype to find gear that truly delivers, compare quality and
              performance, and help you decide what's truly worth your time and
              money.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-lg p-5 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 w-full sm:w-[35rem] h-72">
          <div>
            <h3 className="text-2xl text-[#d2d2d2] font-medium mb-4">
              How can we help?
            </h3>
            <p className="text-[#c2c2c2] text-lg">
              Found something that you’re unsure about, want a second opinion
              on, or want to suggest a product? Feel free to{" "}
              <a href="#contact" className="relative inline-block">
                <span className="border-transparent hover:border-[#d2d2d2] after:absolute  after:w-full after:h-[2px] after:bg-[#d2d2d2] after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100">
                  <b>
                    <p> reach out. </p>
                  </b>
                </span>
              </a>{" "}
              We'll gladly assist you in making the right choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
