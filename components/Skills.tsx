
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories: ('Design' | 'Development' | 'Database' | 'Soft Skills')[] = ['Design', 'Development', 'Database', 'Soft Skills'];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 reveal">
          <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">Skills & <br /> Stack.</h2>
          <p className="text-xl text-gray-500 max-w-sm font-medium mt-4">
            My technical toolkit is ever-evolving, focused on modern workflows and high-performance output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => (
            <div 
              key={category} 
              className="reveal p-8 border-4 border-black bg-white hover:bg-yellow-400 transition-colors duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-black rounded-lg mb-8 flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                {category[0]}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 border-2 border-black font-bold text-xs uppercase tracking-widest bg-white group-hover:bg-black group-hover:text-white transition-all"
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
