import React from "react";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel"; // asegúrate de la ruta
import mediaResources from "../data/mediaResources"; // el array con id, title y resources
import projects from "../data/projects";


const Projects = () => {
  return (
    <div className="px-6 py-12 md:ml-48 flex justify-center">
      {/* Contenedor centrado y con fondo fijo */}
      <div className="max-w-6xl w-full space-y-12 bg-gray-100 p-6 rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
          My Projects
        </h2>

        {projects.map((project) => {
          const projectData = mediaResources.find((p) => p.id === project.id);

          return (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 flex flex-col space-y-4"
            >
              {/* Contenido */}
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Carousel */}
              {projectData && projectData.resources.length > 0 && (
                <div className="mt-4">
                  <Carousel resources={projectData.resources} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
