import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_COMPETENCIES } from '../data/portfolioData';
import {
  Target,
  ShieldAlert,
  TrendingUp,
  Compass,
  ShieldCheck,
  LineChart,
  Briefcase,
  Layers,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Competency } from '../types';

export const ExpertiseSection: React.FC = () => {
  const [activeCompetencyId, setActiveCompetencyId] = useState<string>(CORE_COMPETENCIES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return Target;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'TrendingUp':
        return TrendingUp;
      case 'Compass':
        return Compass;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'LineChart':
        return LineChart;
      case 'Briefcase':
        return Briefcase;
      case 'Layers':
        return Layers;
      case 'Users':
        return Users;
      default:
        return Target;
    }
  };

  const selectedCompetency =
    CORE_COMPETENCIES.find((c) => c.id === activeCompetencyId) || CORE_COMPETENCIES[0];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
            Strategic Capabilities & Domains
          </h2>
          <p className="text-base text-slate-400 mt-2 font-light">
            The 9 cornerstone disciplines developed across 18+ years of driving sales enablement, enterprise knowledge governance, and competitive intelligence. Click any competency to inspect deliverables and execution mechanics.
          </p>
        </div>

        {/* Competencies Layout: 9 Interactive Cards + Expanded Inspection View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Interactive Capability Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CORE_COMPETENCIES.map((comp) => {
              const Icon = getIcon(comp.iconName);
              const isActive = comp.id === activeCompetencyId;

              return (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => setActiveCompetencyId(comp.id)}
                  onMouseEnter={() => setActiveCompetencyId(comp.id)}
                  className={`group text-left p-4 sm:p-5 rounded-xl transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#1e293b] border-blue-500 shadow-md shadow-blue-500/10'
                      : 'bg-[#1e293b]/40 border-slate-800 hover:bg-[#1e293b]/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800/90'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                        {comp.category}
                      </span>
                    </div>

                    <h3
                      className={`text-sm font-bold tracking-tight ${
                        isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}
                    >
                      {comp.title}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {comp.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span
                      className={`font-semibold uppercase tracking-wider text-[11px] transition-colors ${
                        isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {isActive ? 'Active Focus' : 'Reveal Details'}
                    </span>
                    <span className="text-blue-500 font-bold text-sm">
                      {isActive ? '•' : '+'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Sticky Inspector Panel styled as crisp Professional Polish contrast card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCompetency.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 p-6 lg:p-7 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {selectedCompetency.category} Core Capability
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500">
                    Validated
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-display">
                  {selectedCompetency.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {selectedCompetency.summary}
                </p>

                {/* Tactical execution details */}
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                    Execution Mechanics & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedCompetency.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables Chips */}
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Core Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCompetency.keyDeliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="bg-slate-200 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-300"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold uppercase tracking-wider">Direct Enterprise Leadership</span>
                  <span className="text-blue-600 font-mono font-bold">18+ Years</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
