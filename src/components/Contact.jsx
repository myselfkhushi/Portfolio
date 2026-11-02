import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const emailAddress = "khushikumari882484@gmail.com";
  const WEB3FORMS_KEY = "ca75d976-b9fe-4dd7-9950-b60db2fff3d0";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', text: 'Message sent successfully! ✓' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-zinc-50 border-t border-zinc-200 text-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Centered */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-white/80 px-3.5 py-1.5 rounded-full border border-zinc-300/50 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
            I am currently open to full-time engineering roles, freelance opportunities, and collaborative projects.
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 border border-zinc-300/50 shadow-md text-xs sm:text-sm">
                <a href={`mailto:${emailAddress}`} className="px-3 py-1 rounded-full bg-zinc-100/50 text-zinc-950 border border-zinc-300/50 hover:bg-zinc-950 hover:text-white transition-all text-xs font-bold cursor-pointer">Email Me</a>
            <span className="text-zinc-300 font-mono select-all">
              {emailAddress}
            </span>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 rounded-full bg-zinc-100/50 text-zinc-950 border border-zinc-300/50 hover:bg-zinc-950 hover:text-zinc-950 transition-all active:scale-95 text-xs font-bold cursor-pointer"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
        </div>

        {/* Centered Contact Box with Browser Chrome */}
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden hover:border-zinc-300 transition-all duration-300">
          
          {/* Window Chrome Header Bar (MacBook Style) */}
          <div className="px-5 py-3 bg-gradient-to-b from-zinc-50 to-zinc-200/80 border-b border-zinc-300 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 w-1/4">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></span>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="px-6 py-0.5 rounded-md border border-zinc-300/60 bg-white/80 text-[10px] font-mono text-zinc-500 shadow-sm flex items-center gap-1.5">
                <span className="opacity-50">
                  <svg className="w-2.5 h-2.5 inline-block -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </span>
                khushi.dev/contact
              </div>
            </div>

            <div className="w-1/4 flex justify-end">
              <span className="text-[10px] font-mono text-zinc-400">
                Secure
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Khushi"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/80 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. khushi@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/80 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all duration-200"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-300">
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
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-100/80 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-zinc-950 text-white font-bold text-sm hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-950/10 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {status.text && (
                  <span className={`text-xs font-medium ${status.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {status.text}
                  </span>
                )}
              </div>
            </form>

            {/* Social Quick Links Bar */}
            <div className="mt-8 pt-8 border-t border-zinc-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600">
              <a
                href="https://github.com/myselfkhushi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
              >
                <span>GitHub: @myselfkhushi</span>
              </a>
              <span className="text-zinc-300">&bull;</span>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-aa646030a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
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
