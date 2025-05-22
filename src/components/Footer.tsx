import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 sm:py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs sm:text-sm">&copy; {currentYear} Data with Vaibhav. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://github.com/vaibhav29300" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://linkedin.com/in/vaibhav-shekhar-a57416208" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            {/* Add other social links if needed */}
            {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a> */}
          </div>
        </div>
        <p className="text-xs sm:text-sm mt-4 sm:mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer; 