import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // --- Interactive Magnetic Mouse Spotlight per Bento Card ---
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
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Cyan/Ocean Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-cyan-500/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-cyan-400 font-bold">ABOUT</span>
            <span className="text-white/40">|</span>
            <span>FULL STACK ENGINEER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            ENGINEER SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]">
              BUILDING BUSINESS SYSTEMS.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Bio & Summary (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-cyan-500/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
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
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Background & Mission</h3>
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                I am <span className="text-white font-bold drop-shadow">Khushi</span>, a dedicated <span className="text-cyan-400 font-semibold">Full Stack MERN Developer</span> crafting scalable software and resilient digital products.
              </p>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                With 3+ years of experience in full-stack MERN development, <span className="text-white font-medium">I don't just write code—I build business systems.</span> Whether you need a fast startup MVP, a custom CRM, or an enterprise SaaS platform, I turn complex ideas into secure, production-ready applications.
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Full Stack MERN</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Startup MVPs</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Enterprise SaaS</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Custom CRMs</span>
            </div>
          </div>

          {/* Card 2: Key Capabilities & Highlights (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-cyan-500/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              02
            </div>
            
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">What I Deliver</h3>
              <ul className="space-y-3.5 text-sm text-white/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&#8250;</span>
                  <span><strong className="text-white">Rapid MVP Development:</strong> Taking concepts to market in record time with robust architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&#8250;</span>
                  <span><strong className="text-white">Custom Business CRMs:</strong> Automating workflows and managing data with tailored interfaces.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold">&#8250;</span>
                  <span><strong className="text-white">Scalable SaaS Platforms:</strong> Multi-tenant systems with enterprise security, Docker, and AWS.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 font-mono text-xs text-white/40 relative z-10">
              // PRODUCTION_GRADE_EXECUTION
            </div>
          </div>

          {/* Card 3: Technical Ecosystem (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-cyan-500/60 transition-all duration-500 overflow-hidden relative group"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(14,165,233,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Production Tech Stack</h3>
              <p className="text-base md:text-lg font-semibold text-white">Full-stack suite for high-performance and resilient cloud deployment.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:text-cyan-300 hover:scale-105 transition-all"
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