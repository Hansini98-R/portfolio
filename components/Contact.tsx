
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-yellow-400 border-4 border-black p-10 md:p-20 relative reveal overflow-hidden">
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black opacity-5 pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap">
            Get in touch
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-block px-4 py-1.5 bg-black text-white font-black text-xs uppercase tracking-widest mb-6">
                Let's Collaborate
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.85] uppercase tracking-tighter">
                Ready to <br /> ship your <br /> next idea?
              </h2>
              <p className="text-xl text-black font-bold mb-12 max-w-md leading-relaxed">
                I’m available for freelance work, full-time opportunities, or just a coffee chat about UI/UX.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'hansinirathnayaka98@gmail.com', href: 'mailto:hansinirathnayaka98@gmail.com' },
                  { icon: 'M13.5 19h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', label: 'LinkedIn', href: 'https://www.linkedin.com/in/hansini-rathnayaka/' },
                  { icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017', label: 'GitHub', href: 'https://github.com/Hansini-98-R' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black group-hover:bg-yellow-400 group-hover:text-black transition-all group-hover:rotate-12">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-lg font-black uppercase tracking-tight group-hover:pl-2 transition-all">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_black]">
               {formState === 'success' ? (
                 <div className="text-center py-10 animate-[fadeInUp_0.5s_ease-out]">
                    <div className="w-20 h-20 bg-black text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-black success-check">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Message Sent</h3>
                    <p className="text-gray-500 font-bold mb-8">Talk soon!</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="px-8 py-3 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all"
                    >
                      Send Another
                    </button>
                 </div>
               ) : (
                 <form className="space-y-8" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Send a Message</h3>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Your Name</label>
                      <input required type="text" className="w-full px-0 py-4 bg-transparent border-b-4 border-black focus:border-yellow-400 outline-none font-bold text-lg placeholder-gray-300 transition-all" placeholder="E.g. Elon Musk" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-0 py-4 bg-transparent border-b-4 border-black focus:border-yellow-400 outline-none font-bold text-lg placeholder-gray-300 transition-all" placeholder="hello@company.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">The Project</label>
                      <textarea required className="w-full px-0 py-4 bg-transparent border-b-4 border-black focus:border-yellow-400 outline-none font-bold text-lg placeholder-gray-300 transition-all h-32 resize-none" placeholder="Tell me what you're building..."></textarea>
                    </div>
                    <button 
                      disabled={formState === 'loading'}
                      className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-4 group"
                    >
                      {formState === 'loading' ? 'Sending...' : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
