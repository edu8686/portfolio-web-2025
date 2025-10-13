import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
        My Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
