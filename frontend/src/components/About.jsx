import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBuilding, FaHome, FaTools, FaCertificate } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      title: "Interior Design",
      description: "Transform your spaces with our innovative interior design solutions. We create functional, aesthetic, and sustainable environments that reflect your vision.",
      icon: <FaHome className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Construction",
      description: "End-to-end construction services with a focus on quality, safety, and timely delivery. From residential to commercial projects, we build with precision.",
      icon: <FaBuilding className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Raw Materials",
      description: "Premium quality construction materials sourced from trusted suppliers. We ensure the best materials for durability and sustainability.",
      icon: <FaTools className="w-8 h-8 text-yellow-500" />
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "LEED Certified Professionals",
    "Green Building Council Member",
    "Safety First Certified",
    "Sustainable Architecture Certified",
    "HUDA PUDA Certified",
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col ">
            <span className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            About ISHA ARCHITECTS
            </span>
            {/* <div className='flex items-center justify-center'>
            <div className='bg-yellow-500 w-[60%] rounded-lg '>
                <br className=''/>
            </div>
            </div> */}
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            With over a decade of excellence in architecture and construction, we've been transforming spaces and creating landmarks that stand the test of time.
          </p>
            
          </div>
         
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-yellow-50 p-8 rounded-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <FaCertificate className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 ml-2">Our Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <FaCheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;