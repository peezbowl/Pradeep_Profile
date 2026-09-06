import React, { useState } from 'react';
import { motion } from 'motion/react';
import { THOUGHT_LEADERSHIP } from '../data/portfolioData';
import { BookOpen, Clock, ArrowRight, Sparkles, ExternalLink, Linkedin } from 'lucide-react';
import { ThoughtLeadershipArticle } from '../types';
import { ArticleModal } from './ArticleModal';

export const InsightsPerspectives: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ThoughtLeadershipArticle | null>(null);

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#0f172a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-[11px] font-bold text-blue-400 tracking-widest uppercase">
              Thought Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight font-display">
              Insights & Perspectives
            </h2>
            <p className="text-base text-slate-400 mt-2 max-w-2xl font-light">
              Strategic perspectives on knowledge architecture, competitive war rooms, win/loss mechanics, and commercial sales enablement.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/pkumariimk/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-xs font-bold uppercase tracking-wide text-white transition-all self-start md:self-auto cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THOUGHT_LEADERSHIP.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl border border-slate-800 bg-[#1e293b] hover:border-slate-700 p-6 sm:p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-900 text-blue-400 border border-slate-800">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3 font-light">
                  {article.excerpt}
                </p>

                {/* Key takeaway preview */}
                <div className="mt-4 pt-3 border-t border-slate-700/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider block mb-1.5">
                    Core Thesis:
                  </span>
                  <p className="text-xs text-slate-300 italic">
                    "{article.keyTakeaways[0]}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {article.publishedDate}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Read Full Perspective</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
