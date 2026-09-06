import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { AlertCircle, Compass, CheckCircle2, ArrowRight, BarChart2, Shield, Users, Award } from 'lucide-react';
import { CaseStudy } from '../types';

export const CaseStudies: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'win-loss':
        return BarChart2;
      case 'global-km':
        return Users;
      case 'battlecards':
        return Shield;
      case 'analyst-insights':
        return Award;
      default:
        return Compass;
    }
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
            Executive Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
            Featured Strategic Impact
          </h2>
          <p className="text-base text-slate-400 mt-2 font-light">
            Structured breakdowns of enterprise initiatives: Challenge → Approach → Outcome, demonstrating verifiable value across Tier-1 IT pursuits and global knowledge governance.
          </p>
        </div>

        {/* Case Study Nav Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CASE_STUDIES.map((item) => {
            const Icon = getDomainIcon(item.id);
            const isActive = item.id === selectedCaseId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCaseId(item.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#1e293b] border-blue-500 shadow-md shadow-blue-500/10'
                    : 'bg-[#1e293b]/40 border-slate-800 hover:bg-[#1e293b]/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded flex items-center justify-center ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                      {item.organization.split('—')[0].trim()}
                    </span>
                  </div>

                  <h3
                    className={`text-sm font-bold tracking-tight ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className={isActive ? 'text-blue-400 font-bold uppercase tracking-wider text-[10px]' : 'text-slate-400 uppercase text-[10px]'}>
                    Inspect
                  </span>
                  <span className="text-blue-500 font-bold text-sm">
                    {isActive ? '•' : '+'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-800 bg-[#1e293b] p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            {/* Case Study Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-950 text-blue-400 border border-blue-800/60">
                    {activeCase.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeCase.organization}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                  {activeCase.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 font-medium">
                  {activeCase.subtitle}
                </p>
              </div>

              {/* Metrics Pills */}
              <div className="flex flex-wrap gap-2.5">
                {activeCase.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-left"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">
                      {m.label}
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-blue-400 font-display">
                      {m.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured 3-Tier Grid: Challenge → Approach → Outcome */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 1. Challenge */}
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded bg-red-950/60 text-red-400 border border-red-800/40 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 font-mono">
                      01. The Challenge
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {activeCase.challenge}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Context: High-Stakes Pursuit
                </div>
              </div>

              {/* 2. Approach */}
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded bg-blue-950/60 text-blue-400 border border-blue-800/40 flex items-center justify-center">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 font-mono">
                      02. Strategic Approach
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activeCase.approach.map((step, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-blue-400 font-mono shrink-0 mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Methodology: Governance & CI Alignment
                </div>
              </div>

              {/* 3. Outcome */}
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                      03. Measurable Outcome
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activeCase.outcome.map((res, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-mono shrink-0 mt-0.5">✓</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Result: Verifiable Commercial Lift
                </div>
              </div>
            </div>

            {/* Tags footer */}
            <div className="mt-8 pt-5 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 mr-1 text-[11px] font-mono">Core Capabilities:</span>
                {activeCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-slate-400 font-mono text-[10px] uppercase">
                Strictly factual per professional resume
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
