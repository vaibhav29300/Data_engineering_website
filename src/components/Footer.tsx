import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-8 mt-auto">
      <p className="text-gray-600 dark:text-gray-400">
        © 2025 VS | Built with <span role="img" aria-label="love">♥</span> using React & Tailwind
      </p>
      <div className="mt-2">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-2">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-2">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer; 