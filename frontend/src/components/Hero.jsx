import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div 
      className="relative bg-white pt-16 min-h-screen"
      style={{
        backgroundImage: 'url("https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg")', // Add your image to public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        

      }}
    >
      {/* Add an overlay to make text more readable */}
      {/* <div className="absolute inset-0 backdrop-blur-[5px]"></div> */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className='flex justify-center items-center flex-col'>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-3xl lg:text-8xl font-extrabold'
            >
              Welcome to
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-3xl lg:text-8xl font-extrabold bg-yellow-500 p-3 rounded-lg'
            >
              ISHA ARCHITECTS
            </motion.span>
          </div>
          {/* <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            At Isha Architects, we provide innovative, sustainable, and client-focused architectural solutions that bring your vision to life.
            From residential and commercial spaces to interior design and urban planning, our team combines creativity with functionality to craft spaces that inspire. With a commitment to quality, detail, and timeless design, we turn ideas into iconic structures.
          </motion.p> */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className='flex flex-col lg:flex-row gap-10 md:gap-4'>
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10">
                Contact Us
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;