import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#intro', id: 'intro' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['intro', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-xl">
      {/* Floating Capsule Container */}
      <div 
        className={`w-full rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 flex items-center justify-between border ${
          scrolled 
            ? 'bg-[#090d16]/90 backdrop-blur-2xl border-slate-700/80 shadow-[0_12px_36px_rgba(0,0,0,0.6)]' 
            : 'bg-[#0a0f1d]/75 backdrop-blur-xl border-slate-800/80 shadow-[0_8px_28px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Brand Monogram / Name */}
        <a 
          href="#intro" 
          className="text-sm font-bold tracking-tight text-white hover:text-cyan-400 transition-colors pl-1 flex items-center gap-1 group"
        >
          <span>Khushi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all active:scale-95 shadow-md shadow-cyan-500/20"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60"
            aria-label="Toggle navigation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Capsule Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-3 rounded-2xl bg-[#090d16]/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-cyan-300 bg-cyan-950/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
