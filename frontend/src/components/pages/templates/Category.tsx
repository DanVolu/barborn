import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Nav";

interface CategoryItem {
  name: string;
  link: string;
  image: string;
  price?: number;
  category?: string;
}

function Category() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [items, setItems] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (!category) return;

    setActiveFilter(null);
    setIsLoading(true);
    setError(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    let attempts = 0;
    const maxAttempts = 5;
    const retryDelay = 2000;

    const fetchItems = async () => {
      try {
        const endpoint =
          category === "equipment"
            ? `${backendUrl}/api/v1/equipment/cards`
            : `${backendUrl}/api/v1/supplements/cards`;

        const response = await fetch(endpoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }

        const data: CategoryItem[] = await response.json();
        setItems(data);

        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category).filter(Boolean))
        );
        setFilters(uniqueCategories as string[]);
        setIsLoading(false);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Fetch attempt ${attempts + 1} failed:`, err.message);
          setError(
            `Failed to load ${category} data: ${
              err instanceof Error ? err.message : "Unknown error"
            }`
          );
        } else {
          console.error(`Fetch attempt ${attempts + 1} failed:`, err);
          setError("An unknown error occurred.");
        }

        attempts++;

        if (attempts < maxAttempts) {
          setTimeout(fetchItems, retryDelay);
        } else {
          setError(
            `Failed to load ${category} data: ${
              err instanceof Error ? err.message : "Unknown error"
            }`
          );
          setIsLoading(false);
        }
      }
    };

    fetchItems();
  }, [category]);

  const formatImageUrl = (url: string) => {
    if (url?.includes("imgur.com") && !url.endsWith(".jpg")) {
      return url.replace("imgur.com", "i.imgur.com") + ".jpg";
    }
    return url;
  };

  const handleItemClick = (item: CategoryItem) => {
    const formattedItem = item.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${category}/${formattedItem}`);
  };

  const filteredItems = activeFilter
    ? items.filter((item) => item.category === activeFilter)
    : items;

  const getCategoryTitle = () => {
    if (!category) return "Products";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-[#090909] pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center mb-16 md:mt-8 pb-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#e0e0e0]">
              {getCategoryTitle()}
            </h1>
          </div>

          {filters.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === null
                      ? "bg-[#333333] text-[#ffffff]"
                      : "bg-[#1a1a1a] text-[#e0e0e0] hover:bg-[#252525]"
                  }`}
                >
                  All
                </button>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeFilter === filter
                        ? "bg-[#333333] text-[#ffffff]"
                        : "bg-[#1a1a1a] text-[#e0e0e0] hover:bg-[#252525]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <p className="text-[#e0e0e0] text-xl">
                Loading {category} data...
              </p>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center h-64">
              <p className="text-[#e0e0e0] text-xl bg-[#1a1a1a] p-4 rounded-lg">
                {error}
              </p>
            </div>
          )}

          {!isLoading && !error && filteredItems.length === 0 && (
            <div className="flex justify-center items-center h-64">
              <p className="text-[#e0e0e0] text-xl">
                No {category} found{activeFilter ? ` in ${activeFilter}` : ""}.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => {
              const imageUrl = formatImageUrl(item.image);
              return (
                <div
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className="rounded-md transition-all duration-500 hover:scale-105 relative cursor-pointer h-[25rem]"
                  style={{
                    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: imageUrl
                      ? "transparent"
                      : "rgba(27, 27, 27, 0.8)",
                  }}
                >
                  {/* Overlay the title in the lower left corner */}
                  <h3 className="text-[#f0f0f0ee] bg-[#090909]/20 font-medium rounded-lg p-1 text-2xl absolute bottom-4 left-4">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Category;
