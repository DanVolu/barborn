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
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 5;
    const retryDelay = 2000;

    const fetchEquipment = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/equipment/cards`);
        if (!response.ok) throw new Error("Network response was not ok");

        const data: EquipmentCard[] = await response.json();
        setEquipmentList(data);
        setFetchError(false);
      } catch (error) {
        console.error(`Fetch attempt ${attempts + 1} failed:`, error);
        attempts++;

        if (attempts < maxAttempts) {
          setTimeout(fetchEquipment, retryDelay);
        } else {
          setFetchError(true);
          setEquipmentList(Array(4).fill({ name: "", image: "none" }));
        }
      }
    };

    fetchEquipment();
  }, []);

  const handleNavigation = (item: string) => {
    if (clickPrevent) return;
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/equipment/${formattedItem}`);
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#0d0d0d] to-[#0d0d0d]">
      <div className="flex justify-start md:justify-center items-center">
        <h2
          id="equipment"
          className="text-2xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#eeeeee] to-[#eeeeee] py-6 sm:py-6 px-6"
        >
          Browse by equipment
        </h2>
      </div>
      {fetchError && (
        <div className="text-center text-red-400 mb-4">
          Unable to load equipment. Please refresh the page.
        </div>
      )}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto custom-scrollbar p-2 border-x-[1.5rem] border-[#0d0d0d]"
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
            if (imageUrl && imageUrl.includes("imgur.com") && !imageUrl.endsWith(".jpg")) {
              imageUrl = imageUrl.replace("imgur.com", "i.imgur.com") + ".jpg";
            }

            return (
              <div
                key={index}
                onClick={() => {
                  if (!fetchError && item.name) {
                    handleNavigation(item.name);
                  }
                }}
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
                {!fetchError && item.name && (
                  <h3 className="text-[#f0f0f0ee] bg-slate-700/30 rounded-lg p-1 font-medium text-2xl absolute bottom-4 left-4">
                    {item.name}
                  </h3>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Equipment;
