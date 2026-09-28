import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 border-t border-zinc-800 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white text-sm">
            Khushi<span className="text-white">.</span>
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <p className="text-zinc-500">
            &copy; {new Date().getFullYear()} Khushi. Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/myselfkhushi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-kumari-aa646030a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khushikumari882484@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="px-3 py-1 rounded bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            ↑ Top
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
