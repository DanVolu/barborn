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

  const trainingGoals = [
    "Free guides and templates",
    "Calisthenics",
    "Street workout",
    "Street lifting",
    "Size",
    "Strength",
    "Mobility",
  ];

  const handleNavigation = (item: string) => {
    if (clickPrevent) return;

    window.scrollTo(0, 0);

    if (item === "Free sample workouts") {
      // Temporary change
      navigate("/workout");
    } else {
      const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
      navigate(`/training/${formattedItem}/`);
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#0d0d0d] pt-12">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-11/12 mx-auto px-3 md:px-2">
      <h2
          id="training"
          className="text-3xl md:text-4xl font-semibold bg-gradient-to-l text-transparent bg-clip-text from-[#eeeeee] to-[#eeeeee] md:py-8 sm:pb-8 md:px-0"
        >
          Browse by training goal
        </h2>
        <button
          onClick={() => navigate("/plans")}
          className="text-md text-[#a0a0a0] sm:ml-4 mb-4 mt-1 hover:text-[#d2d2d2] transform duration-300 cursor-pointer"
        >
          View all plans
        </button>
      </div>

      <div className="relative overflow-hidden md:w-11/12 mx-auto">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto custom-scrollbar p-2 border-x-[1.5rem] border-[#0d0d0d] md:border-x-0"
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
                backgroundSize: "cover",
                backgroundPosition: "center",
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
