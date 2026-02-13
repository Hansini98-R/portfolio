
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <header className="mb-20">
          <button 
            onClick={onBack}
            className="mb-12 flex items-center gap-3 font-black uppercase text-xs tracking-widest hover:text-yellow-500 transition-colors group"
          >
            <div className="p-2 border-2 border-black group-hover:bg-black group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Back to overview
          </button>
          
          <div className="inline-block px-4 py-1.5 bg-yellow-400 border-2 border-black font-black text-xs uppercase tracking-widest mb-6">
            Case Study / {project.category}
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-4 gap-8 py-10 border-y-2 border-black mb-20">
            <div>
              <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">My Role</h5>
              <p className="font-bold">{project.responsibilities[0]}</p>
            </div>
            <div>
              <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Industry</h5>
              <p className="font-bold">{project.category.split('/')[0]}</p>
            </div>
            <div>
              <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Duration</h5>
              <p className="font-bold">4 Months</p>
            </div>
            <div>
              <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Tech Stack</h5>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-black bg-gray-100 px-2 py-0.5 border border-black">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="space-y-32">
          {/* Big Image */}
          <div className="reveal border-4 border-black p-4 bg-white">
            <img src={project.image} alt={project.title} className="w-full object-cover" />
          </div>

          {/* Overview & Problem */}
          <section className="grid md:grid-cols-2 gap-20">
            <div className="reveal">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Project Overview</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{project.overview}</p>
            </div>
            <div className="reveal">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">The Challenge</h3>
              <div className="p-8 bg-black text-white rounded-xl">
                 <p className="text-xl italic">"{project.problem}"</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="reveal">
             <div className="bg-yellow-400 border-4 border-black p-10 md:p-20">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">The Process</h3>
                <div className="grid md:grid-cols-2 gap-10">
                   {project.process.map((step, idx) => (
                     <div key={idx} className="flex gap-6 items-start">
                        <span className="text-6xl font-black opacity-30 leading-none">{idx + 1}</span>
                        <p className="text-lg font-bold text-black pt-2">{step}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Final Results */}
          <section className="reveal text-center max-w-3xl mx-auto">
             <h3 className="text-5xl font-black uppercase tracking-tighter mb-10">Results & Impact</h3>
             <div className="bg-white border-4 border-black p-12 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-black" />
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-black" />
                <p className="text-3xl font-black leading-tight text-yellow-500 uppercase">
                  {project.results}
                </p>
             </div>
          </section>

          {/* Contact CTA */}
          <section className="reveal py-20 border-t-2 border-black flex flex-col items-center">
             <h4 className="text-2xl font-black uppercase mb-8">Loved this case study?</h4>
             <button 
              onClick={onBack}
              className="btn-bold"
             >
               See more projects
             </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
