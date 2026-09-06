import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
            Academic & Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-400 mt-2 font-light">
            Rigorous grounding in executive strategic management, computer science engineering, and certified knowledge management disciplines.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic & Executive Education */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display">
                Executive Education & Degrees
              </h3>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-800 bg-[#1e293b] hover:border-slate-700 p-5 sm:p-6 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">
                      {edu.badge}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 tracking-tight">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 shrink-0 border border-slate-800">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-light">
                  Focus: {edu.focus}
                </p>

                {edu.location && (
                  <div className="mt-3 pt-3 border-t border-slate-700/80 text-[11px] font-mono text-slate-400">
                    Campus: {edu.location}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display">
                Professional Certifications
              </h3>
            </div>

            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-slate-800 bg-[#1e293b] hover:border-slate-700 p-5 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-blue-400 font-bold border border-slate-800">
                        {cert.type}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white mt-2 tracking-tight">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 border border-slate-800">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Authorized Issuing Body: {cert.issuer}</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1 font-mono text-[10px] uppercase">
                    <CheckCircle2 className="w-3 h-3" /> Credential Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
