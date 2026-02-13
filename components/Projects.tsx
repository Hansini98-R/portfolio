
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div>
            <div className="w-20 h-2 bg-yellow-400 mb-4" />
            <h2 className="text-6xl font-black uppercase tracking-tighter">Work.</h2>
          </div>
          <p className="text-xl text-gray-500 max-w-md font-medium">
            A curated selection of digital products, design research, and technical implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="card-bold bg-white overflow-hidden relative aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="w-24 h-24 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all duration-500 scale-0 group-hover:scale-100">
                      <span className="font-black text-xs uppercase text-center leading-tight">View Case Study</span>
                   </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 border-2 border-yellow-400">
                    {project.category.split(' / ')[0]}
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 mt-4">
                   {project.tools.slice(0, 3).map(tool => (
                     <span key={tool} className="text-xs font-bold text-gray-400 uppercase tracking-widest">{tool}</span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
