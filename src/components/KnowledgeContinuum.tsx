import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, ShieldAlert, LineChart, Briefcase, Award, ArrowRight, Sparkles } from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  name: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  metric: string;
  mechanisms: string[];
  color: string;
  glow: string;
}

const STAGES: Stage[] = [
  {
    id: 'knowledge',
    step: '01',
    name: 'Knowledge',
    badge: 'Foundation',
    icon: Database,
    tagline: 'Enterprise Intellectual Capital',
    description: 'Governing 2,000+ curated assets, case studies, and delivery templates across SharePoint & Drupal for 25,000+ practitioners.',
    metric: '2,000+ Assets Governed',
    mechanisms: ['Taxonomy & Metadata', 'Asset Harvesting Cycles', 'Quality Gatekeeping'],
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 'intelligence',
    step: '02',
    name: 'Intelligence',
    badge: 'Sensing',
    icon: ShieldAlert,
    tagline: 'Tier-1 Competitor & Market Sensing',
    description: 'Continuous surveillance of Tier-1 IT rivals, decoding pricing models, delivery postures, and commercial vulnerabilities.',
    metric: 'Tier-1 IT Rivals Monitored',
    mechanisms: ['Living Battlecards', 'Earnings Call Analysis', 'Competitor SWOTs'],
    color: 'from-indigo-500 to-cyan-500',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 'insight',
    step: '03',
    name: 'Insight',
    badge: 'Synthesis',
    icon: LineChart,
    tagline: 'Empirical Win/Loss & Analyst Synthesis',
    description: 'Structured diagnosis across ~60 deals per quarter and 6–8 annual Gartner/Forrester briefings uncovering recurrent buying truths.',
    metric: '~60 Deals/Qtr Diagnosed',
    mechanisms: ['Pricing Sensitivity Analysis', 'Analyst Evaluative Syntheses', 'Loss Pattern Mapping'],
    color: 'from-cyan-500 to-blue-400',
    glow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    id: 'enablement',
    step: '04',
    name: 'Enablement',
    badge: 'Execution',
    icon: Briefcase,
    tagline: 'High-Velocity Pursuit Readiness',
    description: 'Direct war-room support across 50+ annual enterprise pursuits, infusing winning themes, proof points, and objection counters.',
    metric: '50+ Pursuits Powered',
    mechanisms: ['Executive Win Themes', 'Modular Proposal Proofs', 'Red Team Challenge Reviews'],
    color: 'from-blue-400 to-emerald-400',
    glow: 'rgba(56, 189, 248, 0.3)',
  },
  {
    id: 'impact',
    step: '05',
    name: 'Impact',
    badge: 'Outcome',
    icon: Award,
    tagline: 'Commercial Superiority & Win-Rate Lift',
    description: 'Delivering measurable differentiation, shortened bid response latency, and defended pricing premiums in competitive enterprise markets.',
    metric: '18+ Yrs Proven Value',
    mechanisms: ['Enhanced Proposal Win Rates', 'Accelerated RFP Cycles', 'Defended Price Realization'],
    color: 'from-emerald-400 to-blue-500',
    glow: 'rgba(52, 211, 153, 0.3)',
  },
];

export const KnowledgeContinuum: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('enablement');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[3];

  return (
    <div className="w-full relative rounded-2xl border border-slate-800 bg-[#1e293b] p-6 lg:p-8 shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
        style={{ background: activeStage.glow }}
      />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-700/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/50">
              <Sparkles className="w-3 h-3" />
              Strategic Methodology
            </span>
            <span className="text-xs text-slate-400 font-mono">Enterprise Framework</span>
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-white mt-1 tracking-tight font-display">
            The Knowledge-to-Impact Continuum
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-light">
          Interactive transformation flow: how raw organizational knowledge is distilled into decisive commercial outcomes.
        </p>
      </div>

      {/* Interactive Horizontal Pipeline */}
      <div className="mt-6 relative">
        {/* Subtle connector track */}
        <div className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-slate-800 z-0">
          {/* Animated active energy progress line */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
            animate={{
              width: `${(STAGES.findIndex((s) => s.id === activeStageId) / (STAGES.length - 1)) * 100}%`,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          />
        </div>

        {/* 5 Stage Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`group relative text-left p-3.5 rounded-xl transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-blue-500 shadow-md shadow-blue-500/10'
                    : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center transition-all ${
                      isActive
                        ? `bg-gradient-to-br ${stage.color} text-white shadow-md`
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                    {stage.step}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {stage.badge}
                    </span>
                    {idx < STAGES.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-slate-600 hidden md:inline group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>
                  <h4 className={`text-sm font-bold mt-0.5 tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 font-mono">
                    {stage.metric}
                  </p>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="active-stage-indicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-blue-500 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 lg:p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-950 text-blue-400 border border-blue-800/60">
                    STAGE {activeStage.step} OF 05
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {activeStage.tagline}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight font-display">
                  {activeStage.name} Engine
                </h4>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed font-light">
                  {activeStage.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeStage.mechanisms.map((mech) => (
                    <span
                      key={mech}
                      className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                    >
                      {mech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center bg-slate-950 border border-slate-800 rounded-xl p-4 lg:p-5">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">
                  Measurable Operational Output
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-blue-400 mt-1 font-display">
                  {activeStage.metric}
                </span>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  Systematically verified across Capgemini, Accenture, and enterprise portfolios over 18+ years.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Next Continuum Stage</span>
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = STAGES.findIndex((s) => s.id === activeStageId);
                      const nextIndex = (currentIndex + 1) % STAGES.length;
                      setActiveStageId(STAGES[nextIndex].id);
                    }}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                  >
                    Advance <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
