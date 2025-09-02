import React from "react";
import icon from "../assets/icon.png";
import stars from "../assets/stars.png";

const Testimonial = () => {
  const data = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      name: "Lorem Ipsum is",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      name: "Lorem Ipsum is",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      name: "Lorem Ipsum is",
    },
  ];

  return (
    <section className="w-full bg-[#13232F] py-16 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#E67E5F] mb-12">
        Testimonials
      </h2>

      {/* Scrollable Cards Container */}
      <div className="overflow-x-auto scrollbar-hide w-full px-6">
        <div className="flex space-x-10 md:space-x-12 justify-start md:justify-center snap-x snap-mandatory">
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-center w-[350px] h-[452px] bg-white rounded-2xl shadow-md 
                         p-6 flex flex-col items-center text-center 
                         transition-transform transition-shadow duration-300 ease-in-out
                         hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Icon */}
              <img
                src={icon}
                alt="quote"
                className="w-[96px] h-[96px] mb-6"
              />

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 w-[284px]">
                {item.text}
              </p>

              {/* Stars */}
              <img
                src={stars}
                alt="stars"
                className="w-[160px] h-[32px] mb-4"
              />

              {/* Name */}
              <h4 className="font-semibold text-gray-900 text-lg">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
