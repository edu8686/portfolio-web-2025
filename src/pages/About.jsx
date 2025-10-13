// components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-700 text-lg leading-relaxed">
          Con formación académica en Ciencia Política, fui involucrándome en 
          el mundo de la tecnología y el software, primero de la mano de Data Science, 
          luego me fui capacitando en el fascinante mundo del Desarrollo de Software.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Hoy soy un desarrollador full stack apasionado por crear aplicaciones web
          completas, con interfaces limpias y backends eficientes. Me gusta
          aprender nuevas tecnologías y aplicarlas en proyectos que tengan
          impacto real. Actualmente estoy enfocado en React, Node.js y bases de
          datos, explorando la integración de soluciones front-end y back-end. Sin embargo,
          tengo formación también en Python y Java.
        </p>
      </div>
    </div>
  );
};

export default About;
