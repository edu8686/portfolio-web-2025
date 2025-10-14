import { Link } from "react-router-dom";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.js";

const HomeProjects = React.forwardRef((props, ref) => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section ref={ref} className="px-6 py-16 bg-[#ECF0F1] min-h-screen">
      <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
        Proyectos
      </h2>
      {featuredProjects.map((project) => {
        console.log("featuredProjects:", featuredProjects);
        console.log("Renderizando:", project.title, project.image);
        return <ProjectCard key={project.id} project={project} />;
      })}

      <div className="mt-8 text-center">
        <Link
          to="/all-projects" // ← ruta de la página con todos los proyectos
          className="text-blue-500 font-semibold hover:underline"
        >
          See all projects
        </Link>
      </div>
    </section>
  );
});

export default HomeProjects;
