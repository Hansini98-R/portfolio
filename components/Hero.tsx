
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full animate-[fadeInUp_0.6s_ease-out]">
          Available for New Opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out]">
          Designing <span className="text-blue-600 relative inline-block">
            Human-Centered
            <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-10 rounded-lg"></span>
          </span> <br /> Digital Experiences
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-[fadeInUp_1s_ease-out] leading-relaxed">
          I'm a UI/UX Engineer bridging the gap between aesthetics and functionality, turning complex problems into intuitive solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-[fadeInUp_1.2s_ease-out]">
          <a
            href="#projects"
            className="btn-press px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/50 hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-press px-8 py-4 bg-white text-blue-600 font-bold border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
        
        <div className="mt-20 relative flex justify-center animate-[fadeInUp_1.4s_ease-out]">
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 transition-transform duration-700 hover:rotate-3">
                <img 
                    src="https://picsum.photos/seed/hansini/400/400" 
                    alt="Hansini Rathnayaka" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            {/* Decor elements */}
            <div className="absolute top-1/2 left-[20%] w-16 h-16 bg-blue-600 rounded-2xl rotate-12 opacity-20 animate-pulse hidden md:block"></div>
            <div className="absolute top-0 right-[20%] w-12 h-12 bg-indigo-600 rounded-full opacity-10 animate-bounce hidden md:block"></div>
            <div className="absolute bottom-0 left-[35%] w-8 h-8 bg-blue-400 rounded-lg rotate-45 opacity-20 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
