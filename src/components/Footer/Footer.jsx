import React from 'react';
import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa';
import { FaVoicemail } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="relative z-10 bg-[#1F2937] h-auto text-white py-12">
      <div className="max-w-7xl mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* First Column */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Be Ready To Grow</h3>
            <p className="text-gray-300 mb-4">Get exclusive updates straight to your inbox.</p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 w-2/3 text-black outline-none rounded-l-md"
              />
              <button className="bg-[#60A5FA] px-5 py-3 rounded-r-md hover:bg-blue-500 transition">
                OK
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-300">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="hover:text-white cursor-pointer">About</span>
              <span className="hover:text-white cursor-pointer">Services</span>
              <span className="hover:text-white cursor-pointer">Login</span>
            </div>
          </div>

          {/* Third Column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <span className="flex justify-center items-center gap-3">
                <FaLocationArrow /> Karachi, Pakistan
              </span>
              <span className="flex justify-center items-center gap-3">
                <FaVoicemail /> dev.hassanraza@gmail.com
              </span>
              <span className="flex justify-center items-center gap-3">
                <FaWhatsapp /> +92 318 1155946
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400">
          © 2026 Hassan Raza. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
