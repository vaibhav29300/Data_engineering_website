import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ToolsPage = lazy(() => import('./pages/ToolsPage'));
const ProjectIdeasPage = lazy(() => import('./pages/ProjectIdeasPage'));
const ResumeJobTipsPage = lazy(() => import('./pages/ResumeJobTipsPage'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-xl text-gray-700 dark:text-gray-200'>Loading...</div>}>
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/projects" element={<ProjectIdeasPage />} />
              <Route path="/resume-tips" element={<ResumeJobTipsPage />} />
              {/* You can add a 404 page here */}
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
