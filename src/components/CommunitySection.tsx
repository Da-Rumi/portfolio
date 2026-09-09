import React from 'react';
import { 
  Users, GraduationCap, Code2, Stethoscope, 
  BarChart3, Activity, HeartHandshake, CheckCircle2, Quote, ArrowUpRight 
} from 'lucide-react';
import { COMMUNITY_ROLES, TEACHING_AUDIENCES } from '../data/portfolioData';

export const CommunitySection: React.FC = () => {
  const getTeachingIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-purple-600" />;
      default: return <GraduationCap className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="community" className="py-16 sm:py-24 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            05 / Leadership & Grassroots Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Entrepreneurship, Community & Teaching
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Building educational institutions from scratch, nurturing developer communities, and teaching diverse professionals how to communicate with modern technology.
          </p>
        </div>

        {/* Community Initiatives Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
            Founded Initiatives & Community Leadership
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMUNITY_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-semibold">
                      {role.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{role.location}</span>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                      {role.role}
                    </div>
                    <h3 className="text-2xl font-bold font-serif-quote text-stone-900 mt-0.5">
                      {role.organization}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
                      Key Milestones & Outcomes:
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {role.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {role.links && role.links.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <div className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-800">
                        Live Platforms & Socials:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {role.links.map((lnk, lIdx) => (
                          <a
                            key={lIdx}
                            href={lnk.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-emerald-100 text-stone-800 hover:text-emerald-950 text-xs font-mono font-medium border border-stone-200/80 transition-colors"
                          >
                            <span>{lnk.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>Grassroots Execution</span>
                  <span>Harar, Ethiopia</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching & Knowledge Sharing Matrix */}
        <div className="space-y-6 pt-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              Pedagogy Across Disciplines
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900 tracking-tight mt-1">
              Teaching & Knowledge Sharing
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              "Teaching is one of the most consistent parts of my work. I have taught or helped people from very different backgrounds use technology more effectively."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEACHING_AUDIENCES.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 w-fit">
                    {getTeachingIcon(aud.icon)}
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-serif-quote">
                    {aud.group}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {aud.description}
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-[11px] text-stone-700">
                  <span className="font-semibold text-emerald-900">Outcome:</span> {aud.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Master Teaching Insight Quote */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-emerald-50 border border-emerald-900 space-y-2">
            <Quote className="w-5 h-5 text-emerald-400" />
            <p className="font-serif-quote text-base sm:text-lg text-emerald-100 italic leading-relaxed">
              "This experience has shaped my view that one of the most important skills in the AI era is not simply knowing how to use an AI tool, but knowing how to communicate a problem clearly enough for technology to help solve it."
            </p>
            <div className="text-xs text-emerald-400 font-mono pt-1">
              — Mahbub Mahbub • Personal Website Master Profile
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
