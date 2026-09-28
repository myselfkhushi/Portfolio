import React, { useState } from 'react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and dynamic user interfaces.',
    skills: [
      { name: 'React.js', level: 'Advanced', icon: '⚛' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'JS' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: '≋' },
      { name: 'HTML5 & CSS3', level: 'Advanced', icon: '🌐' },
      { name: 'Redux Toolkit', level: 'Intermediate', icon: '🟣' },
      { name: 'TypeScript', level: 'Intermediate', icon: 'TS' },
      { name: 'Next.js', level: 'Intermediate', icon: '▲' },
      { name: 'React Native', level: 'Familiar', icon: '📱' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Architecting secure server-side logic, controllers, and APIs.',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: '⬡' },
      { name: 'Express.js', level: 'Advanced', icon: '⚡' },
      { name: 'RESTful APIs', level: 'Advanced', icon: '🔌' },
      { name: 'JWT Authentication', level: 'Intermediate', icon: '🔒' },
      { name: 'Middleware Design', level: 'Intermediate', icon: '⚙️' },
      { name: 'API Error Handling', level: 'Intermediate', icon: '🛡️' },
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Structuring schemas, data pipelines, and queries.',
    skills: [
      { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
      { name: 'Mongoose ODM', level: 'Advanced', icon: '📄' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
      { name: 'MySQL', level: 'Intermediate', icon: '🐬' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Daily tools used for version control, testing, and deployment.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: '⌥' },
      { name: 'Postman', level: 'Advanced', icon: '🚀' },
      { name: 'VS Code', level: 'Advanced', icon: '💻' },
      { name: 'Vite', level: 'Advanced', icon: '⚡' },
      { name: 'Vercel / Netlify', level: 'Intermediate', icon: '▲' },
      { name: 'Docker (Basics)', level: 'Familiar', icon: '🐳' },
      { name: 'Linux CLI', level: 'Intermediate', icon: '🐧' },
    ]
  }
];

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="w-full py-24 bg-[#080c14] border-t border-slate-800/80 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of the programming languages, frameworks, databases, and developer tools I work with.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/30">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
                    >
                      <span className="text-xs font-mono font-bold text-cyan-400 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle footer line */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Production focused</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active use
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Summary Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-white font-mono">MERN</p>
            <p className="text-xs text-slate-400 mt-1">Core Tech Stack</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400 font-mono">100%</p>
            <p className="text-xs text-slate-400 mt-1">Responsive Design</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-mono">RESTful</p>
            <p className="text-xs text-slate-400 mt-1">Clean API Architecture</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cyan-400 font-mono">Git</p>
            <p className="text-xs text-slate-400 mt-1">Version Controlled</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
