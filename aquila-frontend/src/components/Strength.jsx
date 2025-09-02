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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    icon: icon02,
    title: "Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    icon: icon03,
    title: "Develop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    icon: icon04,
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const Strength = () => {
  return (
    <section className="w-full bg-black py-12 px-4 text-white font-sans">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-orange-500 text-center mb-12">
        Our Strength
      </h2>

      {/* Container */}
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 lg:gap-12">
        {strengths.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Icon */}
            <div className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={`Step ${item.id}`}
                className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-sm md:text-base leading-relaxed font-normal text-center mt-2">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            {index < strengths.length - 1 && (
              <div className="flex items-center">
                <svg
                  className="w-16 h-6"
                  viewBox="0 0 64 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="54"
                    y2="4"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                  />
                  {/* Arrowhead */}
                  <polyline
                    points="54,0 63,4 54,8"
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
