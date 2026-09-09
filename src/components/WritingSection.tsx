import React, { useState } from 'react';
import { 
  BookOpen, Clock, ArrowRight, X, Quote, 
  Sparkles, FileText, CheckCircle2 
} from 'lucide-react';
import { ESSAYS_DATA } from '../data/portfolioData';
import { Essay } from '../types';

export const WritingSection: React.FC = () => {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  return (
    <section id="writing" className="py-16 sm:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            06 / Ideas, Philosophy & Field Notes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Essays & Field Notes
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Reflections on polymathic learning, clinical reasoning, pedagogical systems, and the evolving relationship between human creativity and AI.
          </p>
        </div>

        {/* Essay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ESSAYS_DATA.map((essay) => (
            <div
              key={essay.id}
              className="bg-[#fafaf9] rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="text-emerald-800 font-bold uppercase">{essay.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {essay.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif-quote text-stone-900 leading-snug">
                  {essay.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {essay.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80">
                <button
                  onClick={() => setSelectedEssay(essay)}
                  className="w-full py-2.5 px-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 group"
                >
                  <span>Read Full Field Note</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Essay Reader Modal */}
      {selectedEssay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#fafaf9] text-stone-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-10 relative">
            
            <button
              onClick={() => setSelectedEssay(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-stone-200 pb-5 pr-10 space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                <span className="text-emerald-800 font-bold uppercase">{selectedEssay.category}</span>
                <span>•</span>
                <span>{selectedEssay.readTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900 leading-tight">
                {selectedEssay.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {selectedEssay.subtitle}
              </p>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {selectedEssay.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="my-6 p-5 rounded-2xl bg-white border border-stone-200/90 space-y-2">
                <Quote className="w-4 h-4 text-emerald-800" />
                <p className="font-serif-quote text-sm sm:text-base text-stone-900 italic leading-relaxed">
                  "{selectedEssay.keyQuote}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>Mahbub Mahbub • Ideas & Writing</span>
              <button
                onClick={() => setSelectedEssay(null)}
                className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl font-medium transition-colors"
              >
                Close Note
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
