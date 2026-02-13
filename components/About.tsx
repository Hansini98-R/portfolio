
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 border-4 border-black -rotate-2 -z-10" />
            <div className="bg-yellow-400 border-4 border-black p-4">
               <img 
                src="https://picsum.photos/seed/about-img/800/800" 
                alt="Working" 
                className="w-full grayscale border-2 border-black"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 border-4 border-yellow-400 rounded-3xl hidden lg:block max-w-[200px]">
               <p className="font-black text-xs uppercase leading-relaxed">ICT Graduate + UI/UX Design Specialist</p>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              Hello, I'm <br /> <span className="text-yellow-500">Hansini.</span>
            </h2>
            <p className="text-2xl font-bold text-black mb-8 leading-snug">
              I’m a UI/UX Engineer with a background in ICT and a passion for designing intuitive digital experiences. 
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              I specialize in bridging the gap between technical complexity and user simplicity. I believe design is a problem-solving tool, and my ICT background allows me to build things that aren't just pretty, but functional and scalable.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Education', val: 'B.ICT (Hons), University of Ruhuna' },
                { title: 'Current Role', val: 'Associate UI/UX Engineer at Botcalm' },
                { title: 'Global Impact', val: 'Ex-Marketing Coordinator at AIESEC in Georgia' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-6 border-2 border-black rounded-2xl hover:bg-gray-50 transition-all">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center font-black">
                    0{i+1}
                  </div>
                  <div>
                    <h5 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-1">{item.title}</h5>
                    <p className="font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
