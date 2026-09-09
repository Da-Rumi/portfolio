import React from 'react';
import { 
  Sparkles, Code2, Stethoscope, GraduationCap, 
  Users, Compass, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import { SKILL_GROUPS, CURRENT_EXPLORATIONS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-700" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-600" />;
      default: return <Sparkles className="w-5 h-5 text-stone-700" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            07 / Technical & Pedagogical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Technical Skills & Working Stack
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            The multi-disciplinary toolkit used to build software, diagnose clinical pathology, architect educational curricula, and empower grassroots learners.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200/70">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-serif-quote">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-stone-100/90 border border-stone-200 text-xs font-mono text-stone-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>Verified Competency</span>
                <span>Active Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Interests & Research Frontiers */}
        <div className="p-6 sm:p-10 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Exploratory Horizons
              </div>
              <h3 className="text-2xl font-bold font-serif-quote text-stone-100 mt-0.5">
                Current Research Interests & Explorations
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Active Investigation • 2026+
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            "I am interested in the rapidly changing relationship between AI and human creativity, learning, and software development. Areas I am actively exploring include:"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {CURRENT_EXPLORATIONS.map((interest, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-stone-800/60 border border-stone-700/60 flex items-start gap-3 text-xs text-stone-200"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold">
                  {idx + 1}
                </div>
                <span className="leading-snug">{interest}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
            <span>Always open to collaborative research & building</span>
            <a href="#contact" className="text-emerald-400 hover:underline flex items-center gap-1">
              <span>Propose a collaboration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
