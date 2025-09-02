import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/bg1.png"; // ✅ correct path import

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-[100vw] h-[450px] opacity-100 bg-cover bg-center rounded text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-black/40 rounded-t-lg z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">Aquila</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#" className="text-orange-400">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400">Services</a></li>
          <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-orange-400">Careers</a></li>
          <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full items-center gap-2 text-sm transition"
        >
          Get in touch →
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-black/80 px-6 pb-4 rounded-b-lg md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li><a href="#" className="text-orange-400" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Careers</a></li>
            <li><a href="#" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li><a href="#" className="hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
          <a
            href="#"
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition"
            onClick={() => setIsOpen(false)}
          >
            Get in touch →
          </a>
        </div>
      )}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20 z-10">
        {/* Badge */}
        <span className="bg-white/20 text-orange-400 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
          INNOVATING EXPERIENCES, INSPIRING ENGAGEMENT
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
          Future-Focused and Impact-Driven Web Development
        </h1>

        {/* Subheading */}
        <h2 className="mt-4 text-lg md:text-2xl font-semibold text-orange-400">
          Powered by Aquila Tech Solution
        </h2>

        {/* Paragraph */}
        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
          We don’t just develop apps — we craft intuitive digital experiences.
          At Aquila Tech Solution, every app is designed to be unique,
          user-centric, and performance-driven, combining sleek interfaces
          with seamless functionality to elevate your brand’s mobile presence.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm transition"
          >
            Get in touch →
          </a>
          <a
            href="#"
            className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full text-sm transition"
          >
            Check Our Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
