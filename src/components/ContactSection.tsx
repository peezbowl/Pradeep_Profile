import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Phone, Copy, Check, Send, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Strategic Advisory',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Executive Invitation & Contact Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
                Executive Engagement
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
                Let’s Connect
              </h2>
              <p className="text-base text-slate-400 mt-3 leading-relaxed font-light">
                Available for strategic leadership, enterprise sales enablement advisory, knowledge governance roadmaps, and competitive intelligence programs across global markets.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Email Communication
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Professional Network
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                    </span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-colors cursor-pointer"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location & Phone Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-slate-900 text-slate-300 flex items-center justify-center shrink-0 border border-slate-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Base Location
                    </span>
                    <strong className="text-xs sm:text-sm text-slate-200 font-semibold">
                      {PERSONAL_INFO.location}
                    </strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-slate-900 text-slate-300 flex items-center justify-center shrink-0 border border-slate-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Direct Phone
                    </span>
                    <strong className="text-xs sm:text-sm text-slate-200 font-semibold font-mono">
                      {PERSONAL_INFO.phone}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility statement */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-light">
                18+ years supporting North American and global market enterprises across Consulting, Cloud Infrastructure, Application Services, and Business Services.
              </span>
            </div>
          </div>

          {/* Right Column: Executive Message / Consultation Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-[#1e293b] p-6 sm:p-8 shadow-2xl">
              <div className="pb-4 mb-5 border-b border-slate-700/80">
                <h3 className="text-lg font-bold text-white tracking-tight font-display">
                  Initiate Executive Dialogue
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Send a direct message regarding advisory, deal enablement, or leadership opportunities.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Thank You for Connecting</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto font-light">
                    Your inquiry has been received. You can also send an email directly to{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        inquiryType: 'Strategic Advisory',
                        message: '',
                      });
                    }}
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Organization"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Topic of Discussion
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Strategic Advisory">Strategic Advisory</option>
                        <option value="Sales Enablement & Pursuits">Sales Enablement & Pursuits</option>
                        <option value="Knowledge Governance & KM">Knowledge Governance & KM</option>
                        <option value="Win/Loss & Competitive Intelligence">Win/Loss & Competitive Intelligence</option>
                        <option value="Executive Opportunity">Executive Leadership Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Message / Objective *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your strategic objectives, portfolio requirements, or discussion points..."
                      className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Executive Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
