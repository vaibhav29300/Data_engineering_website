import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const RoadmapPage = React.lazy(() => import('./pages/RoadmapPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const ToolsPage = React.lazy(() => import('./pages/ToolsPage'));
const ProjectIdeasPage = React.lazy(() => import('./pages/ProjectIdeasPage'));
const ResumeJobTipsPage = React.lazy(() => import('./pages/ResumeJobTipsPage'));
const AboutMePage = React.lazy(() => import('./pages/AboutMePage'));

const App: React.FC = () => {
  return (
    <Router basename="/Data_engineering_website"> {/* Set basename for GitHub Pages */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Suspense 
            fallback={
              <div className='flex justify-center items-center h-screen'>
                <div className='animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-t-4 border-b-4 border-blue-500 dark:border-blue-400'></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/projects" element={<ProjectIdeasPage />} />
              <Route path="/resume-tips" element={<ResumeJobTipsPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
