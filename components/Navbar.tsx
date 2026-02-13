
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  view: 'home' | 'project';
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, view }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white border-b-2 border-black py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={onHomeClick}
            className="text-2xl font-black tracking-tighter group flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-yellow-400 border-2 border-black group-hover:rotate-45 transition-transform" />
            HANSINI.
          </button>

          {view === 'home' && (
            <div className="hidden md:flex gap-10">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-bold text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {view === 'project' && (
            <button 
              onClick={onHomeClick}
              className="hidden md:flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:text-yellow-500"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          )}

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-yellow-400 border-b-4 border-black overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="p-10 flex flex-col gap-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black uppercase tracking-tighter hover:pl-4 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
