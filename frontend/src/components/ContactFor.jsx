import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
             
              
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              

          
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              
            </div>

          
           
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            

           
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
           

          
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
        

           
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Send Message
              </button>
           
          </form>
       
      </div>
    </div>
  );
};

export default ContactForm;