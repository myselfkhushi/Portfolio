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
    // Simple mailto fallback
    window.location.href = `mailto:${emailAddress}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#080c14] border-t border-slate-800/80 text-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Centered */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg">
            Have an open role, project inquiry, or just want to connect? Send me a message or reach out directly.
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm">
            <span className="text-slate-300 font-mono select-all">
              {emailAddress}
            </span>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-colors text-xs font-semibold"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
        </div>

        {/* Centered Contact Box */}
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Send Message
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
            <span>&bull;</span>
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
    </section>
  );
};

export default Contact;