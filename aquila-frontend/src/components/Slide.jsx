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
    <div className="relative w-screen h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Mobile: Show all three in a row */}
      <div className="flex md:hidden gap-4 px-4 w-full justify-center">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt={`slide-${i}`}
            className="w-[80vw] h-[40vh] object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>

      {/* Desktop: Carousel effect */}
      <div className="hidden md:flex relative items-center justify-center w-full h-full">
        {slides.map((slide, i) => {
          let position = (i - current + slides.length) % slides.length;
          let classNames =
            "transition-all duration-700 ease-in-out absolute shadow-xl rounded-2xl";

          if (position === 0) {
            // Center (main big one)
            classNames +=
              " z-20 opacity-100 scale-100 w-[90vw] max-w-[757px] h-[65vh] max-h-[490px] hover:scale-105";
          } else if (position === 1) {
            // Right corner
            classNames +=
              " z-10 opacity-80 scale-90 w-[70vw] max-w-[441px] h-[40vh] max-h-[299px] translate-x-[200%]";
          } else if (position === slides.length - 1) {
            // Left corner
            classNames +=
              " z-10 opacity-80 scale-90 w-[70vw] max-w-[441px] h-[40vh] max-h-[299px] -translate-x-[200%]";
          } else {
            classNames += " opacity-0 scale-75 z-0";
          }

          return (
            <img
              key={i}
              src={slide}
              alt={`slide-${i}`}
              className={classNames + " object-cover rounded-2xl"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
