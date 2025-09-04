import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/bg1.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between bg-black/40 z-50">
        {/* Brand */}
        <div className="text-2xl font-bold text-orange-500">Aquila</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <li><a href="#about" className="text-orange-400 hover:text-orange-500">About Us</a></li>
          <li><a href="#services" className="hover:text-orange-400">Services</a></li>
          <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
          <li><a href="#careers" className="hover:text-orange-400">Careers</a></li>
          <li><a href="#blog" className="hover:text-orange-400">Blog</a></li>
          <li><a href="#contact" className="hover:text-orange-400">Contact Us</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
        >
          Get in touch →
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-black/80 px-6 py-6 md:hidden z-40 flex flex-col items-center space-y-4 rounded-b-lg">
          <ul className="flex flex-col space-y-3 text-sm font-medium w-full text-center">
            <li><a href="#about" className="text-orange-400" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#services" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#portfolio" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#careers" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Careers</a></li>
            <li><a href="#blog" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li><a href="#contact" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
          <a
            href="#contact"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Get in touch →
          </a>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative pt-[120px] md:pt-[140px] lg:pt-[160px] flex flex-col items-center justify-center text-center px-6 py-12 z-10">
        <span className="bg-white/20 text-orange-400 px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-wide">
          INNOVATING EXPERIENCES, INSPIRING ENGAGEMENT
        </span>

        <h1 className="mt-6 font-bold leading-tight text-[clamp(1.8rem,4vw,3.5rem)] max-w-[90%] md:max-w-3xl">
          Future-Focused and Impact-Driven Web Development
        </h1>

        <h2 className="mt-4 font-semibold text-orange-400 text-[clamp(1rem,2.5vw,2rem)]">
          Powered by Aquila Tech Solution
        </h2>

        <p className="mt-4 max-w-[90%] md:max-w-2xl text-[clamp(0.85rem,1.8vw,1.125rem)] text-gray-200 leading-relaxed">
          We don’t just develop apps — we craft intuitive digital experiences.
          At Aquila Tech Solution, every app is designed to be unique,
          user-centric, and performance-driven, combining sleek interfaces
          with seamless functionality to elevate your brand’s mobile presence.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Get in touch →
          </a>
          <a
            href="#portfolio"
            className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Check Our Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
