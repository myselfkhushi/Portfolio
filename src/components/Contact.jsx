import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    console.log("Form Data Submitted Successfully:", formData);
    alert(`Thanks ${formData.firstName}! Message received. Khushi will get in touch with you shortly.`);
    
    setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
  };

  return (
    <section ref={ref} id="contact" className="bg-[#06080d] w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center py-28 border-t border-cyan-500/20 select-none">
      
      {/* Background Cinematic Cyan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/12 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Huge Background Parallax Watermark Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-cyan-400 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Form Card - Perfectly Centered on the Screen */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0f141e]/95 backdrop-blur-2xl border border-cyan-500/30 w-full p-8 md:p-14 text-white flex flex-col justify-between rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle internal top cyan highlight glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-90"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>GET IN TOUCH // INITIATE SIGNAL</span>
            </div>
            
            {/* Direct Email Pill */}
            <a 
              href="mailto:khushikumari882484@gmail.com" 
              className="text-xs font-mono text-cyan-300/80 hover:text-cyan-300 tracking-wider flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors w-fit"
            >
              <span>✉</span> khushikumari882484@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, MVP, CRM, or hiring opportunity..." 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 mt-2 pt-6 border-t border-white/10">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-light text-white/70">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/30 bg-transparent text-cyan-500 focus:ring-0 focus:ring-offset-0 cursor-pointer" 
                  style={{ accentColor: "#0ea5e9" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-6 text-xs text-white/50 font-light">
                <p className="leading-relaxed max-w-[400px]">
                  Directly reaching Khushi &bull; Ready for Full-Stack MERN, MVP builds, custom CRMs, and SaaS development.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    Ready to build your next high-performance business system?
                  </p>
                  
                  <button 
                    type="submit" 
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 group whitespace-nowrap shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:scale-105 active:scale-95"
                  >
                    Send Message
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;