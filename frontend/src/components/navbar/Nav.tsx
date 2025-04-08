import { useState, useEffect } from "react";
import MobileNav from "./mobile/MobileNav";
import { useScrollToSection } from "../hooks/navScroll";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollToSection } = useScrollToSection();
  
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
      <div className="absolute flex text-gray-200 px-6 py-4 font-semibold z-50">
        <img
          src={`${import.meta.env.BASE_URL}bar.png`}
          alt="Bar-Born"
          className="h-12 w-10"
        />
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-end p-4 transition-all duration-300 z-50 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%]"
        }`}
      >
        <ul className="hidden md:flex gap-4 justify-end bg-[#1b1b1b] border border-[#3a3a3a]/40 shadow-md shadow-black/40 p-2 rounded-xl min-w-1/12 font-medium">
          {[
            { name: "Equipment", link: "equipment" },
            // { name: "Supplements", link: "supplements" },
            { name: "Training Plans", link: "training" },
            { name: "Contacts", link: "contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="p-1 px-4 text-gray-200 transition-all duration-300 hover:text-gray-100 hover:scale-105 hover:drop-shadow-md"
            >
              <a
                onClick={() => scrollToSection(item.link)}
                className="cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <MobileNav />
      </nav>
    </>
  );
}

export default Navbar;
