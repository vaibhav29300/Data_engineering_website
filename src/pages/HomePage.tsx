import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Your Data Engineering Companion</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">Everything you need to become a skilled Data Engineer.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/roadmap" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-base sm:text-lg"
            >
              Explore the roadmap
            </motion.button>
          </Link>
          <Link to="/roadmap" className="w-full sm:w-auto"> {/* Pointing to roadmap as a general starting point */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-base sm:text-lg"
            >
              Start learning
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl max-w-2xl text-center mb-10 sm:mb-12 w-full"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Who is a Data Engineer?</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          A Data Engineer is a professional responsible for preparing and managing an organization's data infrastructure. 
          They design, build, and maintain scalable data pipelines that collect, process, and store data from various sources. 
          Data Engineers ensure that data is clean, reliable, and accessible for analysis by data scientists, analysts, and other stakeholders. 
          They work with a variety of tools and technologies, including databases, ETL tools, big data platforms, and cloud services.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-full max-w-4xl px-2"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 sm:mb-6">Quick Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {[ "Roadmap", "Resources", "Tools", "Projects", "Resume Tips" ].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`}>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg text-center cursor-pointer h-full flex items-center justify-center"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">{item}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage; 