import { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import HomeProjects from "../components/HomeProjects";
import Contact from "../pages/Contact";
import About from "../pages/About";
// Si luego tenés componentes About y Contact, los importás acá también
// import About from "../components/About";
// import Contact from "../components/Contact";

export default function HomeLayout() {
  const [isVertical, setIsVertical] = useState(false);

  // Refs para las secciones
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleLinkClick = () => {
    setIsVertical(true);
  };

  const scrollToSection = (section) => {
    const sectionMap = {
      Home: homeRef,
      Projects: projectsRef,
      About: aboutRef,
      Contact: contactRef,
    };

    const targetRef = sectionMap[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // 👇 Solo pasar a layout vertical si NO es la sección Home
    if (section !== "Home") {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
  };

  return (
    <div
      className={`flex ${
        isVertical ? "flex-row" : "flex-col"
      } min-h-screen transition-all duration-700`}
    >
      <Sidebar
        isVertical={isVertical}
        onLinkClick={handleLinkClick}
        scrollToSection={scrollToSection}
      />

      <div
        className={`flex-1 ${
          isVertical ? "ml-48" : ""
        } overflow-y-auto scroll-smooth`}
      >
        <section id="home" ref={homeRef}>
          <Hero onClickCTA={() => scrollToSection("Projects")} />
        </section>

        <section id="projects" ref={projectsRef}>
          <HomeProjects />
        </section>

        <section
          id="about"
          ref={aboutRef}
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <About />
        </section>

        <section
          id="contact"
          ref={contactRef}
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
