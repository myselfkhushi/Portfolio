import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060b] text-white py-16 px-6 md:px-12 border-t border-cyan-500/20 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-white font-['Outfit'] tracking-tight flex items-center gap-2">
              <span>KHUSHI</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            </div>
            <p className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">
              // FULL STACK MERN DEVELOPER &bull; BUSINESS SYSTEMS ARCHITECT
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle Section: Socials, Live Status & Back-to-Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/70">
          
          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="https://github.com/myselfkhushi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-wider flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/khushi-kumari-aa646030a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-wider flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:khushikumari882484@gmail.com" 
              className="hover:text-cyan-400 transition-colors uppercase tracking-wider flex items-center gap-2"
            >
              <span>✉</span>
              <span>Email</span>
            </a>
          </div>

          {/* Right Status & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              STATUS: AVAILABLE FOR HIRE
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title="Back to top"
            >
              <span>↑ Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Khushi. All Rights Reserved.</p>
          <p className="text-cyan-400/80">STREAMING WORLDWIDE &bull; FULL-STACK MERN ARCHITECTURE</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;