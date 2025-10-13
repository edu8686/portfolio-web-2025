import React from "react";

const Hero = ({ onClickCTA }) => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-32 px-4 h-screen"
      style={{ backgroundColor: "#2C3E50" }}
    >
      <h1 className="text-5xl font-extrabold text-white font-Poppins">
        Eduardo D. Negri
      </h1>
      <h2 className="text-xl text-gray-300 font-Poppins mt-4">
        Full Stack Developer | Web & Database
      </h2>
      <p className="text-gray-300 mt-4 max-w-xl">
        Apasionado por construir aplicaciones web completas, interfaces limpias
        y backends eficientes.
      </p>
      <button
        onClick={onClickCTA}
        className="mt-8 bg-white text-[#2C3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
      >
        Ver proyectos
      </button>
    </section>
  );
};

export default Hero;
