import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STRATEGIC_WORK } from '../data/portfolioData';
import {
  Cpu,
  Swords,
  BarChart3,
  Award,
  CheckCircle2,
  Rocket,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';
import { StrategicCapability } from '../types';

export const StrategicWork: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(STRATEGIC_WORK[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return Cpu;
      case 'Swords':
        return Swords;
      case 'BarChart3':
        return BarChart3;
      case 'Award':
        return Award;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Rocket':
        return Rocket;
      default:
        return Cpu;
    }
  };

  const activeCapability =
    STRATEGIC_WORK.find((item) => item.id === activeTabId) || STRATEGIC_WORK[0];

  return (
    <section id="strategic-work" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
            Strategic Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
            What I Do: High-Value Strategic Pillars
          </h2>
          <p className="text-base text-slate-400 mt-2 font-light">
            Structured strategic frameworks engineered to transform institutional knowledge, competitive surveillance, and market analyst feedback into commercial wins.
          </p>
        </div>

        {/* Tabbed Executive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {STRATEGIC_WORK.map((item) => {
              const Icon = getIcon(item.iconName);
              const isActive = item.id === activeTabId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTabId(item.id)}
                  className={`group text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#1e293b] border-blue-500 shadow-md shadow-blue-500/10'
                      : 'bg-[#1e293b]/40 border-slate-800 hover:bg-[#1e293b]/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800/90'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold tracking-tight ${
                          isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {item.metricHighlight}
                      </p>
                    </div>
                  </div>

                  <span className="text-blue-500 font-bold text-sm">
                    {isActive ? '•' : '+'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Strategic Capability Presentation */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-800 bg-[#1e293b] p-6 sm:p-8 shadow-2xl"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-700/80">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
                      Enterprise Strategic Pillar
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight font-display">
                      {activeCapability.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {activeCapability.subtitle}
                    </p>
                  </div>

                  <div className="self-start sm:self-auto px-3.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400 font-bold whitespace-nowrap">
                    {activeCapability.metricHighlight}
                  </div>
                </div>

                {/* Overview */}
                <div className="mt-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Strategic Purpose
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed font-normal">
                    {activeCapability.overview}
                  </p>
                </div>

                {/* Strategic Commercial Value */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
                    Commercial & Operational Value
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-light">
                    {activeCapability.strategicValue}
                  </p>
                </div>

                {/* 4 Execution Pillars */}
                <div className="mt-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Execution Architecture & Methodologies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCapability.executionPillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5"
                      >
                        <span className="w-5 h-5 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center text-[10px] font-mono shrink-0 font-bold mt-0.5">
                          0{idx + 1}
                        </span>
                        <span className="text-xs text-slate-300 leading-relaxed font-medium">
                          {pillar}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flagship Deliverable */}
                <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase font-bold tracking-wider">
                      FLAGSHIP ASSET / OUTPUT
                    </span>
                    <strong className="text-slate-200 font-semibold text-xs sm:text-sm">
                      {activeCapability.keyDeliverable}
                    </strong>
                  </div>
                  <span className="text-blue-400 font-mono text-xs font-bold self-start sm:self-auto uppercase tracking-wider">
                    Active Governance
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
