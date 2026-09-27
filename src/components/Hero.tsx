import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Compass, ExternalLink, Linkedin, Mail, MapPin, Award, CheckCircle2, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ExecutivePhoto } from './ExecutivePhoto';

interface HeroProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
  onExploreExpertise: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onDownloadResume, onExploreExpertise }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Abstract concentric rings visual from Professional Polish theme */}
      <div className="absolute right-[-40px] top-[60px] w-[420px] h-[420px] opacity-25 pointer-events-none hidden md:block">
        <div className="absolute inset-0 border-[40px] border-blue-500/30 rounded-full animate-pulse" />
        <div className="absolute inset-10 border-[20px] border-slate-500/20 rounded-full" />
        <div className="absolute inset-24 border-[1px] border-blue-400/50 rounded-full" />
      </div>

      {/* Subtle architectural grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Subtle gradient light pools */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Container Card with Professional Polish gradient and border */}
        <div className="relative bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Executive Title, Roles, Statement, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Executive Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#1e293b] border border-slate-700/80 text-xs font-semibold text-slate-300 mb-5 shadow-sm uppercase tracking-wider font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>ENTERPRISE KNOWLEDGE LEADER</span>
                <span className="text-slate-600">•</span>
                <span className="text-blue-400 font-bold">18+ Years</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] font-display"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              {/* Subtitle / Key Focus Domains */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight"
              >
                <span>Sales Enablement </span>
                <span className="text-blue-500">&</span>
                <span> Knowledge Strategy</span>
                <span className="text-white mx-2 hidden sm:inline">|</span>
                <span className="text-white font-medium block sm:inline mt-1 sm:mt-0">Competitive Intelligence</span>
              </motion.div>

              {/* Supporting statement strictly per user request */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-2xl"
              >
                {PERSONAL_INFO.statement}
              </motion.p>

              {/* Executive credential tags */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-300"
              >
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0f172a] border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hyderabad, India (Global Scope)</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0f172a] border border-slate-800">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>IIM Kozhikode Alum</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0f172a] border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Capgemini Manager</span>
                </div>
              </motion.div>

              {/* Two Elegant CTAs + Download Option (Professional Polish styled) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <button
                  type="button"
                  onClick={onExploreExpertise}
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-white text-[#0f172a] px-6 py-3 rounded font-bold text-sm uppercase tracking-wide transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Explore My Expertise</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/60 hover:bg-slate-800 px-6 py-3 rounded font-bold text-sm uppercase tracking-wide text-white transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>View Resume</span>
                </button>

                <button
                  type="button"
                  onClick={onDownloadResume}
                  title="Download formatted resume"
                  className="p-3 rounded border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Download Resume"
                >
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Quick Links & Contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-5 text-xs text-slate-400"
              >
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>linkedin.com/in/{PERSONAL_INFO.linkedinHandle}</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Executive Photo & Leadership Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col items-center lg:items-end"
            >
              <div className="w-full max-w-sm sm:max-w-md">
                <ExecutivePhoto className="h-[360px] sm:h-[400px] w-full" />
                
                <div className="mt-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <p className="text-xs text-slate-300 font-medium">
                    Supporting enterprise portfolios across <span className="text-blue-400 font-semibold">Consulting, Cloud, Apps, & Business Services</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
