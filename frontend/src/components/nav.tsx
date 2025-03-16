import { useState, useEffect } from "react";

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
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-end p-4 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%]"
        }`}
      >
        <ul className="flex gap-4 justify-end p-2 rounded-xl min-w-3/12 font-medium bg-gray-200 backdrop-blur-xs">
          <li className="p-1 px-4 text-gray-600 hover:text-gray-950 transition duration-200">
            <a href="#" className="block">
              Equpiment
            </a>
          </li>
          <li className="p-1 px-4 text-gray-600 hover:text-gray-950 transition duration-200">
            <a href="#" className="block">
              Supplements
            </a>
          </li>
          <li className="p-1 px-4 text-gray-600 hover:text-gray-950 transition duration-200">
            <a href="#" className="block ">
              Training plans
            </a>
          </li>
          <li className="p-1 px-4 text-gray-600 hover:text-gray-950 transition duration-200">
            <a href="#" className="block ">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
