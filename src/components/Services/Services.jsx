import React from 'react';
import { GiAtom, GiSatelliteCommunication } from 'react-icons/gi';
import { IoRocketOutline } from 'react-icons/io5';
import background from "../../assets/background-gif.gif";
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <div className="relative z-10 bg-black lg:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="services background"
        className="absolute inset-0 w-full h-full object-cover opacity-70 -z-10"
      />

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/90 rounded-xl text-center text-2xl py-8 px-3 text-white">
          <GiAtom className="text-[76px]" />
          <h3>HST</h3>
          <h3>300–1500km</h3>
          <p className="text-[11px]">
            Used for astronomical observations, capturing stunning images of the universe.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/90 rounded-xl text-center text-2xl py-8 px-3 text-white">
          <GiSatelliteCommunication className="text-[76px]" />
          <h3>ISS</h3>
          <h3>500–1500km</h3>
          <p className="text-[11px]">
            A habitable artificial satellite serving as a space environment research laboratory.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -0 }}
          transition={{ delay: 1 }}
          className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/90 rounded-xl text-center text-2xl py-8 px-3 text-white">
          <IoRocketOutline className="text-[76px]" />
          <h3>GPS</h3>
          <h3>300–1500km</h3>
          <p className="text-[11px]">
            Part of the Global Positioning System used for navigation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
