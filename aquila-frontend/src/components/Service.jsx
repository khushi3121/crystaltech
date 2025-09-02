import React from "react";

const Service = () => {
  return (
    <div className="w-full bg-black flex justify-center py-16 px-4">
      {/* Inner Container */}
      <div className="w-full max-w-[1200px] flex flex-col">
        {/* Section Title */}
        <h2
          className="text-orange-500 font-urbanist font-bold text-center mb-8 text-3xl sm:text-4xl"
          style={{
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Services
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column (Text + CTA) */}
          <div className="flex flex-col gap-8 w-full lg:w-[582px]">
            {/* Description */}
            <p className="text-white text-lg leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>

            {/* Fuel Your Idea Box */}
            <div className="bg-[#0F2230] w-full lg:w-[582px] h-[274px] rounded-xl p-8 flex flex-col justify-between shadow-md">
              <h3 className="text-white text-2xl font-semibold mb-3">
                Fuel Your Digital-First Idea
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                With 1600+ page when looking at its layout. The point of using
              </p>
              <button className="w-[150px] h-[39px] bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-full transition">
                Get in touch →
              </button>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="flex flex-col gap-6 w-full lg:w-[473px]">
            {/* Card */}
            <div className="bg-white border-2 border-[#CCD7D8] rounded-xl p-6 w-full h-[216px] shadow-md">
              <h4 className="text-lg font-bold text-black mb-3">Design</h4>
              <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>

            {/* Card */}
            <div className="bg-white border-2 border-[#CCD7D8] rounded-xl p-6 w-full h-[216px] shadow-md">
              <h4 className="text-lg font-bold text-black mb-3">Development</h4>
              <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>

            {/* Card */}
            <div className="bg-white border-2 border-[#CCD7D8] rounded-xl p-6 w-full h-[216px] shadow-md">
              <h4 className="text-lg font-bold text-black mb-3">Website SEO</h4>
              <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
