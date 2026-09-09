import React, { useState } from 'react';
import { 
  BookOpen, Stethoscope, Sparkles, Check, 
  ArrowRight, X, ChevronRight, FileText, Lightbulb, Bookmark 
} from 'lucide-react';
import { EDUCATIONAL_GUIDES } from '../data/portfolioData';
import { EducationalGuide } from '../types';

export const GuidesSection: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<EducationalGuide | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const openGuideReader = (guide: EducationalGuide) => {
    setSelectedGuide(guide);
    setActiveChapterIndex(0);
  };

  const closeGuideReader = () => {
    setSelectedGuide(null);
  };

  return (
    <section id="guides" className="py-16 sm:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            04 / Clinical Knowledge Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Educational Resources & Survival Guides
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Transforming dense reference materials and intense hospital ward encounters into structured, reusable clinical wisdom that outlives single exams.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATIONAL_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-[#fafaf9] rounded-3xl border border-stone-200/90 shadow-sm hover:border-emerald-300 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
                    <Stethoscope className="w-4 h-4 text-emerald-700" />
                    <span>{guide.category === 'surgery' ? 'Surgical Rotation Manual' : 'Medicine Rotation Manual'}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-[11px] font-mono text-stone-600">
                    {guide.targetAudience}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">
                    {guide.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {guide.description}
                </p>

                {/* Topics Covered Pill Matrix */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                    Core Curriculum & Modules:
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {guide.topicsCovered.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Integration Highlight */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>AI-Assisted Study Protocol:</span>
                  </div>
                  <p className="text-xs text-stone-700 italic leading-relaxed">
                    "{guide.aiWorkflowTip}"
                  </p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => openGuideReader(guide)}
                className="w-full py-3 px-4 bg-stone-900 hover:bg-emerald-900 text-white rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-emerald-300" />
                <span>Read Sample Chapters & Clinical Pearls</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* The Core Methodology Quote Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              The Pedagogical Imperative
            </div>
            <p className="font-serif-quote text-base sm:text-lg text-stone-200 italic leading-relaxed">
              "I use AI and software to transform massive reference materials into focused resources around what students actually need. The broader goal is to turn scattered clinical experiences and information into clean, reusable knowledge rather than letting it evaporate after an exam."
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-4 py-2 rounded-xl bg-stone-800 text-xs font-mono text-stone-300 border border-stone-700">
              Active Recall • Bedside Systems
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Guide Reader Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#fafaf9] text-stone-900 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 relative">
            
            <button
              onClick={closeGuideReader}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-stone-200 pb-4 pr-10">
              <span className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
                Clinical Field Guide Reader
              </span>
              <h3 className="text-2xl font-bold font-serif-quote text-stone-900 mt-1">
                {selectedGuide.title}
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                {selectedGuide.subtitle}
              </p>
            </div>

            {/* Chapter Tabs */}
            <div className="py-4 border-b border-stone-200 flex gap-2 overflow-x-auto text-xs font-medium">
              {selectedGuide.sampleChapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl shrink-0 transition-all ${
                    activeChapterIndex === idx
                      ? 'bg-stone-900 text-white font-semibold'
                      : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  Chapter {idx + 1}
                </button>
              ))}
            </div>

            {/* Active Chapter Details */}
            {selectedGuide.sampleChapters[activeChapterIndex] && (
              <div className="py-6 space-y-5 animate-fadeIn">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                    Chapter Overview
                  </div>
                  <h4 className="text-xl font-bold font-serif-quote text-stone-900 mt-1">
                    {selectedGuide.sampleChapters[activeChapterIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mt-2">
                    {selectedGuide.sampleChapters[activeChapterIndex].summary}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    <Bookmark className="w-4 h-4 text-emerald-700" />
                    Key Methodological Takeaway:
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {selectedGuide.sampleChapters[activeChapterIndex].keyTakeaway}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950 text-emerald-50 border border-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    High-Yield Clinical Pearl:
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 font-serif-quote italic leading-relaxed">
                    "{selectedGuide.sampleChapters[activeChapterIndex].clinicalPearl}"
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>Authored by Mahbub Mahbub for Medical Rotators</span>
              <button
                onClick={closeGuideReader}
                className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl font-medium transition-colors"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
