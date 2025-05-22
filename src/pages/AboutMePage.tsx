import React from 'react';
import { motion } from 'framer-motion';
// Removed UserCircleIcon, assuming image.jpeg will be used
// import { UserCircleIcon } from '@heroicons/react/24/solid'; 
import aboutMeImage from '../assets/image.jpeg'; // Import the image

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
          <img 
            src={aboutMeImage} 
            alt="Vaibhav Shekhar - Creator" 
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover mb-4 sm:mb-0 sm:mr-8 flex-shrink-0 shadow-lg"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-blue-600 dark:text-blue-400 mb-2 sm:mb-4">
              About the Creator
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center sm:text-left leading-relaxed">
              Hello there! I'm Vaibhav Shekhar. For the past two years, I've been diving deep into the world of data engineering, crafting and fine-tuning everything from data pipelines to analytical tools and robust, scalable systems.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            My adventure in data kicked off with an exciting project for Uber, where I got to tackle real-world mobility puzzles using data.
          </p>
          <p>
            These days, you'll find me at Syncron, as part of the engineering crew. We're focused on building solid software solutions that drive intelligent after-sales service platforms. 
          </p>
          <p>
            This little corner of the web is where I share my projects, what I'm learning, and my general enthusiasm for all things data-driven. Hope you find something interesting!
          </p>
        </div>

        {/* You can add more sections here later, like My Skills, My Philosophy, etc. */}
        
      </motion.div>
    </div>
  );
};

export default AboutMePage; 