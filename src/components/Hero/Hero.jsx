import React from 'react';
import HeroBackGroundVideo from "../../assets/background-video.mp4";
import fixedImage from "../../assets/hero-atachment.png";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div className="relative h-[700px] overflow-hidden pt-24">
      {/* Background Video */}
      <video
        className="absolute right-0 top-0 h-full w-full object-cover z-10 fixed"
        src={HeroBackGroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="relative h-full bg-black/20 z-20 flex items-center justify-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="text-5xl font-bold uppercase">Orbite The Earth</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea dolorem eius accusamus beatae.
            </motion.p>
            <motion.button 
             initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: -0 }}
  transition={{ delay: 1.7 }}
            className="bg-[#33a6cc] py-2 px-3 rounded">Learn More</motion.button>
          </div>
          <div />
        </div>

        {/* Bottom Image */}
        <img
          src={fixedImage}
          alt=""
          className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 w-full z-30 h-[50px] bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
};

export default Hero;
