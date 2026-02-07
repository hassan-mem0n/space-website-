import React from 'react';
import Logo from "../../assets/logo.png";
import { delay, motion } from 'framer-motion';
const Navbar = () => (
  <motion.div
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{delay:0.3}}
  className='grid grid-cols-2 lg:grid-cols-3 fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm text-white px-8 py-6'>
    {/* logo div */}
    <div className='flex items-center justify-start gap-4'>
      <img src={Logo} alt="logo" className='w-12'/>
      <h1 className='text-white text-[10px] sm:text-[20px] lg:text-3xl font-bold'>TCJ-SPACE</h1>
    </div>
    {/* pages Link div */}
    <motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{delay:0.6}} className='flex items-center justify-center gap-4 hidden lg:flex'>
      <h3 className='text-white text-2xl font-thin cursor-pointer'>About</h3>
      <h3 className='text-white text-2xl font-thin cursor-pointer'>Technology</h3>
      <h3 className='text-white text-2xl font-thin cursor-pointer'>Galaxy</h3>
      <h3 className='text-white text-2xl font-thin cursor-pointer'>Satellite</h3>
    </motion.div>
    {/* Login Button */}
    <div className='flex items-center justify-end'>
      <h3 className='border-2 hover:bg-[#33A6CC] bg-transparent border-white rounded py-2 px-4 cursor-pointer'>
        Login
      </h3>
    </div>
  </motion.div>
);

export default Navbar;
    