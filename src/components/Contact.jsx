import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const emailAddress = "khushikumari882484@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    window.location.href = `mailto:${emailAddress}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    setStatus('Opening email client...');
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#080c14] border-t border-slate-800 text-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Centered */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3.5 py-1.5 rounded-full border border-cyan-800/40 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
            I am currently open to full-time engineering roles, freelance opportunities, and collaborative projects.
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md text-xs sm:text-sm">
            <span className="text-slate-300 font-mono select-all">
              {emailAddress}
            </span>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all active:scale-95 text-xs font-bold cursor-pointer"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
        </div>

        {/* Centered Contact Box with Browser Chrome */}
        <div className="bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:border-slate-700 transition-all duration-300">
          
          {/* Window Chrome Header Bar */}
          <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="px-3 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-[10px] font-mono text-slate-400">
              khushi.dev/contact
            </div>
            <span className="text-[10px] font-mono text-cyan-400">
              Secure Message
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. priya@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or opportunity..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {status && (
                  <span className="text-xs text-cyan-400 font-medium">
                    {status}
                  </span>
                )}
              </div>
            </form>

            {/* Social Quick Links Bar */}
            <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a
                href="https://github.com/myselfkhushi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>GitHub: @myselfkhushi</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-aa646030a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn: Khushi</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;