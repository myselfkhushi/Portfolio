import React, { useState } from 'react';
import kumarImg from '../assets/Portfolio/kumar_music.png';
import cinestreamImg from '../assets/Portfolio/cinestream.jpg';
import devdeskImg from '../assets/Portfolio/devdesk.jpg';

const projects = [
  {
    id: 1,
    title: "Kumar Music E-Commerce",
    shortDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering...",
    fullDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering, real-time inventory management, and an administrative order management dashboard.",
    tags: ["React.js", "Node.js", "MongoDB", "E-Commerce", "REST API"],
    image: kumarImg,
    imageStyle: "object-cover object-top",
    liveUrl: "https://github.com/myselfkhushi"
  },
  {
    id: 2,
    title: "CineStream Cinema",
    shortDesc: "A responsive movie browsing and entertainment platform featuring high-definition trailer previews, genre filtering, trending releases, and watchlists...",
    fullDesc: "A responsive movie browsing and entertainment platform featuring high-definition trailer previews, genre filtering, trending releases, dynamic search, and custom watchlists powered by React and TMDB API.",
    tags: ["React.js", "Tailwind CSS", "TMDB API", "Axios"],
    image: cinestreamImg,
    imageStyle: "object-cover object-center",
    liveUrl: "https://github.com/myselfkhushi"
  },
  {
    id: 3,
    title: "DevFlow Project Workspace",
    shortDesc: "A streamlined project and sprint tracking dashboard with interactive Kanban task columns, priority tags, deadline tracking, and team collaboration...",
    fullDesc: "A streamlined project and sprint tracking dashboard with interactive Kanban task columns, priority tags, deadline tracking, team collaboration, and persistent RESTful backend state using Node.js and MongoDB.",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
    image: devdeskImg,
    imageStyle: "object-cover object-center",
    liveUrl: "https://github.com/myselfkhushi"
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="w-full py-20 bg-[#090d16] border-t border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Clean, production-focused applications demonstrating responsive frontend design and scalable full-stack architectures.
          </p>
        </div>

        {/* Project Cards Grid - Simple & Matching Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0c1017] border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between shadow-2xl"
              >
                <div>
                  {/* Real Project Image */}
                  <div className="w-full h-52 sm:h-56 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${project.imageStyle} hover:scale-105 transition-transform duration-500`}
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed mt-2.5">
                      {isExpanded ? project.fullDesc : project.shortDesc}
                    </p>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="mt-1 text-xs font-medium text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    {/* Tech Badges / Pills */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#161a23] text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Simple Full-Width Live Demo Button Only (No GitHub Repo) */}
                <div className="p-6 pt-0">
                  <hr className="border-slate-800/80 mb-4" />
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
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