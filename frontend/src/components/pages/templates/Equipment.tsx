// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rings() {
  const navigate = useNavigate();


  // const [productsState, setProductsState] = useState(initialProducts);
  // const [sortOrder, setSortOrder] = useState("asc");

  // function toggleSort() {
  //   const newOrder = sortOrder === "asc" ? "desc" : "asc";
  //   setSortOrder(newOrder);
  //   const sortedProducts = [...productsState].sort((a, b) => {
  //     const priceA = parseFloat(a.price.replace("$", ""));
  //     const priceB = parseFloat(b.price.replace("$", ""));
  //     return newOrder === "asc" ? priceA - priceB : priceB - priceA;
  //   });
  //   setProductsState(sortedProducts);
  // }

  return (
    <main className="flex">
      <div
        className={`absolute  top-0 left-1 flex justify-end px-8 py-6 text-3xl transition-all duration-500 z-50 `}
      >
        <a
          onClick={() => navigate("/")}
          className="text-[#d2d2d2] cursor-pointer "
        >
          ←
        </a>
      </div>
      <div className="p-20 min-h-screen flex flex-col justify-center md:items-center w-full px-4 bg-gradient-to-br from-[#101010] via-[#424242] to-[#2d2d2d]">
        <div className="flex flex-col xl:flex-row gap-8 justify-between md:w-10/12 px-4">
          <div className="min-w-10/12 h-[20rem] xl:min-w-[30rem] lg:h-[40rem] xl:h-[30rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
            {/* <img alt="Example" /> */}
          </div>

          <div className="border-2 border-[#3a3a3a] p-6 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40 flex flex-col">
            <h3 className="text-[#d2d2d2] text-3xl font-semibold mb-4">
              Gymnastic Rings
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
              <br />
              <br />
              Recommended width between the rings is 70cm and the width of the
              rings themselves is 32mm.
            </p>
            <button className="bg-[#d2d2d2] text-[#1b1b1b] py-2 px-4 rounded-lg mt-4 xl:mt-auto font-medium cursor-pointer hover:scale-105 hover:text-[#131313] hover:bg-[#d2d2d2]/80 transition-all duration-300 self-start">
              Button!!!
            </button>
          </div>
        </div>

        <div className="min-h-screen flex flex-col justify-center md:items-center w-full px-4">
          <div className="flex flex-col border-2 border-[#3a3a3a] p-4 mt-8 h-full md:w-10/12 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
              <h3 className="text-[#d2d2d2] text-2xl font-semibold">
                Where to Buy Gymnastic Rings
              </h3>
              <button
                // onClick={toggleSort}
                className="bg-[#d2d2d2] text-[#1b1b1b] py-2 px-6 mt-4 lg:mt-0 rounded-lg font-medium cursor-pointer hover:scale-[1.03] hover:bg-[#d2d2d2]/80 transition-all duration-300 self-start"
              >
                Sort Price:{" "}
                {/* {sortOrder === "asc" ? "Low to High" : "High to Low"} */}
              </button>
            </div>

            {/* {productsState.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-4 mb-6 p-4 rounded-lg border-2 border-[#3a3a3a] bg-gradient-to-bl from-[#272727] to-[#1b1b1b] shadow-lg shadow-black/40 hover:scale-[1.01] hover:bg-[#3a3a3a]/80 transition-all duration-500 cursor-pointer"
              >
                <img
                  className="h-25 w-25 rounded-lg border-2 border-white"
                  src={product.image}
                  alt={product.name}
                />
                <div className="flex flex-col">
                  <span className="text-[#d2d2d2] text-lg">
                    {product.name} - {product.price}
                  </span>
                </div>
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rings;
