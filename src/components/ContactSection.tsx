import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
              Executive Engagement
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight font-display">
              Let’s Connect
            </h2>
            <p className="text-base text-slate-400 mt-3 leading-relaxed font-light max-w-2xl mx-auto">
              Available for strategic leadership, enterprise sales enablement advisory, knowledge governance roadmaps, and competitive intelligence programs across global markets.
            </p>
          </div>

          {/* Direct Contact Channels Grid */}
          <div className="space-y-3">
            {/* Top Row: Email & LinkedIn Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Email Communication
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-[#1e293b] border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">
                      Professional Network
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
                    </span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-colors cursor-pointer shrink-0"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Row: Location & Phone Cards */}
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

            {/* Credibility statement */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start sm:items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed font-light">
                18+ years supporting North American and global market enterprises across Consulting, Cloud Infrastructure, Application Services, and Business Services.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
