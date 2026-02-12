
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  // Activate global scroll reveal observer
  useScrollReveal();

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-16 text-center text-gray-400 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-bold text-gray-900 mb-2">
            HANSINI RATHNAYAKA
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Designed & Coded with care.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Behance</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
