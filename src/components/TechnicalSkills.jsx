import React, { useState } from 'react';

// Crisp SVG Icons (Zero Emojis)
const TechIcon = ({ name, className = "w-4 h-4" }) => {
  switch (name) {
    case 'react':
      return (
        <svg className={className} viewBox="0 0 115.3 100" fill="#61DAFB">
          <path d="M57.6 40.5c-5.3 0-9.6 4.3-9.6 9.5s4.3 9.5 9.6 9.5 9.6-4.3 9.6-9.5-4.3-9.5-9.6-9.5z" />
          <path fill="none" stroke="#61DAFB" strokeWidth="4.5" d="M57.6 15c26.6 0 48.2 15.7 48.2 35s-21.6 35-48.2 35S9.4 69.3 9.4 50s21.6-35 48.2-35z" transform="rotate(30 57.6 50)" />
          <path fill="none" stroke="#61DAFB" strokeWidth="4.5" d="M57.6 15c26.6 0 48.2 15.7 48.2 35s-21.6 35-48.2 35S9.4 69.3 9.4 50s21.6-35 48.2-35z" transform="rotate(90 57.6 50)" />
          <path fill="none" stroke="#61DAFB" strokeWidth="4.5" d="M57.6 15c26.6 0 48.2 15.7 48.2 35s-21.6 35-48.2 35S9.4 69.3 9.4 50s21.6-35 48.2-35z" transform="rotate(150 57.6 50)" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.5 17.5c.3.5.8.8 1.5.8.8 0 1.3-.4 1.3-1.4v-5.4h2v5.5c0 2-1.2 2.8-2.9 2.8-1.5 0-2.4-.8-2.8-1.8l.9-.5zm-6.2.2c.4.7 1.1 1.2 2.1 1.2 1.2 0 1.9-.6 1.9-1.5 0-1-.7-1.4-1.9-1.9-1.3-.5-2.1-1.2-2.1-2.4 0-1.3 1-2.3 2.5-2.3 1.1 0 1.9.4 2.4 1.4l-1.3.8c-.3-.5-.6-.7-1.1-.7-.6 0-1 .4-1 1 0 .6.4.9 1.4 1.3 1.5.6 2.6 1.3 2.6 2.7 0 1.5-1.2 2.6-3.1 2.6-1.7 0-2.8-.8-3.2-1.9l1.8-.8z" fill="#000" />
        </svg>
      );
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M5 9h8v2H10v7H8v-7H5V9zm9.5 5.5c.3.5.8.8 1.5.8.8 0 1.3-.4 1.3-1.4v-5.4h2v5.5c0 2-1.2 2.8-2.9 2.8-1.5 0-2.4-.8-2.8-1.8l.9-.5z" fill="#fff" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M12 2L3 5.3v13.4L12 22l9-3.3V5.3L12 2zm6.3 5.5l-.3 3.6H9.4l.2 2.2h8l-.6 6.3-5 1.5-5-1.5-.3-3.6h2.2l.1 1.7 3 .9 3-.9.3-3.1H7.8L7.2 7.5h11.1z" />
        </svg>
      );
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M12 2L3 5.3v13.4L12 22l9-3.3V5.3L12 2zm6.3 5.5l-.3 3.6H9.4l.2 2.2h8l-.6 6.3-5 1.5-5-1.5-.3-3.6h2.2l.1 1.7 3 .9 3-.9.3-3.1H7.8L7.2 7.5h11.1z" />
        </svg>
      );
    case 'redux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#764ABC">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93s2.17-5.45 5-5.93V4h2v1.07c2.83.48 5 2.94 5 5.93s-2.17 5.45-5 5.93zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
          <circle cx="12" cy="12" r="10" fill="#000" stroke="#475569" strokeWidth="1.5" />
          <path d="M8 8v8l8-9.5h1.5V16h-2v-5.5L8 16z" fill="#FFF" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#68A063">
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 3.2l6.8 3.9v7.8L12 20.8l-6.8-3.9V9.1L12 5.2z" />
          <circle cx="12" cy="12" r="3" fill="#68A063" />
        </svg>
      );
    case 'express':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#CBD5E1">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'rest':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
          <circle cx="6" cy="12" r="3" fill="#38BDF8" />
          <circle cx="18" cy="6" r="3" fill="#38BDF8" />
          <circle cx="18" cy="18" r="3" fill="#38BDF8" />
          <path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
        </svg>
      );
    case 'jwt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 2C12 2 6 7.5 6 13.5c0 4.2 3.1 7.6 7 8.3v-5.2c-.6-.2-1-.8-1-1.6 0-1 1-1.8 2-1.8s2 .8 2 1.8c0 .8-.4 1.4-1 1.6v5.2c3.9-.7 7-4.1 7-8.3C22 7.5 16 2 16 2h-4z" />
        </svg>
      );
    case 'database':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l8 8c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8-8c-.8-.7-.8-2 0-2.8z" />
          <circle cx="12" cy="7" r="1.5" fill="#fff" />
          <circle cx="12" cy="17" r="1.5" fill="#fff" />
          <circle cx="16" cy="12" r="1.5" fill="#fff" />
          <path d="M12 8.5v7m0-3.5h2.5" stroke="#fff" strokeWidth="1.5" />
        </svg>
      );
    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
          <path d="M13.1 2.2l-9.9 5.7c-.7.4-1.2 1.1-1.2 1.9v11.4c0 .8.5 1.5 1.2 1.9l9.9 5.7c.7.4 1.5.4 2.2 0l9.9-5.7c.7-.4 1.2-1.1 1.2-1.9V9.8c0-.8-.5-1.5-1.2-1.9L15.3 2.2c-.7-.4-1.5-.4-2.2 0z" />
          <path d="M12 6l5 5-5 5-5-5 5-5z" fill="#fff" />
        </svg>
      );
    case 'code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'vite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#BD34FE">
          <path d="M21.5 3.5L12.7 20.8a.8.8 0 01-1.4 0L2.5 3.5a.8.8 0 011-1.1l8.5 4.3 8.5-4.3a.8.8 0 011 1.1z" />
          <path d="M12 7.8L7.5 16.5l4.5-3.5 4.5 3.5L12 7.8z" fill="#FFD62E" />
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm10 6.5c-.3 0-.6.1-.9.2-.5-.8-1.4-1.3-2.4-1.3-.2 0-.4 0-.6.1-.7-1.5-2.2-2.5-3.9-2.5H3v6c0 3.3 2.7 6 6 6 5.5 0 9.8-4.5 10-10 .3.2.6.3 1 .3.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z" />
        </svg>
      );
    case 'terminal':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance interfaces.',
    skills: [
      { name: 'React.js', iconKey: 'react' },
      { name: 'JavaScript (ES6+)', iconKey: 'javascript' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'HTML5 & CSS3', iconKey: 'html5' },
      { name: 'Redux Toolkit', iconKey: 'redux' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'Next.js', iconKey: 'nextjs' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Designing secure servers, business logic, and API endpoints.',
    skills: [
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'Express.js', iconKey: 'express' },
      { name: 'RESTful APIs', iconKey: 'rest' },
      { name: 'JWT Auth', iconKey: 'jwt' },
      { name: 'Middleware Design', iconKey: 'code' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Structuring collections, schemas, and efficient data queries.',
    skills: [
      { name: 'MongoDB', iconKey: 'mongodb' },
      { name: 'Mongoose ODM', iconKey: 'mongodb' },
      { name: 'PostgreSQL', iconKey: 'database' },
      { name: 'MySQL', iconKey: 'database' },
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Workflow',
    description: 'Daily tools for version control, testing, building, and deploying.',
    skills: [
      { name: 'Git & GitHub', iconKey: 'git' },
      { name: 'Postman', iconKey: 'postman' },
      { name: 'VS Code', iconKey: 'code' },
      { name: 'Vite', iconKey: 'vite' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'Linux CLI', iconKey: 'terminal' },
    ]
  }
];

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="w-full py-20 bg-[#080c14] border-t border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive collection of programming languages, libraries, databases, and developer tools I work with daily.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid with Smooth Hover Lift & Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:shadow-[0_18px_35px_-10px_rgba(14,165,233,0.14)] transition-all duration-300 ease-out flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
                    {category.skills.length} tools
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips with Genuine Vector SVG Icons and Smooth Micro-Interactions */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-200 group/chip hover:scale-105 active:scale-95 cursor-default shadow-sm"
                    >
                      <TechIcon name={skill.iconKey} className="w-3.5 h-3.5 shrink-0 group-hover/chip:rotate-6 transition-transform" />
                      <span className="text-xs font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Module Metric */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production Stack</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
