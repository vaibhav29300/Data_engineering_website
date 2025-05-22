import React from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/solid'; // Using a solid icon for placeholder

const AboutMePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 sm:py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
      >
        <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
          {/* Placeholder for animated image */}
          <UserCircleIcon className="h-24 w-24 sm:h-32 sm:w-32 text-blue-500 dark:text-blue-400 mb-4 sm:mb-0 sm:mr-8 flex-shrink-0" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-blue-600 dark:text-blue-400 mb-2 sm:mb-4">
              About the Creator
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center sm:text-left leading-relaxed">
              Hi, I'm Vaibhav Shekhar, a Data Engineer with 2 years of hands-on experience in building and optimizing data pipelines, analytical tools, and scalable systems. 
            </p>
          </div>
        </div>
        
        <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            My journey in data science began with a project for Uber, where I contributed to solving real-world mobility challenges through data. 
          </p>
          <p>
            Currently, I'm part of the engineering team at Syncron, focusing on developing robust software solutions that power intelligent after-sales service platforms. 
          </p>
          <p>
            This website showcases my work, learnings, and ongoing passion for data-driven innovation.
          </p>
        </div>

        {/* You can add more sections here later, like My Skills, My Philosophy, etc. */}
        
      </motion.div>
    </div>
  );
};

export default AboutMePage; 