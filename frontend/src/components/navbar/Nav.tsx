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
    <div className="">
      <div className=" absolute flex items-center text-gray-200 px-6 py-4 font-semibold z-50">
        <img
          src={`${import.meta.env.BASE_URL}bar.png`}
          alt="Bar-Born"
          className="h-12 w-10"
        />
        <span className="ml-2 opacity-80">-BORN</span>
      </div>

      <nav
        className={`absolute top-0 left-0 right-0 flex justify-end p-4 transition-all duration-300 z-50 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%]"
        }`}
      >
        <ul className="hidden md:flex gap-2 justify-end invert font-semibold  p-2 rounded-xl min-w-1/12">
          {[
            { name: "Equipment", link: "equipment" },
            // { name: "Supplements", link: "supplements" },
            { name: "Training Plans", link: "training" },
            { name: "Contacts", link: "contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="p-1 px-3 text-[#090909] transition-all duration-300 hover:scale-105"
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
    </div>
  );
}

export default Navbar;
