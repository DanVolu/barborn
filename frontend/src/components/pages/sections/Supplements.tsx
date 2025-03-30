import { useNavigate } from "react-router-dom";
import { useCarouselDrag } from "../../hooks/carouselDrag";

function Supplements() {
  const navigate = useNavigate();
  const {
    carouselRef,
    isDragging,
    clickPrevent,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarouselDrag();

  const imageMap: Record<string, string> = {
    // "Protein Powder": `${import.meta.env.BASE_URL}protein.jpg`,
    // "Creatine Monohydrate": `${import.meta.env.BASE_URL}creatine.jpg`,
    // "Magnesium": `${import.meta.env.BASE_URL}magnesium.jpg`,
    // "Vitamins": `${import.meta.env.BASE_URL}vitamins.jpg`,
  };

  const supplementsList = [
    "Protein Powder",
    "Creatine Monohydrate",
    "Magnesium",
    "Vitamins",
  ];

  const handleNavigation = (item: string) => {
    if (clickPrevent) return;
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/supplements/${formattedItem}/`);
  };

  return (
    <div
      id="supplements"
      className="h-full bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#0d0d0d] py-24"
    >
      <div className="flex justify-start md:justify-center items-center">
        <h2 className="text-2xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#dfdfdf] to-[#d2d2d2] px-6">
          Browse by supplement type
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto custom-scrollbar p-4"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            cursor: isDragging ? "grab" : "pointer",
            userSelect: "none",
          }}
        >
          {supplementsList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item)}
              className="min-w-[80%] md:min-w-[25rem] lg:min-w-[30rem] h-[30rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative cursor-pointer"
              style={{
                backgroundImage: imageMap[item] ? `url(${imageMap[item]})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: imageMap[item] ? "transparent" : "rgba(27, 27, 27, 0.8)",
              }}
            >
              <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Supplements;
