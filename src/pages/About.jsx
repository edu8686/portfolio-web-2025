// components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-700 text-lg leading-relaxed">
          With an academic background in Political Science, I gradually became
          involved in the world of technology and software — first through Data
          Science, and later by training in the fascinating field of Software
          Development.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Today, I am a full stack developer passionate about building complete
          web applications with clean interfaces and efficient backends. I enjoy
          learning new technologies and applying them to projects that have a
          real impact. I'm currently focused on React, Node.js, and databases,
          exploring the integration of front-end and back-end solutions.
          However, I also have experience with Python and Java.
        </p>
      </div>
    </div>
  );
};

export default About;
