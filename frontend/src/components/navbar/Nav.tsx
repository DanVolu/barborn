import { useState, useEffect } from "react";
import MobileNavbar from "./mobile/mobileNav";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
      <div className="absolute flex text-gray-200 px-6 py-4 font-semibold">
        <img
          src={`${import.meta.env.BASE_URL}bar.png`}
          alt="Bar-Born"
          className="h-12 w-10"
        />
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-end p-4 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%]"
        }`}
      >
        <ul className="hidden md:flex gap-4 justify-end p-2 rounded-xl min-w-3/12 font-medium bg-gray-200 backdrop-blur-xs">
          {[
            { name: "Equipment", link: "equipment" },
            { name: "Supplements", link: "supplements" },
            { name: "Training Plans", link: "training" },
            { name: "Contacts", link: "contacts" },
          ].map((item) => (
            <li
              key={item.name}
              className="p-1 px-4 text-gray-600 hover:text-gray-950 hover:scale-105 transition duration-200"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <MobileNavbar />
      </nav>
    </>
  );
}

export default Navbar;
