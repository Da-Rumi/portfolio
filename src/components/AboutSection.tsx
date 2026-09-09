import React from 'react';
import { 
  GraduationCap, Stethoscope, Code2, Trophy, PenTool, 
  HeartHandshake, Brain, Lightbulb, Compass, CheckCircle2, UserCheck 
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EARLY_ACHIEVEMENTS } from '../data/portfolioData';
import profilePhoto from '../assets/images/mah.jpg';

export const AboutSection: React.FC = () => {
  const coreStrengths = [
    {
      title: 'Cross-Disciplinary Thinking',
      description: 'Connecting ideas across medicine, software engineering, pedagogy, business, and cognitive science rather than treating them as isolated islands.'
    },
    {
      title: 'Rapid Prototyping & Building',
      description: 'Turning conceptual models into working tools, interactive platforms, and survival guides rather than letting them remain abstract theories.'
    },
    {
      title: 'Pedagogical Translation',
      description: 'Deconstructing dense, intimidating concepts (surgical anatomy, programming syntax, algorithmic prompting) into intuitive mental models.'
    },
    {
      title: 'AI-Assisted Problem Solving',
      description: 'Treating AI not as a gimmick, but as an intellectual collaborator for structuring information, accelerating research, and building custom software.'
    },
    {
      title: 'Grassroots Community Building',
      description: 'Creating high-trust environments (Wezena Academy, HararDev, Harari Medical Association) where learners teach and elevate each other.'
    },
    {
      title: 'Initiative & Curiosity',
      description: 'Entering unfamiliar domains with rigorous curiosity, spotting unmet needs, and proactively architecting solutions.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            01 / Identity & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            About & "How I Think"
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            A medical student who also builds software, designs educational systems, experiments with AI, and crafts solutions at the intersections.
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              I am a medical student and certified software engineer interested in the convergence of healthcare, computing, education, and artificial intelligence. My trajectory has never been confined to a single lane. I navigate demanding hospital surgical rotations while writing code, experimenting with AI workflows, mentoring students, and designing clinical field guides.
            </p>

            <p>
              I enjoy finding problems that are specific to me, my classmates, my community, or a particular group of learners—and building bespoke systems around them. Instead of simply consuming software, I use modern AI tools and software engineering to construct tools designed around human cognitive friction.
            </p>

            <div className="p-5 sm:p-6 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={profilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-emerald-700 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    <Compass className="w-4 h-4 text-emerald-700" />
                    The Core Philosophy
                  </div>
                  <div className="text-xs text-stone-500 font-mono">
                    Driven by cross-disciplinary leverage
                  </div>
                </div>
              </div>

              <p className="font-serif-quote text-base sm:text-lg text-stone-900 italic leading-snug">
                "{PERSONAL_INFO.corePhilosophy}"
              </p>
              <div className="text-xs text-stone-500 font-mono pt-1 border-t border-stone-100">
                Long-Term Goal: <span className="text-stone-800 font-semibold">{PERSONAL_INFO.longTermGoal}</span>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider font-semibold text-stone-500 mb-1">
              Formal Education & Certifications
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-emerald-300 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-mono text-emerald-800 font-bold uppercase">
                      {edu.role}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-stone-100 text-stone-600 rounded-md shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.badges.map((b, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200/60 text-[11px] text-stone-700 font-mono"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Core Strengths Grid */}
        <div className="space-y-6 pt-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              Cognitive Profile
            </div>
            <h3 className="text-2xl font-bold font-serif-quote text-stone-900 tracking-tight mt-1">
              Core Strengths & Working Style
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreStrengths.map((strength, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-stone-300 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {strength.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Early Achievements & Formative Milestones */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">
                Formative Foundations
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-quote text-stone-900 tracking-tight mt-1">
                Early Achievements & Intellectual Roots
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EARLY_ACHIEVEMENTS.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 shadow-sm space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-stone-800 flex items-center justify-center text-emerald-400">
                  {item.icon === 'Trophy' && <Trophy className="w-4 h-4" />}
                  {item.icon === 'PenTool' && <PenTool className="w-4 h-4" />}
                  {item.icon === 'HeartHandshake' && <HeartHandshake className="w-4 h-4" />}
                </div>

                <h4 className="text-sm font-bold text-stone-100">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
