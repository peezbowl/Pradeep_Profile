import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO, CAREER_JOURNEY, EDUCATION_LIST, CERTIFICATIONS_LIST, CORE_COMPETENCIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
PRADEEP KUMAR
Sales Enablement | Knowledge Strategy | Competitive Intelligence
Location: Hyderabad | Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.statement}
${PERSONAL_INFO.bio}

CORE COMPETENCIES
${CORE_COMPETENCIES.map((c) => c.title).join(' | ')}

PROFESSIONAL EXPERIENCE
${CAREER_JOURNEY.map(
  (j) => `
${j.company} | ${j.role} (${j.period})
${j.summary}
Key Highlights:
${j.highlights.map((h) => `• ${h}`).join('\n')}
`
).join('\n')}

EDUCATION
${EDUCATION_LIST.map((e) => `• ${e.degree} - ${e.institution}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS_LIST.map((c) => `• ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-[#0B1120] text-slate-100 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-slate-800 bg-slate-900/90 print:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Pradeep Kumar — Professional Resume
                </h3>
                <span className="text-[11px] text-slate-400 font-mono">
                  18+ Years Enterprise Experience
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                title="Copy ATS friendly text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable & Readable Document Body */}
          <div className="overflow-y-auto p-6 sm:p-10 text-slate-200 space-y-8 print:p-0 print:text-black print:bg-white">
            {/* Resume Header */}
            <div className="text-center border-b border-slate-800 pb-6 print:border-black">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display print:text-black">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-blue-400 mt-1 print:text-gray-800">
                {PERSONAL_INFO.subtitles}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-slate-300 font-mono print:text-gray-700">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.linkedinUrl}
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 font-mono print:text-black">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-900">
                Strategic Sales Enablement and Knowledge Management professional with 18+ years of experience supporting global technology and consulting portfolios. Expertise in knowledge governance, analyst engagement, competitive intelligence, deal pursuit support across Consulting, Cloud Infrastructure, Application Services, and Business Services. Partner with global portfolio leaders to deliver win/loss insights, strengthen proposal readiness, and enable data-driven sales strategies across North American and global markets.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 font-mono print:text-black">
                CORE COMPETENCIES
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed print:bg-gray-100 print:text-black print:border-gray-300">
                Sales Enablement Strategy | Competitive Intelligence & Battlecards | Win/Loss Analysis | Deal Pursuit & Proposal Support | Knowledge Management Strategy | Content Governance & Asset Lifecycle | Analyst Relations (e.g., Gartner, Forrester) | Stakeholder Engagement & Collaboration
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5 font-mono print:text-black">
                KEY ACHIEVEMENTS
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-gray-900">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Enabled structured sales enablement and knowledge programs supporting high-volume enterprise deal environments, strengthening competitive positioning across global pursuit teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Established scalable knowledge governance practices, improving accessibility, reuse, and consistency of sales and delivery assets to support pursuit readiness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Delivered actionable competitive and market insights through win/loss intelligence, analyst inputs, and structured battlecards to support data-informed deal strategies.</span>
                </li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 font-mono print:text-black">
                PROFESSIONAL EXPERIENCE
              </h2>

              {CAREER_JOURNEY.map((job) => (
                <div key={job.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-1.5 print:border-gray-300">
                    <strong className="text-sm sm:text-base font-bold text-white print:text-black">
                      {job.company} | <span className="text-blue-400 font-medium print:text-gray-800">{job.role}</span>
                    </strong>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 mt-2 print:text-gray-900">
                    {job.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5 font-mono print:text-black">
                EDUCATION
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-900">
                {EDUCATION_LIST.map((edu) => (
                  <li key={edu.id} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      <strong className="text-white print:text-black">{edu.degree}</strong> — {edu.institution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5 font-mono print:text-black">
                CERTIFICATIONS
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-900">
                {CERTIFICATIONS_LIST.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>
                      <strong className="text-white print:text-black">{cert.title}</strong> — {cert.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer close */}
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400 print:hidden">
            <span>Verified credentials for Pradeep Kumar</span>
            <button
              type="button"
              onClick={onClose}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
