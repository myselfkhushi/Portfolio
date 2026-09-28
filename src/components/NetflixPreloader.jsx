import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CinematicPreloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const contentRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // 1. Digital Percentage Counter Animation
    const counterObj = { value: 0 };
    const counterTween = gsap.to(counterObj, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.floor(counterObj.value));
      }
    });

    // 2. Orbital Rings Rotation
    gsap.to(ring1Ref.current, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    });

    gsap.to(ring2Ref.current, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    });

    // 3. Exit Sequence after 100%
    const tl = gsap.timeline({
      delay: 2.0,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      filter: "blur(12px)",
      duration: 0.4,
      ease: "power2.in"
    })
    .to([ring1Ref.current, ring2Ref.current], {
      scale: 1.8,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out"
    }, "-=0.3")
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut"
    }, "-=0.2");

    return () => {
      counterTween.kill();
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#05080f] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient Cyber Blue Core Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none animate-pulse duration-1000"></div>

      {/* Cyber Orbital Ring Geometry */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Outer Orbital Ring */}
        <svg
          ref={ring1Ref}
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.5"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="3"
            strokeDasharray="140 380"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Counter-Rotating Orbital Ring */}
        <svg
          ref={ring2Ref}
          className="absolute inset-4 w-56 h-56 pointer-events-none drop-shadow-[0_0_12px_rgba(14,165,233,0.3)]"
          viewBox="0 0 160 160"
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray="90 320"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Monogram & Tech Metrics */}
        <div ref={contentRef} className="relative z-10 flex flex-col items-center gap-2 text-center">
          
          {/* Glowing Monogram Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <span className="text-2xl font-black text-white font-['Outfit'] tracking-wider">
              K<span className="text-cyan-400">.</span>
            </span>
          </div>

          {/* Precision Digital Counter */}
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-black text-white font-mono tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              {percent < 10 ? `0${percent}` : percent}
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold">%</span>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-center gap-1.5 h-3">
            {[40, 90, 60, 100, 50].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-cyan-400 animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDuration: `${0.6 + i * 0.15}s`
                }}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Mission Ticker */}
      <div className="mt-8 flex flex-col items-center gap-1 text-center relative z-10">
        <h2 className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-white/90">
          KHUSHI <span className="text-cyan-400">&bull;</span> MERN ARCHITECT
        </h2>
        <p className="text-[10px] font-mono text-cyan-300/60 tracking-widest uppercase">
          INITIALIZING BUSINESS SYSTEMS // PRODUCTION READY
        </p>
      </div>

    </div>
  );
};

export default CinematicPreloader;