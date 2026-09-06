import React from 'react';
import { ArrowUp, Linkedin, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded overflow-hidden border border-blue-500/40 bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              <img
                src={PERSONAL_INFO.photoUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'}
                alt="Pradeep Kumar"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight block font-display">
                Pradeep Kumar
              </span>
              <span className="text-[11px] text-slate-400 font-light">
                Sales Enablement • Knowledge Strategy • Competitive Intelligence
              </span>
            </div>
          </div>

          {/* Nav Quicklinks */}
          <div className="flex flex-wrap items-center justify-center gap-5 uppercase text-[11px] font-bold tracking-wider">
            <a href="#expertise" className="hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#metrics" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#career" className="hover:text-white transition-colors">
              Career
            </a>
            <a href="#credentials" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#insights" className="hover:text-white transition-colors">
              Insights
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p className="font-light">
            © {new Date().getFullYear()} Pradeep Kumar. Professional Executive Portfolio. Strictly factual per executive resume.
          </p>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase">
            <MapPin className="w-3 h-3 text-blue-400" />
            <span>Hyderabad, India • Global Pursuits</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
