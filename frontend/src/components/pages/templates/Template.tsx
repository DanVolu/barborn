import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Equipment {
  name: string;
  link: string;
  image: string;
  description?: {
    text: string;
    difficulty?: string;
    usefulness?: string;
    exercises?: string[];
  };
  detailLinks?: {
    _id: string;
    url: string;
    image: string;
    text: string;
    price: number;
  }[];
  category?: string;
}

function Template() {
  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>();
  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "https://barborn.onrender.com";
    let attempts = 0;
    const maxAttempts = 5;
    const retryDelay = 2000;

    const fetchEquipment = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/equipment/card/${name}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok)
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );

        const data: Equipment | Equipment[] = await response.json();
        setEquipment(Array.isArray(data) ? data[0] : data);
        setIsLoading(false);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Fetch attempt ${attempts + 1} failed:`, err.message);
          setError(
            `Failed to load equipment data: ${
              err instanceof Error ? err.message : "Unknown error"
            }`
          );
        } else {
          console.error(`Fetch attempt ${attempts + 1} failed:`, err);
          setError("An unknown error occurred.");
        }
        attempts++;

        if (attempts < maxAttempts) {
          setTimeout(fetchEquipment, retryDelay);
        } else {
          setError(
            `Failed to load equipment data: ${
              err instanceof Error ? err.message : "Unknown error"
            }`
          );
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    setError(null);
    fetchEquipment();
  }, [name]);

  const formatImageUrl = (url: string) => {
    if (url?.includes("imgur.com") && !url.endsWith(".jpg")) {
      return url.replace("imgur.com", "i.imgur.com") + ".jpg";
    }
    return url;
  };

  return (
    <main className="flex">
      <div className="min-h-screen flex flex-col justify-center md:items-center w-full px-4 bg-gradient-to-br from-[#101010] via-[#424242] to-[#2d2d2d]">
        <div className="w-10/12 flex items-start justify-start px-8 py-6 text-xl">
          <a
            onClick={() => navigate("/")}
            className="text-[#d2d2d2] cursor-pointer p-1 rounded-lg -ml-4 px-4 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/80 hover:text-[#e8e8e8]"
          >
            Back
          </a>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <p className="text-[#d2d2d2] text-xl">Loading equipment data...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-64">
            <p className="text-[#d2d2d2] text-xl bg-red-900/30 p-4 rounded-lg">
              {error}
            </p>
          </div>
        )}

        {!isLoading && !error && equipment && (
          <>
            <div className="flex flex-col xl:flex-row gap-8 justify-between md:w-10/12 px-4">
              <div className="min-w-10/12 h-[20rem] xl:min-w-[30rem] lg:h-[40rem] xl:h-[30rem] rounded-lg bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.02] hover:border-[#a0a0a0]/30 relative">
                <img
                  src={formatImageUrl(equipment.image)}
                  alt={equipment.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="border-2 border-[#3a3a3a] p-6 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40 flex flex-col">
                <h3 className="text-[#d2d2d2] text-3xl font-semibold mb-4">
                  {equipment.name}
                </h3>
                {equipment.description && (
                  <>
                    <div className="flex flex-col text-[#d2d2d2] text-lg mb-4">
                      {equipment.description.difficulty && (
                        <p>Difficulty: {equipment.description.difficulty}</p>
                      )}
                      {equipment.description.usefulness && (
                        <p>Usefulness: {equipment.description.usefulness}</p>
                      )}
                    </div>
                    <p className="text-[#d2d2d2] text-base leading-relaxed space-x-2">
                      <strong>Disclaimer:</strong> The views expressed here are
                      solely those of the author. {equipment.description.text}
                    </p>
                    {equipment.description.exercises &&
                      equipment.description.exercises.length > 0 && (
                        <div className="mt-4">
                          <strong className="text-[#d2d2d2]">
                            Key Exercises:
                          </strong>
                          <ul className="text-[#d2d2d2] ml-5 mt-2 list-disc">
                            {equipment.description.exercises.map(
                              (exercise, idx) => (
                                <li key={idx}>{exercise}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </>
                )}
              </div>
            </div>

            {equipment.detailLinks && equipment.detailLinks.length > 0 && (
              <div className="min-h-screen flex flex-col justify-center md:items-center w-full px-4">
                <div className="flex flex-col border-2 border-[#3a3a3a] p-4 mt-8 h-full md:w-10/12 rounded-lg bg-[#1b1b1b]/80 shadow-lg shadow-black/40">
                  <h3 className="text-[#d2d2d2] text-2xl font-semibold mb-4">
                    Where to Buy {equipment.name}
                  </h3>
                  {equipment.detailLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row gap-4 mb-6 p-4 rounded-lg border-2 border-[#3a3a3a] bg-gradient-to-bl from-[#272727] to-[#1b1b1b] shadow-lg shadow-black/40 hover:border-[#a0a0a0]/40 hover:text-[#e8e8e8] transition-all duration-500 cursor-pointer"
                    >
                      <img
                        className="h-25 w-25 rounded-lg border-2 border-white"
                        src={link.image}
                        alt={link.text}
                      />
                      <div className="flex flex-col">
                        <span className="text-[#d2d2d2] text-xl mt-4">
                          {link.text}
                        </span>
                        <span className="text-[#d2d2d2] text-md">
                          ${link.price}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Template;
