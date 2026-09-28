import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const spotlight = spotlightRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { scale: 0.5, opacity: 0, transformOrigin: "50% 50%" });

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.06, ease: "power2.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.06, ease: "power2.out" });
    
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.18, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.18, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const dotSize = 10;
      const ringSize = 44;

      xToDot(x - dotSize / 2);
      yToDot(y - dotSize / 2);
      xToRing(x - ringSize / 2);
      yToRing(y - ringSize / 2);

      if (spotlight) {
        spotlight.style.transform = `translate3d(${x - 350}px, ${y - 350}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
      if (spotlight) gsap.to(spotlight, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, scale: 0.5, duration: 0.25, ease: "power2.inOut" });
      if (spotlight) gsap.to(spotlight, { opacity: 0, duration: 0.3 });
    };

    // Magnetic snap effect when hovering over buttons or links
    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, input, textarea, [data-interactive]');
      if (target) {
        gsap.to(ring, {
          scale: 1.6,
          borderColor: 'rgba(56, 189, 248, 0.9)',
          backgroundColor: 'rgba(14, 165, 233, 0.12)',
          duration: 0.2
        });
        gsap.to(dot, { scale: 0.4, opacity: 0.8, duration: 0.2 });
      } else {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(56, 189, 248, 0.5)',
          backgroundColor: 'transparent',
          duration: 0.2
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Global Mouse Follower Spotlight Beam */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none z-[9998] opacity-0 blur-[100px] transition-opacity duration-300 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(2,132,199,0.06) 45%, transparent 75%)'
        }}
      ></div>

      {/* Global Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#38bdf8] hidden md:block"
      ></div>

      {/* Global Custom Cursor Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-11 h-11 border border-cyan-400/50 rounded-full flex items-center justify-center backdrop-blur-[1px] transition-colors hidden md:block"
      ></div>
    </>
  );
};

export default CustomCursor;