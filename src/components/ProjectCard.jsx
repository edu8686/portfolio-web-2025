import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#BDC3C7] rounded-xl p-4 mb-6 shadow-lg">
      {console.log(project.image)}
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-48 h-32 md:h-40 object-contain rounded-xl mb-4 md:mb-0 md:mr-4 bg-white"
      />

      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[#34495E] mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-[#34495E] text-[#ECF0F1] px-2 py-1 rounded font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
        <a
          href={project.linkRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          See Github repository
        </a>
        {
          project.linkDeploy &&         
          (<a
          href={project.linkDeploy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          See the webpage
        </a>
          )
        }
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
