import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400">
              Your company description goes here. Make it compelling and informative.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Street Name</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@yourcompany.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
