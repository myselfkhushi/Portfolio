import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import pictureImg from '../assets/Portfolio/khushi.jpg';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const spotlightRef = useRef(null);
  const contentRef = useRef(null);

  const developerRoles = [
    'FULL-STACK MERN ARCHITECT',
    'REACT & NODE.JS SPECIALIST',
    'ENTERPRISE SAAS & MVPS',
    'SCALABLE BUSINESS SYSTEMS'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!section || !card || !content) return;

    // GSAP Entrance Choreography
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      section.querySelector('header'),
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      content.querySelectorAll('.hero-anim-item'),
      { y: 40, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.1 },
      "-=0.6"
    )
    .fromTo(
      card,
      { scale: 0.8, opacity: 0, rotationY: 25, rotationX: -15 },
      { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, duration: 1.3, ease: "back.out(1.1)" },
      "-=0.8"
    );

    // 3D Card Tilt Physics
    const xTilt = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });
    const yTilt = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
    const glareX = gsap.quickTo(glareRef.current, "x", { duration: 0.3, ease: "power2.out" });
    const glareY = gsap.quickTo(glareRef.current, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }

      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

      const rotateX = -((y - cardCenterY) / (cardRect.height / 2)) * 14;
      const rotateY = ((x - cardCenterX) / (cardRect.width / 2)) * 14;

      xTilt(rotateY);
      yTilt(rotateX);

      glareX((x - cardRect.left) - cardRect.width / 2);
      glareY((y - cardRect.top) - cardRect.height / 2);
    };

    const handleMouseEnter = () => {
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
      xTilt(0);
      yTilt(0);
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#05080f] overflow-hidden flex flex-col justify-between select-none"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
      `}</style>

      {/* 1. Cinematic Background Typography Marquee */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/90 to-[#05080f] z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...developerRoles, ...developerRoles].map((role, idx) => (
              <span key={idx} className="text-[13vw] font-black text-cyan-400 mx-8 uppercase tracking-tighter font-['Outfit']">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Direct Mouse Tracking Spotlight Beam */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-0 blur-[90px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, rgba(2,132,199,0.08) 40%, transparent 70%)'
        }}
      ></div>

      {/* 3. Main Content Layer */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-between pt-28 pb-12 my-auto">
        
        {/* Availability Badge */}
        <div className="hero-anim-item flex items-center justify-between w-full mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-2xl border border-cyan-500/30 text-xs font-mono tracking-wider text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 font-bold">AVAILABLE FOR WORK</span>
            <span className="text-white/30">|</span>
            <span className="text-white/80">FULL-TIME & CONTRACTS</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-300/60">
            <span>LOCATION: REMOTE / HYBRID</span>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 my-auto">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            
            <div className="hero-anim-item flex items-center gap-2.5">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-[11px] rounded-full tracking-widest shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                FULL-STACK DEVELOPER
              </span>
              <span className="text-white/60 text-xs font-mono tracking-wider uppercase">Business Systems Architect</span>
            </div>

            <h1 className="hero-anim-item text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[0.96] font-['Outfit']">
              KHUSHI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_35px_rgba(14,165,233,0.4)]">
                MERN ARCHITECT
              </span>
            </h1>

            {/* Stack Highlights */}
            <div className="hero-anim-item flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-md font-semibold text-cyan-300">
                3+ Years Exp
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="text-white/90">React.js &bull; Node.js &bull; Express.js &bull; MongoDB</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-white/60">Docker &bull; AWS</span>
            </div>

            {/* Core Value Statement */}
            <p className="hero-anim-item text-sm md:text-base text-white/80 font-light leading-relaxed max-w-lg">
              With 3+ years of experience in full-stack MERN development, <strong className="text-white font-semibold">I don't just write code—I build business systems.</strong> Whether you need a fast startup MVP, a custom CRM, or an enterprise SaaS platform, I turn complex ideas into secure, production-ready applications.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-300 flex items-center gap-2 hover:scale-[1.03] active:scale-95 group"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[#0c121e]/90 text-white border border-cyan-500/30 font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:bg-[#111928] transition-all duration-300 shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-[1.03] active:scale-95"
              >
                <span>Initiate Contact</span>
              </a>
            </div>
          </div>

          {/* Center Column: 3D Holographic Poster Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end perspective-[1200px]">
            <div 
              ref={cardRef}
              className="relative group transform-gpu transition-transform duration-100 ease-out will-change-transform"
            >
              {/* Neon Ocean Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/40 via-sky-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Poster Card Frame */}
              <div className="relative w-[290px] sm:w-[330px] p-3.5 bg-[#0c121e]/90 backdrop-blur-2xl rounded-3xl border border-cyan-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden">
                
                {/* Dynamic Specular Glare */}
                <div 
                  ref={glareRef}
                  className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform-gpu z-40"
                ></div>

                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 z-30 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-[10px] font-bold tracking-widest rounded-full shadow-lg">
                  FEATURED DEV
                </div>

                <img
                  src={pictureImg}
                  alt="Khushi - Full Stack MERN Developer"
                  className="w-full h-[350px] sm:h-[400px] object-cover rounded-2xl filter contrast-105 brightness-105 group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Status Footprint */}
                <div className="mt-3.5 p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/80">Khushi</span>
                  <span className="text-cyan-300 font-bold">MERN &bull; SaaS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Ticker */}
        <div className="hero-anim-item flex items-center justify-between pt-8 border-t border-white/5 text-xs font-mono text-white/40 tracking-wider">
          <span>ENGINEERED FOR PRODUCTION & SCALABILITY</span>
          <span>MERN STACK &bull; BUSINESS SYSTEMS</span>
        </div>
      </div>

      {/* Glassmorphic Sticky Header Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#05080f]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black text-white font-['Outfit'] tracking-tight flex items-center gap-1.5 group">
            <span>KHUSHI</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_12px_#38bdf8] transition-all"></span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </header>
    </section>
  );
};

export default Hero;