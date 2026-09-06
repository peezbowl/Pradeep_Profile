import React from 'react';
import { motion } from 'motion/react';
import { CAREER_JOURNEY } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export const CareerJourney: React.FC = () => {
  return (
    <section id="career" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
            18+ Years Leadership Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
            Career Progression & Milestones
          </h2>
          <p className="text-base text-slate-400 mt-2 font-light">
            A sustained record of building and governing enterprise knowledge systems, competitive intelligence engines, and pursuit enablement across premier global consulting firms.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-8 border-l border-slate-700 ml-4 md:ml-6 space-y-12">
          {CAREER_JOURNEY.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot from Professional Polish theme */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-6 w-3 h-3 rounded-full ring-4 ring-[#0f172a] ${
                    isCurrent ? 'bg-blue-500 ring-blue-500/20' : 'bg-slate-600'
                  }`}
                />

                {/* Career Content Card */}
                <div className="rounded-2xl border border-slate-800 bg-[#1e293b] hover:border-slate-700 transition-all p-6 sm:p-8 shadow-xl">
                  {/* Header: Company, Role, Period */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-slate-700/80">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                          {item.company}
                        </span>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Current Leadership
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-blue-400 mt-1">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900/80 border border-slate-800 font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900/80 border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Measurable Business Contributions */}
                  <div className="mt-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                      Measurable Impact & Key Contributions
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 leading-relaxed font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Tools & Impact Metric Banner */}
                  <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-slate-400 mr-1 text-[11px] font-mono">
                        Domains & Systems:
                      </span>
                      {item.technologiesAndTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-blue-400 font-mono font-bold self-start sm:self-auto text-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.impactMetric}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
