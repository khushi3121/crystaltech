import React, { useEffect, useState } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.jpg";

const slides = [slide1, slide2, slide3];

const Slide = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[30vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Carousel: all screens */}
      <div className="relative flex items-center justify-center w-[40vw] h-[70vh]">
        {slides.map((slide, i) => {
          let offset = i - current;
          if (offset < -1) offset += slides.length;
          if (offset > 1) offset -= slides.length;

          let classNames =
            "absolute transition-all duration-700 ease-in-out rounded-2xl object-cover";

          if (offset === 0) {
            // Center slide
            classNames +=
              " z-20 opacity-100 scale-100 w-[90vw] md:w-[70vw] lg:w-[50vw] h-[30vh] md:h-[55vh] lg:h-[45vh] hover:scale-105 hover:shadow-[0_15px_25px_rgba(255,0,0,0.7)]";
          } else if (offset === 1) {
            // Right slide (half visible)
            classNames +=
              " z-10 opacity-80 scale-90 w-[70vw] md:w-[50vw] lg:w-[35vw] h-[30vh] md:h-[35vh] lg:h-[30vh] translate-x-[110%] shadow-[0_8px_15px_rgba(255,0,0,0.3)]";
          } else if (offset === -1) {
            // Left slide (half visible)
            classNames +=
              " z-10 opacity-80 scale-90 w-[70vw] md:w-[50vw] lg:w-[35vw] h-[30vh] md:h-[35vh] lg:h-[30vh] -translate-x-[110%] shadow-[0_8px_15px_rgba(255,0,0,0.3)]";
          } else {
            classNames += " z-0 opacity-0 scale-75";
          }

          return (
            <img
              key={i}
              src={slide}
              alt={`slide-${i}`}
              className={classNames}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
