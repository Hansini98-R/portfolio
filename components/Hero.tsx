
import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 relative bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center pt-20">
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-block px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">
            Portfolio 2025
          </div>
          <h1 className="text-7xl md:text-8xl xl:text-[120px] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
            Creative <br />
            <span className="text-yellow-400 bg-black px-4 inline-block">UI/UX</span> <br />
            Engineer
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mb-12 font-medium leading-relaxed">
            I turn complex digital problems into intuitive, high-impact user experiences that actually work.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onExploreClick}
              className="btn-bold group"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="#about" className="px-8 py-4 border-2 border-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-black hover:text-white transition-all">
              About Me
            </a>
          </div>
        </div>

        <div className="relative animate-[fadeInUp_1.2s_ease-out]">
          <div className="absolute -inset-4 bg-black rotate-3 -z-10" />
          <div className="bg-white border-4 border-black p-4">
            <img 
              src="https://picsum.photos/seed/portfolio-hero/800/1000" 
              alt="Hansini Rathnayaka" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center p-8 animate-bounce">
            <span className="text-center font-black text-sm uppercase leading-tight">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
