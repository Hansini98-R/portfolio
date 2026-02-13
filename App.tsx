
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { useScrollReveal } from './hooks/useScrollReveal';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useScrollReveal();

  const handleNavigateToProject = (id: string) => {
    const transitionOverlay = document.getElementById('page-transition');
    transitionOverlay?.classList.add('active');
    
    setTimeout(() => {
      setSelectedProjectId(id);
      setCurrentView('project');
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        transitionOverlay?.classList.remove('active');
      }, 400);
    }, 600);
  };

  const handleNavigateHome = () => {
    const transitionOverlay = document.getElementById('page-transition');
    transitionOverlay?.classList.add('active');
    
    setTimeout(() => {
      setCurrentView('home');
      setSelectedProjectId(null);
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        transitionOverlay?.classList.remove('active');
      }, 400);
    }, 600);
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen selection:bg-yellow-300 selection:text-black">
      <Navbar onHomeClick={handleNavigateHome} view={currentView} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onExploreClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
            <About />
            <Projects onProjectClick={handleNavigateToProject} />
            <Skills />
            <Experience />
            <Contact />
          </>
        ) : (
          <ProjectDetail project={selectedProject!} onBack={handleNavigateHome} />
        )}
      </main>
      
      <footer className="py-20 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-8">HANSINI.</h2>
          <div className="flex justify-center gap-8 mb-10 text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs font-bold">GitHub</a>
            <a href="#" className="hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs font-bold">Behance</a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Hansini Rathnayaka. Built for impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
