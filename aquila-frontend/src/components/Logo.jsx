import React from "react";

// Image Imports
import waveweiro from "../assets/wavweiro.png";
import squarestone from "../assets/squarestone.png";
import martino from "../assets/martino.png";
import vertex from "../assets/vertex.png";
import aromix from "../assets/aromix.png";
import fireeli from "../assets/fireeli.png";

const brands = [
  { id: 1, image: waveweiro, alt: "Waverio" },
  { id: 2, image: squarestone, alt: "SquareStone" },
  { id: 3, image: martino, alt: "Martino" },
  { id: 4, image: vertex, alt: "Vertex" },
  { id: 5, image: aromix, alt: "Aromix" },
  { id: 6, image: fireeli, alt: "Fireeli" },
  { id: 7, text: "Natroma" },
];

const Logo = () => {
  return (
    <div className="w-full h-[70px] bg-[#172933] overflow-hidden flex items-center">
      {/* Marquee container */}
      <div className="marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center mx-6 min-w-[80px] sm:min-w-[100px]"
          >
            {brand.image ? (
              <img
                src={brand.image}
                alt={brand.alt}
                className="h-5 sm:h-6 md:h-7 object-contain"
              />
            ) : (
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium">
                {brand.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
