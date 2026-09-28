import React, { useState } from 'react';

const projectsList = [
  {
    title: "Kumar Music E-Commerce",
    category: "Full-Stack MERN Platform",
    shortDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering, and real-time inventory management.",
    fullDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering, real-time inventory management, admin dashboard for order processing, and comprehensive sales analytics.",
    tags: ["React.js", "Node.js", "MongoDB", "E-Commerce", "REST API"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "music"
  },
  {
    title: "Enterprise Multi-Tenant CRM",
    category: "Business Automation Platform",
    shortDesc: "Custom enterprise CRM featuring role-based access control, pipeline stage tracking, client document management, and real-time telemetry.",
    fullDesc: "Custom enterprise CRM featuring role-based access control, pipeline stage tracking, client document management, real-time telemetry, automated email notifications, and detailed conversion reporting for multi-agent teams.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "crm"
  },
  {
    title: "B2B SaaS Business Engine",
    category: "Cloud & Distributed Systems",
    shortDesc: "Containerized multi-tenant SaaS application with strict database isolation, tenant telemetry, automated billing, and microservices architecture.",
    fullDesc: "Containerized multi-tenant SaaS application with strict database isolation, tenant telemetry, automated billing, and microservices architecture deployed with Docker containers on AWS infrastructure.",
    tags: ["Docker", "PostgreSQL", "Node.js", "AWS", "REST API"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "saas"
  },
  {
    title: "Real-Time Operations & Task Hub",
    category: "Startup Operations MVP",
    shortDesc: "Reactive live monitoring dashboard built with responsive React interfaces, Redux state management, webhook notifications, and automated reporting.",
    fullDesc: "Reactive live monitoring dashboard built with responsive React interfaces, Redux state management, webhook notifications, and automated reporting designed for agile development squads.",
    tags: ["React.js", "Redux", "Express.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "tasks"
  },
  {
    title: "Payment Gateway Microservice",
    category: "Fintech & API Architecture",
    shortDesc: "Secure transaction processing microservice with idempotent webhooks, ledger transaction logging, and automated invoice PDF generation.",
    fullDesc: "Secure transaction processing microservice with idempotent webhooks, ledger transaction logging, rate-limited public APIs, and automated invoice PDF generation with 99.9% uptime reliability.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "REST API"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "fintech"
  },
  {
    title: "Portfolio Cinematics",
    category: "Interactive Web Experience",
    shortDesc: "Interactive portfolio engineered with React, GSAP physics, ocean blue gradients, custom precision cursor, and responsive bento layouts.",
    fullDesc: "Interactive portfolio engineered with React, GSAP physics, ocean blue gradients, custom precision cursor, responsive bento layouts, and smooth spring physics.",
    tags: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://github.com/myselfkhushi",
    githubUrl: "https://github.com/myselfkhushi",
    bannerType: "portfolio"
  }
];

// Visual Banner Renderer inspired by Image 4
const ProjectBanner = ({ type, title }) => {
  if (type === "music") {
    return (
      <div className="relative w-full h-[220px] bg-gradient-to-br from-[#120a2e] via-[#1a1238] to-[#070b14] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
        {/* Ambient Stage Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-4 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Mini Nav */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/70">
          <span className="font-black text-white flex items-center gap-1.5 tracking-wider">
            <span className="text-purple-400">✦</span> Kumar Visuals
          </span>
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-white/50">
            <span>HOME</span>
            <span>SHOP</span>
            <span>MEMBERSHIP</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-purple-600/30 border border-purple-500/40 text-purple-300 text-[9px] uppercase font-bold">
            NEW
          </span>
        </div>

        {/* Center Title Display */}
        <div className="relative z-10 my-auto text-center space-y-1">
          <h2 
            className="text-3xl sm:text-4xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-400 drop-shadow-[0_4px_16px_rgba(99,102,241,0.6)]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Kumar Visuals
          </h2>
          <p className="text-[10px] text-white/60 tracking-wider">
            PREMIUM AUDIO HUB &bull; MERN PLATFORM
          </p>
        </div>

        {/* Bottom Stats Pills */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white/80"><strong className="text-purple-300">100+</strong> Releases</span>
            <span className="text-white/80"><strong className="text-blue-300">1K+</strong> Listeners</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[9px] font-bold">
            Live Store
          </span>
        </div>
      </div>
    );
  }

  if (type === "crm") {
    return (
      <div className="relative w-full h-[220px] bg-gradient-to-br from-[#071626] via-[#0b1d30] to-[#04080e] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
        <div className="absolute top-0 right-10 w-60 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
          <span className="font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> Enterprise CRM
          </span>
          <span className="text-white/50 text-[10px]">99.9% Uptime</span>
        </div>

        {/* Dashboard Mock Grid */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-cyan-500/20">
            <span className="text-[9px] text-white/50 font-mono block">Leads</span>
            <span className="text-lg font-black text-cyan-300">1,248</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-cyan-500/20">
            <span className="text-[9px] text-white/50 font-mono block">Conversion</span>
            <span className="text-lg font-black text-white">+28.4%</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-cyan-500/20">
            <span className="text-[9px] text-white/50 font-mono block">Pipeline</span>
            <span className="text-lg font-black text-blue-400">$340K</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
          <span>PIPELINE TELEMETRY</span>
          <span className="text-cyan-400">ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === "saas") {
    return (
      <div className="relative w-full h-[220px] bg-gradient-to-br from-[#0a192f] via-[#0d1f38] to-[#050b14] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
        <div className="absolute bottom-0 left-10 w-60 h-32 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-blue-400">
          <span className="font-bold">B2B SaaS Multi-Tenant</span>
          <span className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-[9px] text-blue-300">AWS + Docker</span>
        </div>

        <div className="relative z-10 my-auto space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/70 font-mono text-[11px]">Database Isolation</span>
            <span className="text-cyan-400 font-mono text-[10px] font-bold">100% Secure</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="w-4/5 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-white/50 font-mono">
            <span>Cluster: us-east-1</span>
            <span>Microservices: 8/8 healthy</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
          <span>TENANT TELEMETRY</span>
          <span className="text-blue-400">ISOLATED</span>
        </div>
      </div>
    );
  }

  if (type === "tasks") {
    return (
      <div className="relative w-full h-[220px] bg-gradient-to-br from-[#0c1824] via-[#102234] to-[#060c14] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-300">
          <span className="font-bold">Operations Hub</span>
          <span className="text-white/50 text-[10px]">Real-Time Sync</span>
        </div>

        <div className="relative z-10 my-auto flex gap-2">
          <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/10 space-y-1">
            <span className="text-[9px] font-mono text-cyan-400">IN PROGRESS</span>
            <p className="text-[11px] font-bold text-white">Order Pipeline</p>
          </div>
          <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/10 space-y-1">
            <span className="text-[9px] font-mono text-blue-400">REVIEW</span>
            <p className="text-[11px] font-bold text-white">Inventory Sync</p>
          </div>
          <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/10 space-y-1">
            <span className="text-[9px] font-mono text-emerald-400">DEPLOYED</span>
            <p className="text-[11px] font-bold text-white">Auth V2</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
          <span>SPRINT OPERATIONS</span>
          <span className="text-emerald-400">CONNECTED</span>
        </div>
      </div>
    );
  }

  if (type === "fintech") {
    return (
      <div className="relative w-full h-[220px] bg-gradient-to-br from-[#091522] via-[#0d2035] to-[#050b12] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
          <span className="font-bold">Fintech Microservice</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px]">Idempotent API</span>
        </div>

        <div className="relative z-10 my-auto p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono text-white/50 block">TX ID: #9834-MERN</span>
            <span className="text-lg font-black text-white">$12,480.00</span>
          </div>
          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            Settled ✓
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
          <span>WEBHOOK RECONCILIATION</span>
          <span className="text-emerald-400">200 OK</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[220px] bg-gradient-to-br from-[#06121f] via-[#0b1f33] to-[#040910] overflow-hidden flex flex-col justify-between p-5 border-b border-white/10 select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
        <span className="font-bold">Portfolio Experience</span>
        <span className="text-white/50 text-[10px]">React + GSAP</span>
      </div>

      <div className="relative z-10 my-auto text-center space-y-1">
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
          Khushi Portfolio
        </h3>
        <p className="text-[11px] text-white/60 font-mono">Engineered with Precision & Physics</p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
        <span>INTERACTIVE UI</span>
        <span className="text-cyan-400">STREAMING</span>
      </div>
    </div>
  );
};

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="bg-[#06080d] min-h-screen relative text-white w-full py-28 px-6 md:px-12 select-none border-t border-cyan-500/20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-cyan-500/40 text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-cyan-400 font-bold">PORTFOLIO BUILDS</span>
              <span className="text-white/40">|</span>
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              FEATURED PROJECTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-[0_0_25px_rgba(14,165,233,0.35)]">
                BUSINESS SYSTEMS & SAAS.
              </span>
            </h2>
          </div>
          <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Production-grade full-stack MERN platforms, enterprise CRMs, and rapid startup MVPs.
          </p>
        </div>

        {/* Clean Responsive Project Cards Grid - Styled like Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => {
            const isExpanded = !!expandedCards[idx];

            return (
              <div
                key={idx}
                className="bg-[#0e121a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_20px_45px_rgba(14,165,233,0.18)] transition-all duration-300 group"
              >
                {/* Top Mockup Banner - Exactly like Image 4 */}
                <ProjectBanner type={project.bannerType} title={project.title} />

                {/* Card Body */}
                <div className="p-7 flex flex-col justify-between flex-grow">
                  
                  <div>
                    {/* Category Tag */}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mt-3">
                      {isExpanded ? project.fullDesc : project.shortDesc}
                    </p>

                    {/* Read More Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-mono font-medium mt-2 focus:outline-none cursor-pointer inline-block"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>

                    {/* Tech Badges / Pills */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-[#18202d] border border-white/10 text-xs font-mono text-white/80 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Divider & Action Button */}
                  <div className="mt-7 pt-5 border-t border-white/10 space-y-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-md group-hover:scale-[1.01]"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;