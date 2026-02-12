
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-10 md:p-20 text-white shadow-3xl overflow-hidden relative reveal">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 leading-tight">Let's build <br /> something great.</h2>
              <p className="text-blue-100 text-xl mb-12 leading-relaxed">
                I’m always open to discussing new projects, design systems, or technical challenges.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'hansinirathnayaka98@gmail.com', href: 'mailto:hansinirathnayaka98@gmail.com' },
                  { icon: 'M13.5 19h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/hansini-rathnayaka/' },
                  { icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017', label: 'GitHub Repositories', href: 'https://github.com/Hansini-98-R' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-xl font-bold group-hover:translate-x-2 transition-transform">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl text-gray-900 min-h-[500px] flex flex-col justify-center">
               {formState === 'success' ? (
                 <div className="text-center animate-[fadeInUp_0.5s_ease-out]">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 success-check">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                    <p className="text-gray-500 text-lg mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all btn-press"
                    >
                      Send Another
                    </button>
                 </div>
               ) : (
                 <>
                   <h3 className="text-2xl font-black mb-8">Send a Direct Message</h3>
                   <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                        <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                        <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Your Message</label>
                        <textarea required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all h-32 resize-none" placeholder="Let's talk about..."></textarea>
                      </div>
                      <button 
                        disabled={formState === 'loading'}
                        className={`w-full py-5 text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 btn-press ${
                          formState === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                        }`}
                      >
                        {formState === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>
                   </form>
                 </>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
