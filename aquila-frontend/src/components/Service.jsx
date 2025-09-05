import React from "react";
import bg2 from "../assets/bg2.png";
import hook from "../assets/hook.png";
import setting from "../assets/setting.png";
import aeroplane from "../assets/aeroplane.png";

const Services = () => {
  return (
    <section
      className="relative w-full text-white px-6 py-12"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full items-center lg:items-start">
          {/* Services box */}
          <div
            className="w-full max-w-[630px] h-auto lg:h-[259px] mb-10 text-center lg:text-left"
            style={{ fontFamily: "Urbanist" }}
          >
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[38px] sm:leading-[44px] lg:leading-[49px] font-semibold text-[#FF4D4D]">
              Services
            </h2>
            <p className="text-[20px] sm:text-[28px] lg:text-[35px] leading-[28px] sm:leading-[36px] lg:leading-[42px] font-medium text-[#FFFFFF] mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
          </div>

          {/* Fuel box */}
          <div className="w-full max-w-[582px] h-auto lg:h-[274px] bg-[#0D2A32] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center lg:text-left">
            <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[36px]">
              Fuel Your Digital-First Idea
            </h3>
            <p className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] mt-3">
              With 1600+ page when looking at its layout. The point of using
            </p>
            <a
              href="#contact"
              className="mt-4 bg-[#FF4D4D] hover:bg-[#e04343] text-white px-6 py-3 rounded-3xl font-medium w-fit mx-auto lg:mx-0 flex items-center gap-2"
            >
              Get in touch →
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-[696px] mx-auto flex flex-col justify-between gap-8">
          {/* Design Card */}
          <div className="w-full max-w-[473px] h-auto lg:h-[196px] bg-white text-black rounded-3xl shadow-md p-6 flex justify-between relative mx-auto">
            <div>
              <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-3">
                Design
              </h3>
              <ul className="text-[16px] sm:text-[18px] leading-[20px] font-semibold list-disc pl-4 space-y-1 text-left">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>
            <img
              src={hook}
              alt="design"
              className="w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 right-4"
            />
          </div>

          {/* Development Card */}
          <div className="w-full max-w-[473px] h-auto lg:h-[196px] bg-white text-black rounded-3xl shadow-md p-6 flex justify-between relative mx-auto">
            <div>
              <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-3">
                Development
              </h3>
              <ul className="text-[16px] sm:text-[18px] leading-[20px] font-semibold list-disc pl-4 space-y-1 text-left">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>
            <img
              src={setting}
              alt="development"
              className="w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 right-4"
            />
          </div>

          {/* SEO Card */}
          <div className="w-full max-w-[473px] h-auto lg:h-[196px] bg-white text-black rounded-3xl shadow-md p-6 flex justify-between relative mx-auto">
            <div>
              <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-3">
                Website SEO
              </h3>
              <ul className="text-[16px] sm:text-[18px] leading-[20px] font-semibold list-disc pl-4 space-y-1 text-left">
                <li>Integrated Custom Web Design</li>
                <li>Customized Logo Design</li>
                <li>Scalable E-commerce Solutions</li>
                <li>Seamless UI/UX</li>
              </ul>
            </div>
            <img
              src={aeroplane}
              alt="seo"
              className="w-10 h-10 sm:w-12 sm:h-12 absolute bottom-4 right-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
