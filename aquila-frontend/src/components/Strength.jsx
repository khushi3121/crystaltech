import React from "react";
import icon01 from "../assets/01.png";
import icon02 from "../assets/02.png";
import icon03 from "../assets/03.png";
import icon04 from "../assets/04.png";

const strengths = [
  {
    id: 1,
    icon: icon01,
    title: "Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: icon02,
    title: "Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: icon03,
    title: "Develop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    icon: icon04,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Strength = () => {
  return (
    <section className="w-full bg-black py-12 px-4 text-white font-sans">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500 text-center mb-12">
        Our Strength
      </h2>

      {/* ✅ Responsive Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-8 lg:gap-12">
        {strengths.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Icon + Text */}
            <div className="flex flex-col items-center text-center max-w-[260px] mx-auto">
              <img
                src={item.icon}
                alt={`Step ${item.id}`}
                className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal mt-2">
                {item.description}
              </p>
            </div>

            {/* ✅ Show Arrows ONLY on large screens */}
            {index < strengths.length - 1 && (
              <div className="hidden lg:flex items-center justify-center">
                <svg
                  className="w-16 md:w-20 lg:w-28 h-10 md:h-12 lg:h-16"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={
                      index % 2 === 1
                        ? "M10 25 Q50 40 90 25" // down curve
                        : "M10 25 Q50 10 90 25" // up curve
                    }
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="3,5"
                    fill="transparent"
                  />
                  {/* Arrowhead */}
                  <polyline
                    points="85,20 95,25 85,30"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Strength;
