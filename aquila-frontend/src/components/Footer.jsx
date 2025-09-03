import React from "react";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twiter.png";
import facebook from "../assets/facebook.png";
import msg from "../assets/msg.png";
import phone from "../assets/Phone.png";
import location from "../assets/location.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#172933] text-white px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About + Socials */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-[36px] font-urbanist font-semibold leading-none">
            Aquila
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          </p>
          <div className="flex space-x-4">
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10 rounded-lg bg-white p-2 hover:scale-110 transition" />
            <img src={insta} alt="Instagram" className="w-10 h-10 rounded-lg bg-white p-2 hover:scale-110 transition" />
            <img src={facebook} alt="Facebook" className="w-10 h-10 rounded-lg bg-white p-2 hover:scale-110 transition" />
            <img src={twitter} alt="Twitter" className="w-10 h-10 rounded-lg bg-white p-2 hover:scale-110 transition" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 relative inline-block">
            Services
            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-[#E67E5F]"></span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-semibold text-lg mb-4 relative inline-block">
            Location
            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-[#E67E5F]"></span>
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center space-x-3">
              <img src={msg} alt="Email" className="w-5 h-5" />
              <span>Email: Aquila@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <img src={phone} alt="Phone" className="w-5 h-5" />
              <span>Phone: 12345678901</span>
            </li>
            <li className="flex items-start space-x-3">
              <img src={location} alt="Location" className="w-5 h-5 mt-1" />
              <span>
                Aquila Tech Solutions Pvt Ltd  
                B3 -226-227, SPAZE iTech Park, sec 49, Gurugram - 122018
              </span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4 relative inline-block">
            Subscribe Us
            <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-[#E67E5F]"></span>
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Stay updated with the latest listings and rental tips.
          </p>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-[#E67E5F] bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#E67E5F] hover:bg-[#d66b4c] text-white font-medium py-2 px-6 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#313B41] text-center text-gray-300 text-sm py-4">
        Copyright © 2025 Aquila Tech Solutions | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
