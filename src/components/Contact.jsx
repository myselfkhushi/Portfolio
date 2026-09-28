import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  
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
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("khushikumari882484@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    console.log("Form Data Submitted Successfully:", formData);
    alert(`Thank you, ${formData.firstName}! Your message was transmitted. Khushi will respond shortly.`);
    
    setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
  };

  return (
    <section ref={ref} id="contact" className="bg-[#05080f] w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center py-28 px-4 sm:px-6 select-none border-t border-cyan-500/15">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Large Parallax Watermark Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-[0.05]"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-cyan-400 uppercase tracking-tighter select-none scale-y-[1.6] origin-top font-['Outfit']"
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Centered Glassmorphic Form Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0c121e]/95 backdrop-blur-2xl border border-cyan-500/30 w-full p-8 sm:p-12 md:p-16 text-white flex flex-col justify-between rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle Top Cyan Accent Stripe */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-90"></div>

          {/* Card Header & Email Copy Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>GET IN TOUCH // DIRECT DISPATCH</span>
            </div>
            
            {/* Quick Copy Email Button */}
            <button 
              type="button"
              onClick={handleCopyEmail}
              className="text-xs font-mono text-cyan-300/90 hover:text-white tracking-wider flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/25 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all cursor-pointer w-fit shadow-sm"
              title="Click to copy email address"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{copied ? "Copied to Clipboard! ✓" : "khushikumari882484@gmail.com"}</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
              
              {/* Left Column Inputs */}
              <div className="flex flex-col gap-7">
                <div className="relative group">
                  <label htmlFor="firstName" className="block text-xs font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul" 
                    required
                    className="w-full bg-[#05080f]/60 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder-white/30 font-medium"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="lastName" className="block text-xs font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                    Last Name <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Sharma" 
                    required
                    className="w-full bg-[#05080f]/60 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder-white/30 font-medium"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com" 
                    required
                    className="w-full bg-[#05080f]/60 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder-white/30 font-medium"
                  />
                </div>
              </div>

              {/* Right Column Textarea */}
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                  Project Brief or Inquiry <span className="text-cyan-400">*</span>
                </label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, startup MVP, custom CRM, or hiring opportunity..." 
                  required
                  className="w-full h-full min-h-[220px] bg-[#05080f]/60 border border-white/10 rounded-xl p-4 text-base text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder-white/30 font-medium resize-none"
                ></textarea>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-white/10">
              
              {/* Permission Checkbox */}
              <div className="flex items-center gap-3 text-sm font-light text-white/80">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="w-4 h-4 rounded-md border-white/30 bg-transparent text-cyan-500 focus:ring-0 cursor-pointer accent-[#0ea5e9]" 
                />
                <label htmlFor="permission" className="cursor-pointer text-xs sm:text-sm text-white/70">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all duration-300 group hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Transmit Message</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;