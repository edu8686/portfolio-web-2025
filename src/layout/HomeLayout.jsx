import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import HomeProjects from "../components/HomeProjects";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function HomeLayout() {
  const [isVertical, setIsVertical] = useState(false);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sectionMap = {
    Home: homeRef,
    Projects: projectsRef,
    About: aboutRef,
    Contact: contactRef,
  };

  const scrollToSection = (section) => {
    const targetRef = sectionMap[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Actualiza isVertical al hacer click
    setIsVertical(section !== "Home");
  };

  // Detectar scroll y actualizar isVertical automáticamente
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let newIsVertical = false;

      for (let [section, ref] of Object.entries(sectionMap)) {
        if (!ref.current) continue;
        const offsetTop = ref.current.offsetTop;
        const offsetBottom = offsetTop + ref.current.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          // Solo Home mantiene isVertical = false
          newIsVertical = section !== "Home";
          break;
        }
      }

      setIsVertical(newIsVertical);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex ${isVertical ? "flex-row" : "flex-col"} min-h-screen transition-all duration-700`}
    >
      <Sidebar isVertical={isVertical} scrollToSection={scrollToSection} />

      <div className={`flex-1 ${isVertical ? "ml-48" : ""} overflow-y-auto scroll-smooth`}>
        <section id="home" ref={homeRef}>
          <Hero onClickCTA={() => scrollToSection("Projects")} />
        </section>

        <section id="projects" ref={projectsRef}>
          <HomeProjects />
        </section>

        <section id="about" ref={aboutRef} className="h-screen flex items-center justify-center bg-gray-100">
          <About />
        </section>

        <section id="contact" ref={contactRef} className="h-screen flex items-center justify-center bg-gray-200">
          <Contact />
        </section>
      </div>
    </div>
  );
}
