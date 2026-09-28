import React from 'react';
import profileImg from '../assets/Portfolio/khushi.jpg';

const Intro = () => {
  return (
    <section id="intro" className="relative w-full min-h-screen bg-[#080c14] text-slate-100 flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Bio & CTAs */}
        <div className="md:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-medium text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for full-time roles & projects</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Khushi</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-300">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Authentic, human bio */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            I build responsive, high-performance web applications with clean code and modern architectures. Focused on turning complex business requirements into intuitive, reliable products using React.js, Node.js, Express, and MongoDB.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full max-w-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect:</span>
            
            <a
              href="https://github.com/myselfkhushi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-kumari-aa646030a/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:khushikumari882484@gmail.com"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Right Column: Professional Developer Profile Card */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm rounded-2xl bg-[#0c121e] border border-slate-700/80 shadow-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group">
            
            {/* Window Chrome Header Bar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">khushi.dev</span>
              <span className="text-[10px] text-cyan-400 font-mono">MERN</span>
            </div>

            {/* Profile Image */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
              <img
                src={profileImg}
                alt="Khushi - Full Stack MERN Developer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Card Info Footer */}
            <div className="p-4 bg-[#0c121e] border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">Khushi</h3>
                  <p className="text-xs text-cyan-400 font-medium">Full Stack MERN Developer</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  Active
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50">React</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50">Node.js</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50">MongoDB</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50">Tailwind</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
