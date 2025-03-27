import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarouselDrag } from "../../hooks/carouselDrag";

interface EquipmentCard {
  name: string;
  image?: string;
}

function Equipment() {
  const navigate = useNavigate();
  const {
    carouselRef,
    clickPrevent,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarouselDrag();

  const [equipmentList, setEquipmentList] = useState<EquipmentCard[]>([]);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/v1/equipment/cards`)
      .then((response) => response.json())
      .then((data: EquipmentCard[]) => {
        setEquipmentList(data);
      })
      .catch((error) => console.error("Error fetching equipment:", error));
  }, []);

  const handleNavigation = (item: string) => {
    if (clickPrevent) return;
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${formattedItem}/`);
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#2d2d2d] via-[#0d0d0d] to-[#0d0d0d]">
      <div className="flex justify-start md:justify-center items-center">
        <h2
          id="equipment"
          className="text-2xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#d2d2d2] to-[#d2d2d2] py-6 sm:py-6 px-6"
        >
          Browse by equipment
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
            cursor: "grab",
            userSelect: "none",
          }}
        >
          {equipmentList.map((item, index) => {
            let imageUrl = item.image;
            if (imageUrl?.includes("imgur.com") && !imageUrl.endsWith(".jpg")) {
              imageUrl = imageUrl.replace("imgur.com", "i.imgur.com") + ".jpg";
            }

            return (
              <div
                key={index}
                onClick={() => handleNavigation(item.name)}
                className="min-w-[80%] md:min-w-[25rem] lg:min-w-[30rem] h-[30rem] rounded-lg border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative cursor-pointer"
                style={{
                  backgroundImage:
                    imageUrl !== "none" ? `url(${imageUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor:
                    imageUrl === "none"
                      ? "rgba(27, 27, 27, 0.8)"
                      : "transparent",
                }}
              >
                <h3 className="text-[#d2d2d2] font-medium text-2xl absolute bottom-4 left-4">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Equipment;
