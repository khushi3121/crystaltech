import React from "react";
import curveone from "../assets/cureveone.png";
import humanicon from "../assets/humanicon.png";

const About = () => {
  return (
    <section className="max-w-full min-h-[566px] relative overflow-hidden">
      {/* Background split into 2 rectangles */}
      <div className="absolute top-0 left-0 w-full h-[92px] bg-black"></div>
      <div className="absolute top-[92px] left-0 w-full h-[474px] bg-[#172933]"></div>

      {/* Content */}
      <div
        className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center 
                   px-4 sm:px-6 md:px-12 lg:px-[120px] gap-8 md:gap-12 py-6 md:py-0"
      >
        {/* Left Side - Curve Image */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={curveone}
            alt="curve design"
            className="w-full max-w-[320px] sm:max-w-[400px] md:w-[517px] md:h-[566px] object-cover 
                       rounded-tl-[30px] rounded-tr-[30px] rounded-br-[150px] rounded-bl-[150px]
                       md:rounded-tl-[44px] md:rounded-tr-[46px] md:rounded-br-[244px] md:rounded-bl-[244px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full max-w-full md:max-w-[617px] text-white flex flex-col gap-6 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-semibold text-[#FF5733]">
            About Us
          </h2>

          {/* Paragraph */}
          <p className="font-urbanist text-sm sm:text-base md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-gray-200">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using content that looks random. Readers focus
            on design rather than text, ensuring the visual impact remains strong.
            Lorem Ipsum has become a standard placeholder, helping designers keep
            layouts clean and balanced.
          </p>

          {/* Icon Box */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-md rounded-xl p-4 
                       w-full max-w-full sm:max-w-[555px] mx-auto md:mx-0"
          >
            {/* Human Icon with off-white box */}
            <div className="bg-[#F9FAFB] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]">
              <img
                src={humanicon}
                alt="human icon"
                className="w-[40px] h-[40px] object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-black font-semibold text-sm sm:text-base md:text-[16px] lg:text-[18px]">
                Get Instant Professional Advice
              </span>
              <span className="text-gray-700 text-xs sm:text-sm md:text-[15px] lg:text-[16px] flex flex-col sm:flex-row gap-1 sm:gap-2">
                Ready to Help:
                <span className="text-[#FF5733] font-semibold">
                  +1 356 678 7897
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
