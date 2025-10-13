import React, { useState, useEffect } from "react";

const Sidebar = ({ isVertical, scrollToSection }) => {
  const links = ["Home", "Projects", "About", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = (link) => {
    setActiveLink(link);
    scrollToSection?.(link);
  };

  // Detectar scroll para actualizar activeLink automáticamente
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].toLowerCase());
        if (!section) continue;
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveLink(links[i]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className={`bg-[#34495E] text-white p-2 transition-all duration-700 ease-in-out
        ${
          isVertical
            ? "flex flex-col w-48 h-screen justify-center gap-4 fixed"
            : "flex flex-row w-full justify-center gap-4"
        }
      `}
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleClick(link)}
          className={`p-4 rounded transition-all duration-300 ease-in-out 
            ${
              activeLink === link
                ? "bg-gray-700 border-l-4 border-blue-400"
                : "hover:bg-gray-700"
            }
          `}
        >
          {link}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;

