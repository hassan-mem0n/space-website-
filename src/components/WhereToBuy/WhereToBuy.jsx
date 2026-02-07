import React from 'react';
import Rapidcast from "../../assets/Rapidcast.jpg";
import Window from "../../assets/Window.jpg";
import { motion } from 'framer-motion';
const WhereToBuy = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-black relative z-10 px-4 py-10 gap-4'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}>
        <img src={Rapidcast} className='mx-auto my-4 rounded w-full md:w-[520px]' alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className='border-t-4 border-r-4 md:border-r-4 px-5 border-[#075985] text-white'>
        <p className='text-[#07537C] my-7'>Our Mission</p>
        <h3 className='text-[40px] md:text-[70px] my-7'>Rapidcast</h3>
        <p className='text-[13px] md:text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati odio ex nihil eaque voluptates, animi, iure ad enim, in porro totam incidunt consequuntur eveniet! </p>
        <p className='bg-[#60A5FA] w-fit px-2 py-3 my-5 rounded cursor-pointer'>Learn More</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className='border-l-4 border-b-4 px-5 border-[#075985] text-white'>
        <p className='text-[#07537C] my-7'>Our Mission</p>
        <h3 className='text-[40px] md:text-[70px] my-7'>Window</h3>
        <p className='text-[13px] md:text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati odio ex nihil eaque voluptates, animi, iure ad enim, in porro totam incidunt consequuntur eveniet!</p>
        <p className='bg-[#60A5FA] w-fit px-2 py-3 my-5 rounded cursor-pointer'>Learn More</p>
      </motion.div>
      <motion.div
         initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <img src={Window} className='mx-auto my-4 rounded w-full md:w-[520px]' alt="" />
    </motion.div>
    </div >
  );
};

export default WhereToBuy;
