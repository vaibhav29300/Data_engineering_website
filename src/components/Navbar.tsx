import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/roadmap", text: "Roadmap" },
    { to: "/resources", text: "Resources" },
    { to: "/tools", text: "Tools" },
    { to: "/projects", text: "Projects" },
    { to: "/resume-tips", text: "Resume Tips" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
            Data with Vaibhav
          </Link>
          
          {/* Desktop Menu & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                {link.text}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle (Theme toggle separate for mobile for better layout) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none mr-2">
                {theme === 'light' ? (
                  <MoonIcon className="h-6 w-6 text-gray-700" />
                ) : (
                  <SunIcon className="h-6 w-6 text-yellow-500" />
                )}
            </button>
            <button onClick={toggleMobileMenu} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="block text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 