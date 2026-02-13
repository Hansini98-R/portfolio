
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="inline-block px-4 py-1.5 bg-black text-white font-black text-xs uppercase tracking-widest mb-4">
            Career Path
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter">Experience.</h2>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="reveal relative pl-12 border-l-4 border-black group">
              {/* Timeline Marker */}
              <div className="absolute w-10 h-10 bg-yellow-400 border-4 border-black rounded-lg -left-[22px] top-0 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center font-black">
                {idx + 1}
              </div>
              
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-gray-900 group-hover:text-yellow-500 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-bold text-black opacity-60">
                    {exp.company}
                  </p>
                </div>
                <div className="px-4 py-1 bg-black text-white text-xs font-black uppercase tracking-widest self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>
              
              <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_black] group-hover:shadow-[8px_8px_0px_black] transition-all">
                <ul className="space-y-4 text-gray-700 leading-relaxed font-medium">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-2 h-2 bg-yellow-400 border-2 border-black mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
