
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="relative h-72">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-[2rem]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 hover:rotate-90 btn-press"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-8 left-8">
             <h2 className="text-4xl font-black text-white">{project.title}</h2>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map(tool => (
              <span key={tool} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">{tool}</span>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="reveal">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full" /> Project Overview
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">{project.overview}</p>
              </div>
              <div className="reveal">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full" /> Problem
                </h4>
                <p className="text-gray-600 leading-relaxed">{project.problem}</p>
              </div>
              <div className="reveal">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-6 bg-blue-600 rounded-full" /> Responsibilities
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="reveal">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <span className="w-1.5 h-6 bg-blue-600 rounded-full" /> The Process
                </h4>
                <ul className="space-y-4">
                  {project.process.map((step, idx) => (
                    <li key={idx} className="flex gap-4 group">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110">{idx + 1}</span>
                      <p className="text-gray-600 pt-1">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl shadow-blue-100 reveal">
                <h4 className="font-bold text-xl mb-3">Final Outcome</h4>
                <p className="text-blue-50 leading-relaxed">{project.results}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
             {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-all group">
                  <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Source Code
                </a>
             )}
             <button onClick={onClose} className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all btn-press shadow-xl">
               Close Project
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center reveal">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Selected Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep dives into user-centric digital products and technical solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              className={`group reveal bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer hover:-translate-y-4`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-white text-lg font-bold flex items-center gap-3">
                       Read Case Study
                       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                       </div>
                     </span>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 line-clamp-2 leading-relaxed">{project.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
