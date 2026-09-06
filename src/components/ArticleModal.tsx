import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, BookOpen, Share2, Check, ArrowLeft } from 'lucide-react';
import { ThoughtLeadershipArticle } from '../types';

interface ArticleModalProps {
  article: ThoughtLeadershipArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-[#0B1120] text-slate-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                title="Copy Link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Article Content */}
          <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
            <div>
              <span className="text-xs font-mono text-slate-400">Executive Thought Leadership</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight leading-snug font-display">
                {article.title}
              </h2>
              <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                <span>By Pradeep Kumar</span>
                <span>•</span>
                <span>{article.publishedDate}</span>
              </div>
            </div>

            {/* Key Takeaways Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-blue-900/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5">
                Executive Takeaways
              </h3>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <span className="text-blue-400 font-bold shrink-0">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {article.fullContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Author Attribution Card */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4 bg-slate-900/40 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center font-bold text-white shrink-0 font-display">
                PK
              </div>
              <div className="text-xs">
                <strong className="text-sm text-white font-bold block">Pradeep Kumar</strong>
                <span className="text-slate-400">
                  Manager, Sales Enablement & Knowledge Governance • Capgemini
                </span>
                <p className="text-slate-400 mt-1">
                  18+ years leading enterprise knowledge ecosystems, win/loss intelligence, and pursuit readiness across global markets.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
            </button>
            <span>Pradeep Kumar Executive Library</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
