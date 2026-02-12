
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-600 rounded-full" />
              About Me
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              I’m a UI/UX Engineer with a background in ICT and a passion for designing intuitive digital experiences. 
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              I specialize in bridging the gap between technical complexity and user simplicity. My background at Botcalm and AIESEC has trained me to handle high-stakes environments while keeping the end-user as the central focus of every design decision.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-gray-50 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 transition-transform group-hover:rotate-6">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">B.ICT (Hons)</h4>
                <p className="text-sm text-gray-400">University of Ruhuna, 2025</p>
              </div>
              <div className="group p-6 bg-gray-50 rounded-[2rem] border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 transition-transform group-hover:-rotate-6">
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Certified Specialist</h4>
                <p className="text-sm text-gray-400">Java & Professional English</p>
              </div>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10 -z-10 group-hover:rotate-6 transition-transform"></div>
            <div className="bg-gray-900 p-10 md:p-14 rounded-[3rem] text-white shadow-3xl">
              <h3 className="text-2xl font-black mb-10 text-center tracking-tight">Design & Tech Thinking</h3>
              <div className="space-y-10">
                {[
                  { id: '01', title: 'User Psychology', desc: 'Predicting needs before the first click.' },
                  { id: '02', title: 'Aesthetic Function', desc: 'Beauty is usability.' },
                  { id: '03', title: 'Continuous Loop', desc: 'Always ship, always learn, always iterate.' }
                ].map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="text-blue-500 font-black text-3xl opacity-50 group-hover:opacity-100 transition-opacity">{item.id}</div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                  <a href="#" className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all btn-press">
                      Get My CV (PDF)
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
