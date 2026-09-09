import React from 'react';
import { 
  ArrowDown, Sparkles, Stethoscope, Code2, GraduationCap, 
  MapPin, Github, Linkedin, Mail, ExternalLink, ArrowRight, BookOpen, Compass, CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO, STATS, INTERSECTIONS_DATA } from '../data/portfolioData';
import profilePhoto from '../assets/images/mah.jpg';

interface HeroProps {
  onSelectIntersection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectIntersection }) => {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 animate-fadeIn">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Clinical Rotations & AI Systems Builder
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-stone-500" />
          {PERSONAL_INFO.location}
        </div>
      </div>

      {/* Main Headline & Identity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-stone-500 font-semibold">
              Personal Portfolio & Profile
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 font-serif-quote leading-[1.08]">
              Mahbub Mahbub
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 font-normal leading-relaxed">
            <span className="font-semibold text-stone-900">Medical student</span> & <span className="font-semibold text-stone-900">software engineer</span> creating AI-assisted learning systems, clinical revision tools, and community education initiatives.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-stone-100/90 border border-stone-200/80 text-stone-800 text-sm sm:text-base leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-700"></div>
            <p className="font-serif-quote italic text-stone-800 text-base sm:text-lg">
              "Rather than seeing medicine, software, and education as separate, I increasingly look for the leverage points where they collide. The most interesting problems often sit between disciplines, and AI is making it possible to build tailor-made solutions around human needs."
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#intersections"
              className="px-5 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-2 group"
            >
              <span>Explore The 5 Intersections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#guides"
              className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs sm:text-sm font-semibold border border-stone-200/80 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-emerald-800" />
              <span>Clinical Survival Guides</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs sm:text-sm font-mono font-medium border border-stone-200/80 transition-all flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-stone-800" />
              <span>github/{PERSONAL_INFO.githubUser}</span>
            </a>
          </div>
        </div>

        {/* Right Portrait & Core Bio Card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md bg-stone-900 p-3 sm:p-4 rounded-3xl border border-stone-800 shadow-2xl overflow-hidden group">
            
            {/* Image Frame */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700/80">
              <img
                src={profilePhoto}
                alt="Mahbub Mahbub - Medical Student and Software Engineer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
              
              {/* Overlay Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Haramaya Medicine
                </span>
                <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-200 border border-stone-700 text-[11px] font-mono flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  ALX Software Engineer
                </span>
              </div>

              {/* Bottom Caption Inside Frame */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-stone-100 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-stone-100 font-serif-quote">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/60">
                    Active Builder
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 leading-tight">
                  Medical Student • Software Engineer • Founder, Wezena Academy
                </p>
              </div>
            </div>

            {/* Quick Links Under Image */}
            <div className="mt-3 pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-center text-[11px] font-mono">
              <div className="p-2 rounded-xl bg-stone-800/60 text-stone-300 border border-stone-800">
                <span className="text-emerald-400 block font-bold">100+</span>
                Students Taught
              </div>
              <div className="p-2 rounded-xl bg-stone-800/60 text-stone-300 border border-stone-800">
                <span className="text-emerald-400 block font-bold">Harar / Addis</span>
                Ethiopia
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Stats Counter Bar */}
      <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, idx) => (
          <div 
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-stone-300 transition-all"
          >
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-quote text-stone-900 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">
              {stat.label}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

function ChevronRightSmall() {
  return (
    <svg className="w-3.5 h-3.5 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
