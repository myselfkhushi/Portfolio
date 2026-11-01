import React, { useState } from 'react';
import bazarImg from '../assets/Portfolio/bazaio.png';
import urbanImg from '../assets/Portfolio/urbannest.png';
import backpackImg from '../assets/Portfolio/backpackwander.png';
import placeholderImg from '../assets/Portfolio/bazaio.png';

const projects = [
  {
    id: 1,
    title: "Bazaio E-Commerce",
    urlSlug: "bazaio.com/store",
    shortDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering...",
    fullDesc: "A high-performance full-stack e-commerce platform built with the MERN stack. Features secure JWT authentication, automated payment gateway integration, dynamic catalog filtering, real-time inventory management, and an administrative order management dashboard.",
    highlights: ["JWT Auth", "Cart Drawer", "Inventory Sync"],
    tags: ["React.js", "Node.js", "MongoDB", "E-Commerce", "REST API"],
    image: bazarImg,
    imageStyle: "object-cover object-top",
    liveUrl: "https://bazario-coral.vercel.app/"
  },
  {
    id: 2,
    title: "Feni Finance",
    urlSlug: "feni.finance",
    shortDesc: "A fintech platform offering digital financial services, payment processing, and loan management.",
    fullDesc: "Feni Finance provides a comprehensive suite of digital financial solutions, including online payments, loan applications, and financial analytics for businesses and individuals.",
    highlights: ["Payments", "Loans", "Analytics"],
    tags: ["React.js", "TailwindCSS", "Fintech", "Payments"],
    image: bazarImg,
    imageStyle: "object-contain object-center",
    liveUrl: "https://www.feni.finance/"
  },
  {
    id: 3,
    title: "Urban Nest Interiors",
    urlSlug: "urbannestinteriors.co.uk",
    shortDesc: "A modern interior design portfolio showcasing high‑end residential projects.",
    fullDesc: "Urban Nest Interiors provides a showcase of premium interior design projects, highlighting clean aesthetics, material selections, and spatial planning for luxury homes.",
    highlights: ["Design Strategy", "3D Renderings", "Client Collaboration"],
    tags: ["React.js", "TailwindCSS", "Design", "Portfolio"],
    image: urbanImg,
    imageStyle: "object-contain object-center",
    liveUrl: "https://urbannestinteriors.co.uk/"
  },
  {
    id: 4,
    title: "Backpack Wander",
    urlSlug: "backpackwander.com",
    shortDesc: "A travel blog and gear review site focusing on backpacking adventures and equipment recommendations.",
    fullDesc: "Backpack Wander offers in‑depth travel guides, personal stories from the road, and detailed gear reviews to help backpackers plan trips and choose the right equipment.",
    highlights: ["Travel Guides", "Gear Reviews", "Community Stories"],
    tags: ["React.js", "TailwindCSS", "Content", "Blog"],
    image: backpackImg,
    imageStyle: "object-contain object-center",
    liveUrl: "https://www.backpackwander.com/"
  },
  {
    id: 5,
    title: "Pharmdlive",
    urlSlug: "pharmdlive.com",
    shortDesc: "A platform connecting pharmacies with patients for online prescriptions and medication delivery.",
    fullDesc: "Pharmdlive offers a seamless experience for ordering prescriptions online, teleconsultations with pharmacists, and rapid medication delivery to homes.",
    highlights: ["Online Prescriptions", "Telepharmacy", "Delivery"],
    tags: ["React.js", "TailwindCSS", "Healthcare", "E-commerce"],
    image: bazarImg,
    imageStyle: "object-cover object-center",
    liveUrl: "https://pharmdlive.com/"
  },
  {
    id: 6,
    title: "Orafol Front",
    urlSlug: "orafol-front.missio.io",
    shortDesc: "Front‑end dashboard for Orafol, a marketing automation platform.",
    fullDesc: "Orafol Front provides an interactive UI for managing campaigns, tracking metrics, and integrating with Missio services for automated marketing workflows.",
    highlights: ["Campaign Management", "Analytics", "Integrations"],
    tags: ["React.js", "TailwindCSS", "Dashboard", "Marketing"],
    image: bazarImg,
    imageStyle: "object-cover object-center",
    liveUrl: "https://orafol-front.missio.io/"
  },
  {
    id: 7,
    title: "Gulf EL",
    urlSlug: "gulf-el.com",
    shortDesc: "Electronics e‑commerce site serving the Gulf region with a wide range of consumer electronics.",
    fullDesc: "Gulf EL offers a comprehensive catalogue of electronics, featuring detailed product pages, secure checkout, and regional shipping options across the Gulf countries.",
    highlights: ["Wide Catalogue", "Secure Checkout", "Regional Shipping"],
    tags: ["React.js", "TailwindCSS", "E-Commerce", "Retail"],
    image: bazarImg,
    imageStyle: "object-cover object-center",
    liveUrl: "https://www.gulf-el.com/"
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="w-full py-24 bg-zinc-50 border-t border-zinc-200 text-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-white px-3.5 py-1.5 rounded-full border border-zinc-300/50 mb-3">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">Production Projects</h2>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            Real-world full-stack web applications engineered with clean code architectures, responsive interfaces, and production-tested tools.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-950/10 transition-all duration-500 ease-out flex flex-col justify-between group shadow-xl">
                <div>
                  {/* Browser Mockup Header */}
                  <div className="px-4 py-2.5 bg-gradient-to-b from-zinc-50 to-zinc-200/80 border-b border-zinc-300 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 w-1/4">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></span>
                    </div>
                    <div className="flex-1 max-w-[200px] flex justify-center">
                      <div className="w-full px-3 py-1 rounded-md bg-white border border-zinc-300 text-[10px] text-center font-medium text-zinc-600 truncate shadow-sm">
                        <span className="opacity-50 mr-1 text-zinc-400">
                          <svg className="w-2.5 h-2.5 inline-block -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                        </span>
                        {project.urlSlug}
                      </div>
                    </div>
                    <div className="w-1/4 flex justify-end">
                      <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                      </span>
                    </div>
                  </div>

                  {/* Image Preview */}
                  <div className="w-full h-52 sm:h-56 overflow-hidden bg-zinc-50 border-b border-zinc-200/80 relative">
                    <img src={project.image} alt={project.title} className={`w-full h-full ${project.imageStyle} group-hover:scale-105 transition-transform duration-700 ease-out`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-950 tracking-tight transition-colors">{project.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mt-2.5">
                      {isExpanded ? project.fullDesc : project.shortDesc}
                    </p>
                    <button onClick={() => toggleExpand(project.id)} className="mt-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 underline underline-offset-4 cursor-pointer transition-colors">
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                    <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      {project.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          {i > 0 && <span className="text-zinc-500">&bull;</span>}{h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100/50 text-zinc-700 border border-zinc-300/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="p-6 pt-0">
                  <hr className="border-zinc-200/80 mb-4" />
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full py-3 px-4 rounded-xl bg-zinc-950 text-white font-bold text-sm hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg cursor-pointer group/btn">
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
