import { useState } from "react";

export default function Carousel({ resources }) {
  const [index, setIndex] = useState(0);

  if (!resources || resources.length === 0) return null;

  // Videos primero, luego imágenes
  const sorted = [
    ...resources.filter((r) => r.type === "video"),
    ...resources.filter((r) => r.type === "image"),
  ];

  const current = sorted[index];

  const prev = () => setIndex(index === 0 ? sorted.length - 1 : index - 1);
  const next = () =>
    setIndex(index === sorted.length - 1 ? 0 : index + 1);

  return (
    <div className="mt-4 p-2 bg-gray-50 rounded-lg shadow-inner relative max-h-64 md:max-h-80 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        {current.type === "video" ? (
          <video
            src={current.url}
            controls
            className="max-h-64 md:max-h-80 w-auto object-contain"
          />
        ) : (
          <img
            src={current.url}
            alt="project media"
            className="max-h-64 md:max-h-80 w-auto object-contain"
          />
        )}
      </div>

      {/* Botones prev/next */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}
