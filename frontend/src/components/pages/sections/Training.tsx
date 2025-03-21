import { useNavigate } from "react-router-dom";
import { useCarouselDrag } from "../../hooks/carouselDrag";

function Training() {
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
    "Free sample workouts": `${import.meta.env.BASE_URL}free.png`,
    "Calisthenics": `${import.meta.env.BASE_URL}cali.png`,
    "Street workout": `${import.meta.env.BASE_URL}SW.png`,
    "Street lifting": `${import.meta.env.BASE_URL}SL.jpg`,
    "Size": `${import.meta.env.BASE_URL}size.png`,
    "Strength": `${import.meta.env.BASE_URL}strength.png`,
    "Mobility": `${import.meta.env.BASE_URL}mobility.png`,
  };

  const trainingGoals = [
    "Free sample workouts",
    "Calisthenics",
    "Street workout",
    "Street lifting",
    "Size",
    "Strength",
    "Mobility",
  ];

  const handleNavigation = (item: string) => {
    if (clickPrevent) return;
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/training/${formattedItem}/`);
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#0d0d0d]">
      <div className="flex justify-start md:justify-center items-center">
        <h2
          id="training"
          className="text-2xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#dfdfdf] to-[#d2d2d2] px-6"
        >
          Browse by training goal
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
          {trainingGoals.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item)}
              className="min-w-[80%] md:min-w-[25rem] lg:min-w-[30rem] h-[30rem] rounded-lg border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative cursor-pointer"
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

export default Training;
