import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Assuming you'll use Heroicons

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Data with Vaibhav
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link to="/roadmap" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Roadmap</Link>
          <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Resources</Link>
          <Link to="/tools" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Tools</Link>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
          <Link to="/resume-tips" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Resume Tips</Link>
          <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 