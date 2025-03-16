import { useState, useEffect, useRef } from "react";

function MobileNav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-end p-4 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%]"
        }`}
      >
        <button
          className="md:hidden bg-gray- text-gray-700 hover:bg-gray-200 hover:text-gray-900 transform transition duration-500 px-4 py-2 rounded-md shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        {isOpen && (
          <ul
            ref={dropdownRef}
            className="absolute right-0 mr-4 w-11/12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg opacity-90"
          >
            {[
              { name: "Equipment", link: "equipment" },
              { name: "Supplements", link: "supplements" },
              { name: "Training Plans", link: "training" },
              { name: "Contacts", link: "contacts" },
            ].map((item) => (
              <li
                key={item.name}
                className="px-4 py-2 text-gray-200 hover:bg-gray-300 hover:text-gray-800 transition transform duration-400 rounded-lg"
              >
                <a href={item.link} className="block w-full h-full">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default MobileNav;
