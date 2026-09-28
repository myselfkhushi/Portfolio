import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const cards = cardRefs.current;
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
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#05080f] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden border-t border-cyan-500/15"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-2xl border border-cyan-500/30 text-xs font-mono tracking-wider text-cyan-400 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>ABOUT // THE ENGINEER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit']">
            ENGINEER SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(14,165,233,0.35)]">
              BUILDING BUSINESS SYSTEMS.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Mission & Philosophy (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-8 md:p-12 bg-[#0c121e]/90 backdrop-blur-2xl border border-cyan-500/25 rounded-3xl shadow-2xl flex flex-col justify-between relative group hover:border-cyan-400/60 transition-all duration-500 overflow-hidden"
          >
            {/* Mouse Spotlight Track */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              01
            </div>
            
            <div className="space-y-5 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                Philosophy & Craft
              </span>
              <p className="text-xl md:text-2xl font-bold text-white leading-snug font-['Outfit']">
                I am <span className="text-cyan-300">Khushi</span>, a full-stack engineer dedicated to turning complex business challenges into production-ready software.
              </p>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                With 3+ years of experience in full-stack MERN development, <span className="text-white font-medium">I don't just write code—I build business systems.</span> Whether you need a fast startup MVP, a custom CRM, or an enterprise SaaS platform, I turn complex ideas into secure, scalable applications.
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              {['Full Stack MERN', 'Startup MVPs', 'Custom CRMs', 'Enterprise SaaS', 'High-Uptime APIs'].map((pill, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-xs font-mono text-cyan-200">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Production Metrics (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-8 md:p-12 bg-[#0c121e]/90 backdrop-blur-2xl border border-cyan-500/25 rounded-3xl shadow-2xl flex flex-col justify-between relative group hover:border-cyan-400/60 transition-all duration-500 overflow-hidden"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                Track Record
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">3+</div>
                  <div className="text-xs font-mono text-cyan-300">Years Experience</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">15+</div>
                  <div className="text-xs font-mono text-cyan-300">Systems Built</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">99.9%</div>
                  <div className="text-xs font-mono text-cyan-300">Target Uptime</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">24/7</div>
                  <div className="text-xs font-mono text-cyan-300">Production SLA</div>
                </div>
              </div>

              <p className="text-xs text-white/60 font-mono leading-relaxed pt-2">
                Focused on maintainability, performance optimization, and modular component architecture.
              </p>
            </div>
            
            <div className="pt-4 font-mono text-xs text-white/40 relative z-10">
              // PRODUCTION_METRICS_VERIFIED
            </div>
          </div>

          {/* Card 3: Core Deliverables (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-8 md:p-12 bg-[#0c121e]/90 backdrop-blur-2xl border border-cyan-500/25 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden relative group"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                Primary Deliverables
              </span>
              <h3 className="text-2xl font-black text-white font-['Outfit']">
                Architecting End-to-End Solutions
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                From fast MVP conceptualization to full enterprise microservice deployments with Docker containers and AWS cloud infrastructure.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:text-cyan-200 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;