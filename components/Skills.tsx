
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories: ('Design' | 'Development' | 'Database' | 'Soft Skills')[] = ['Design', 'Development', 'Database', 'Soft Skills'];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Core Competencies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A versatile toolkit blending creative intuition with technical precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, catIdx) => (
            <div 
              key={category} 
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-blue-100 reveal"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill, skillIdx) => (
                  <span 
                    key={skill.name}
                    className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl text-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
