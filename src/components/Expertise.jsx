import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    number: "01",
    title: "Frontend Engineering",
    text: "Crafting reactive, mobile-ready interfaces with React.js, Next.js, React Native, and Tailwind CSS with buttery smooth motion physics and intuitive UX.",
    tag: "UI / UX & REACT ECOSYSTEM",
    gradient: "from-[#081826] via-[#0d141e] to-[#080b10]"
  },
  {
    number: "02",
    title: "Backend & REST APIs",
    text: "Architecting secure RESTful endpoints, robust business logic, role-based auth, and scalable database schemas across MongoDB, PostgreSQL, and MySQL.",
    tag: "NODE.JS & MICROSERVICES",
    gradient: "from-[#061424] via-[#0c131d] to-[#070a0f]"
  },
  {
    number: "03",
    title: "MERN Systems & MVPs",
    text: "Building complete business systems: fast startup MVPs, custom CRMs, and enterprise multi-tenant SaaS platforms with 99.9% uptime architecture.",
    tag: "BUSINESS SYSTEMS & SAAS",
    gradient: "from-[#0a1e32] via-[#0d1724] to-[#070b10]"
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    text: "Deploying resilient containerized workloads using Docker, AWS cloud infrastructure, Linux administration, Postman API testing, and Git workflows.",
    tag: "AWS, DOCKER & INFRASTRUCTURE",
    gradient: "from-[#07192a] via-[#0b141f] to-[#060a0e]"
  }
];

// Tech stack directory directly matching User's Image 3
const techDirectory = [
  {
    category: "LANGUAGES",
    items: [
      { name: "JavaScript", icon: "JS", color: "#F7DF1E", bg: "#323330" },
      { name: "TypeScript", icon: "TS", color: "#3178C6", bg: "#1e293b" },
      { name: "Python", icon: "py", color: "#3776AB", bg: "#1e293b" },
      { name: "Java", icon: "☕", color: "#ED8B00", bg: "#2d2015" },
      { name: "C / C++", icon: "C++", color: "#00599C", bg: "#172554" }
    ]
  },
  {
    category: "FRONTEND",
    items: [
      { name: "React.js", icon: "⚛", color: "#61DAFB", bg: "#082f49" },
      { name: "React Native", icon: "📱", color: "#61DAFB", bg: "#082f49" },
      { name: "Next.js", icon: "▲", color: "#FFFFFF", bg: "#18181b" },
      { name: "Tailwind CSS", icon: "≋", color: "#38BDF8", bg: "#0c4a6e" },
      { name: "Redux", icon: "🟣", color: "#764ABC", bg: "#2e1065" },
      { name: "HTML5", icon: "5", color: "#E34F26", bg: "#431407" }
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", icon: "⬡", color: "#339933", bg: "#052e16" },
      { name: "Express.js", icon: "ex", color: "#FFFFFF", bg: "#27272a" },
      { name: "REST APIs", icon: "API", color: "#38BDF8", bg: "#082f49" },
      { name: "MongoDB", icon: "🍃", color: "#47A248", bg: "#064e3b" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1", bg: "#1e1b4b" },
      { name: "MySQL", icon: "🐬", color: "#00758F", bg: "#164e63" }
    ]
  },
  {
    category: "TOOLS & CLOUD",
    items: [
      { name: "AWS", icon: "aws", color: "#FF9900", bg: "#451a03" },
      { name: "Docker", icon: "🐳", color: "#2496ED", bg: "#0c4a6e" },
      { name: "Linux", icon: "🐧", color: "#FCC624", bg: "#292524" },
      { name: "Git / GitHub", icon: "⌥", color: "#F05032", bg: "#27272a" },
      { name: "Postman", icon: "🚀", color: "#FF6C37", bg: "#431407" }
    ]
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      gsap.to(card, {
        scale: 0.92 - index * 0.025,
        y: -15 - index * 8,
        filter: "blur(6px)",
        opacity: 0.4,
        scrollTrigger: {
          trigger: card,
          start: `top ${90 + index * 20}px`,
          end: "bottom top",
          scrub: true,
        }
      });
    });

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Cyan/Sky Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-cyan-500/40 text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-cyan-400 font-bold">CAPABILITIES</span>
              <span className="text-white/40">|</span>
              <span>CORE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              CORE CAPABILITIES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-[0_0_25px_rgba(14,165,233,0.35)]">
                PRODUCTION ENGINEERING.
              </span>
            </h2>
          </div>
          <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Architecting end-to-end MERN systems, resilient REST APIs, and business platforms built for scale.
          </p>
        </div>

        {/* 1-on-1 Gradient Stacking Container */}
        <div className="relative flex flex-col gap-8 pb-12">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-cyan-500/20 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[230px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-cyan-400/50`}
              style={{
                zIndex: index + 1,
                top: `${95 + index * 16}px`
              }}
            >
              {/* Dynamic Mouse Spotlight Highlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.18), transparent 70%)'
                }}
              ></div>

              {/* Cyan Accent Stripe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-10"></div>

              {/* Card Header Top */}
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  {item.tag}
                </span>
                <span className="text-2xl md:text-3xl font-mono font-black text-cyan-400/20">
                  {item.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Subtle Cyan Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_10px_#38bdf8] z-10 transition-all"></div>
            </div>
          ))}
        </div>

        {/* 4-Column Tech Directory - Matching Image 3 Exactly */}
        <div className="pt-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                // COMPREHENSIVE ARSENAL
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                TECHNOLOGY DIRECTORY
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40 hidden sm:block">
              VERIFIED SKILL SET
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techDirectory.map((col, idx) => (
              <div
                key={idx}
                className="bg-[#0e1117] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] transition-all duration-300"
              >
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/60 mb-5 font-bold">
                    {col.category}
                  </h4>
                  <ul className="space-y-3.5">
                    {col.items.map((tech, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-3 text-sm text-white/90 font-medium group">
                        <span 
                          className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: tech.bg, color: tech.color }}
                        >
                          {tech.icon}
                        </span>
                        <span className="group-hover:text-cyan-300 transition-colors">
                          {tech.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;