import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./mobile/MobileNav";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

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

  const navItems = [
    { name: "Equipment", link: "/equipment" },
    // { name: "Supplements", link: "/supplements" },
    { name: "Training Plans", link: "/training" },
    { name: "Contacts", link: "/contact" },
  ];

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="">
      <div 
        className="absolute flex items-center text-[#E7E7E7] px-6 py-4 font-semibold z-[100] cursor-pointer"
        onClick={handleNavigateHome}
        style={{ pointerEvents: 'auto' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}bar.png`}
          alt="Bar-Born"
          className="h-12 w-10"
        />
        <span className="ml-2 opacity-90 cursor-pointer">-BORN</span>
      </div>

      <nav
        className={`absolute top-0 left-0 right-0 flex justify-end p-4 transition-all duration-300 z-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="hidden md:flex gap-2 justify-end invert font-semibold p-2 rounded-xl min-w-1/12">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="p-1 px-3 text-[#090909] transition-all duration-300 hover:scale-105"
            >
              <a onClick={() => navigate(item.link)} className="cursor-pointer">
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