import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IMPACT_METRICS } from '../data/portfolioData';
import { BarChart2, ShieldCheck, Users, Briefcase, FileCheck, Award, Layers } from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Strategy', 'Deal Pursuit', 'Governance', 'Scale'];

  const filteredMetrics =
    selectedFilter === 'All'
      ? IMPACT_METRICS
      : IMPACT_METRICS.filter((m) => m.category === selectedFilter);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return Award;
      case 'members':
        return Users;
      case 'assets':
        return Layers;
      case 'winloss':
        return BarChart2;
      case 'pursuits':
        return Briefcase;
      case 'growth':
        return FileCheck;
      case 'analysts':
        return ShieldCheck;
      default:
        return BarChart2;
    }
  };

  return (
    <section id="metrics" className="py-20 bg-[#0f172a] relative border-t border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
              Enterprise Impact at Scale
            </h2>
            <p className="text-base text-slate-400 mt-2 max-w-2xl font-light">
              18+ years of measured contributions driving commercial differentiation, pursuit velocity, and global knowledge governance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-800/40 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid styled to Professional Polish theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMetrics.map((metric, idx) => {
            const Icon = getMetricIcon(metric.id);
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/60 hover:border-slate-700 p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      {metric.category}
                    </span>
                    <div className="w-8 h-8 rounded bg-slate-800 text-slate-400 group-hover:bg-blue-600/20 group-hover:text-blue-400 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Big Metric Display in blue-400 font-bold */}
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 tracking-tight font-display">
                    {metric.value}
                  </div>

                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-200 mt-2">
                    {metric.label}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-blue-400/90">{metric.sublabel}</span>
                  <span className="text-slate-400 font-mono text-[10px] uppercase">
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
