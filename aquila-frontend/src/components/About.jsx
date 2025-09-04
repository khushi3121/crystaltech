import React from "react";
import curveone from "../assets/cureveone.png";
import humanicon from "../assets/humanicon.png";

const About = () => {
  return (
    <section className="relative w-full min-h-[566px] overflow-hidden">
      {/* Background split into 2 rectangles */}
      <div className="absolute inset-0">
        <div className="w-full h-[92px] bg-black"></div>
        <div className="w-full h-[474px] bg-[#172933]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row bg-[#172933] items-center justify-center gap-8 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-[120px] py-10 md:py-0">
        
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
        <div className="w-full md:w-[617px] text-white flex flex-col gap-6 bg-[#172933] text-center md:text-left">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[28px] font-semibold bg-[#172933] text-[#FF5733]">
            About Us
          </h2>

          {/* Paragraph */}
          <p className="font-urbanist text-base sm:text-[16px] md:text-[18px] font-medium leading-relaxed text-gray-200">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using content that looks random. Readers focus
            on design rather than text, ensuring the visual impact remains strong.
            Lorem Ipsum has become a standard placeholder, helping designers keep
            layouts clean and balanced.
          </p>

          {/* Icon Box */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white shadow-md rounded-xl p-4 sm:p-5 w-full max-w-full sm:max-w-[555px] mx-auto md:mx-0">
            
            {/* Human Icon */}
            <div className="bg-[#F9FAFB] w-[70px] h-[70px] flex items-center justify-center rounded-[10px] flex-shrink-0">
              <img
                src={humanicon}
                alt="human icon"
                className="w-[40px] h-[40px] object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col text-center sm:text-left min-w-0">
              <span className="text-black font-semibold text-base sm:text-[16px] md:text-[16px] truncate">
                Get Instant Professional Advice
              </span>
              <span className="text-gray-700 text-sm sm:text-[15px] mt-1 sm:mt-0 break-words">
                Ready to Help:{" "}
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
