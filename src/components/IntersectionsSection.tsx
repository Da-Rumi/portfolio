import React, { useState } from 'react';
import { 
  Stethoscope, Sparkles, Users, Cpu, Globe, 
  ArrowRight, Check, Quote, Layers, Lightbulb, Compass 
} from 'lucide-react';
import { INTERSECTIONS_DATA } from '../data/portfolioData';

interface IntersectionsProps {
  selectedId?: string;
  onSelectProject?: (projectId: string) => void;
}

export const IntersectionsSection: React.FC<IntersectionsProps> = ({ selectedId, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedId || INTERSECTIONS_DATA[0].id);

  const currentIntersection = INTERSECTIONS_DATA.find(item => item.id === activeTab) || INTERSECTIONS_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-teal-600" />;
      default: return <Layers className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="intersections" className="py-16 sm:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            02 / The Master Thesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Building at the Intersections
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            "I used to think I needed to choose one path. Now I think the intersections between fields can be where the most interesting problems and solutions exist."
          </p>
        </div>

        {/* 5 Intersection Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-4">
          {INTERSECTIONS_DATA.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200/80 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-stone-400'}`}></span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Intersection Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info */}
          <div className="lg:col-span-7 bg-[#fafaf9] rounded-3xl p-6 sm:p-9 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  {getIcon(currentIntersection.iconName)}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    {currentIntersection.primaryField} × {currentIntersection.secondaryField}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900">
                    {currentIntersection.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {currentIntersection.description}
              </p>

              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
                  Concrete Built Solutions & Implementations:
                </div>
                <div className="space-y-2">
                  {currentIntersection.concreteOutputs.map((output, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/80 space-y-2">
              <Quote className="w-4 h-4 text-emerald-800" />
              <p className="font-serif-quote italic text-stone-800 text-xs sm:text-sm leading-relaxed">
                "{currentIntersection.quote}"
              </p>
            </div>
          </div>

          {/* Quick Context & Practical Framework */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  The Builder's Perspective
                </span>
                <span className="text-[11px] font-mono text-stone-500">Pragmatic Tooling</span>
              </div>

              <h4 className="text-lg font-bold text-stone-100 font-serif-quote">
                "What would the ideal tool for this particular problem look like, and can I build it?"
              </h4>

              <p className="text-xs text-stone-400 leading-relaxed">
                Traditional software often forces users to change their behavior to match rigid database schemas. By combining domains, we construct bespoke software around the nuanced human workflows of medical rotations, grassroots classrooms, and focused deep work.
              </p>

              <div className="p-4 rounded-xl bg-stone-800/70 border border-stone-700/60 space-y-2">
                <div className="text-xs font-semibold text-stone-200 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Why AI changes everything:
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  AI reduces the friction of software development, allowing a single clinician-builder to turn an acute bedside pain point into a deployed, functional software tool in days rather than quarters.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>View Related Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* 5-Pillar Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
          {INTERSECTIONS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer text-left space-y-1.5 ${
                activeTab === item.id 
                  ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' 
                  : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100/80'
              }`}
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                Pillar {item.id === 'med-software' ? '01' : item.id === 'edu-ai' ? '02' : item.id === 'community-tech' ? '03' : item.id === 'productivity-ai' ? '04' : '05'}
              </div>
              <div className="text-xs font-bold text-stone-900 leading-tight">
                {item.title}
              </div>
              <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
