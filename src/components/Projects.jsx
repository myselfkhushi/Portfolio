import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Kumar Music E-Commerce",
    category: "Full-Stack MERN Platform",
    shortDesc: "A complete full-stack e-commerce web platform for music merchandise, instruments, and audio gear. Features user authentication, dynamic product catalog, cart management, and order checkout.",
    fullDesc: "A complete full-stack e-commerce web platform for music merchandise, instruments, and audio gear. Features user authentication, dynamic product catalog with search and price filtering, responsive shopping cart drawer, mock payment checkout, and an admin dashboard to manage product inventory.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/myselfkhushi",
    liveUrl: "https://github.com/myselfkhushi",
    bannerType: "kumar",
  },
  {
    id: 2,
    title: "StreamFlix Cinema",
    category: "Frontend Web Application",
    shortDesc: "A responsive movie browsing and trailer discovery application integrated with TMDB API. Includes trending feeds, genre filters, and modal video previews.",
    fullDesc: "A responsive movie browsing and trailer discovery application integrated with TMDB API. Includes trending feeds, genre filters, responsive hero banners, movie trailer previews, and watchlists.",
    tags: ["React.js", "Tailwind CSS", "TMDB API", "Axios"],
    githubUrl: "https://github.com/myselfkhushi",
    liveUrl: "https://github.com/myselfkhushi",
    bannerType: "streamflix",
  },
  {
    id: 3,
    title: "DevDesk Project Tracker",
    category: "Full-Stack Workflow Tool",
    shortDesc: "A streamlined task and project tracking board. Supports multi-column Kanban workflows, priority tags, deadline reminders, and responsive dashboards.",
    fullDesc: "A streamlined task and project tracking board built with the MERN stack. Supports multi-column Kanban workflows, priority tags, status updates, deadline reminders, and clean RESTful API integration for smooth state persistence.",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/myselfkhushi",
    liveUrl: "https://github.com/myselfkhushi",
    bannerType: "devdesk",
  },
  {
    id: 4,
    title: "FinTrack Expense Manager",
    category: "Dashboard & Analytics",
    shortDesc: "A personal finance and expense tracking tool with visual category breakdowns, monthly spending graphs, and transaction export.",
    fullDesc: "A personal finance and expense tracking tool featuring visual category breakdowns, monthly spending graphs, budget progress bars, and CSV export. Built with responsive React components and interactive charts.",
    tags: ["React.js", "Tailwind CSS", "Chart.js", "REST APIs"],
    githubUrl: "https://github.com/myselfkhushi",
    liveUrl: "https://github.com/myselfkhushi",
    bannerType: "fintrack",
  }
];

const ProjectBanner = ({ type }) => {
  if (type === "kumar") {
    return (
      <div className="relative w-full h-44 bg-gradient-to-tr from-[#120f2e] via-[#1a1444] to-[#0d1527] p-5 flex flex-col justify-between border-b border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-white flex items-center gap-1.5">
            <span className="text-purple-400">✦</span> Kumar Visuals
          </span>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-medium border border-purple-500/30">
            E-Commerce
          </span>
        </div>
        <div className="my-auto text-center">
          <p className="text-2xl font-bold tracking-tight text-white">Kumar Music Store</p>
          <p className="text-xs text-slate-400 mt-1">Full-Stack MERN Audio Gear Platform</p>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Cart &bull; Auth &bull; Admin</span>
          <span className="text-cyan-400 font-mono">v1.2</span>
        </div>
      </div>
    );
  }

  if (type === "streamflix") {
    return (
      <div className="relative w-full h-44 bg-gradient-to-tr from-[#1f0d14] via-[#2a131b] to-[#0c121e] p-5 flex flex-col justify-between border-b border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-red-500 flex items-center gap-1.5">
            <span>▶</span> STREAMFLIX
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] font-medium border border-red-500/30">
            Entertainment
          </span>
        </div>
        <div className="my-auto text-center">
          <p className="text-2xl font-bold tracking-tight text-white">Cinema Browser</p>
          <p className="text-xs text-slate-400 mt-1">TMDB API &bull; Trailers &bull; Watchlists</p>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Dynamic Search</span>
          <span className="text-red-400 font-mono">React App</span>
        </div>
      </div>
    );
  }

  if (type === "devdesk") {
    return (
      <div className="relative w-full h-44 bg-gradient-to-tr from-[#0a1e24] via-[#0f2a33] to-[#09111c] p-5 flex flex-col justify-between border-b border-slate-800">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-teal-400 flex items-center gap-1.5">
            <span>■</span> DevDesk
          </span>
          <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-medium border border-teal-500/30">
            Productivity
          </span>
        </div>
        <div className="my-auto text-center">
          <p className="text-2xl font-bold tracking-tight text-white">Project Tracker</p>
          <p className="text-xs text-slate-400 mt-1">Kanban &bull; Task Management &bull; REST API</p>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Agile Board</span>
          <span className="text-teal-400 font-mono">MERN Stack</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 bg-gradient-to-tr from-[#0f1f14] via-[#14291c] to-[#09111c] p-5 flex flex-col justify-between border-b border-slate-800">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-bold text-emerald-400 flex items-center gap-1.5">
          <span>↗</span> FinTrack
        </span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-medium border border-emerald-500/30">
          Finance
        </span>
      </div>
      <div className="my-auto text-center">
        <p className="text-2xl font-bold tracking-tight text-white">Expense Tracker</p>
        <p className="text-xs text-slate-400 mt-1">Analytics &bull; Monthly Budgets &bull; Graphs</p>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>Interactive Charts</span>
        <span className="text-emerald-400 font-mono">Dashboard</span>
      </div>
    </div>
  );
};

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="w-full py-24 bg-[#090d16] border-t border-slate-800/80 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A selection of web applications I have built, demonstrating full-stack architecture, clean UI, and responsive functionality.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Visual Banner */}
                  <ProjectBanner type={item.bannerType} />

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {isExpanded ? item.fullDesc : item.shortDesc}
                    </p>

                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs text-center hover:bg-cyan-400 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 hover:text-white transition-colors border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Code</span>
                  </a>
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