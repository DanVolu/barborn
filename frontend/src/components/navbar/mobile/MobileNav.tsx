import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MobileNav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-end p-4 transition-all duration-500 z-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <button
          className="md:hidden font-medium bg-white/90 border border-[#3a3a3a]/40 shadow-lg shadow-black/40 text-[#090909] hover:border-[#a0a0a0]/30 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>

        {isOpen && (
          <ul
            ref={dropdownRef}
            className="absolute right-0 mr-4 w-11/12 bg-white/90 border border-[#3a3a3a] shadow-md shadow-black/40 rounded-md transition-all duration-300"
          >
            {[
              { name: "Equipment", link: "equipment" },
              // { name: "Supplements", link: "supplements" },
              { name: "Training Plans", link: "training" },
              { name: "Contacts", link: "contact" },
            ].map((item) => (
              <li
                key={item.name}
                className="px-4 py-2 text-[#090909] hover:bg-white/50 hover:border-[#a0a0a0]/30 transition-all duration-300 rounded-md"
              >
                <a
                  onClick={() => handleNavigate(item.link)}
                  className="block w-full h-full cursor-pointer"
                >
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
