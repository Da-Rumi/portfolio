import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Stethoscope, Sparkles, Video, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-stone-800 border border-stone-700 text-emerald-400 flex items-center justify-center font-serif-quote font-bold text-base">
                M
              </div>
              <span className="font-bold text-stone-100 text-base sm:text-lg font-serif-quote tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              Medical Student & Software Engineer based in Ethiopia. Exploring how medicine, computation, and pedagogical empathy converge to create pragmatic human tools.
            </p>

            <div className="text-xs font-mono text-stone-500 pt-1">
              "Building at the intersection of medicine, technology, education, and AI."
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-mono uppercase tracking-wider font-bold text-stone-400">
              Live Platforms
            </div>
            <ul className="space-y-1.5 text-stone-400 font-mono text-[11px]">
              <li>
                <a href="https://wezena.hararmagala.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>wezena.hararmagala.com</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://hararmagala.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>hararmagala.com</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://intentube.hararmagala.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>intentube.hararmagala.com</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://wezena-step1-flashcards.ai.studio/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Medical Flashcards</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://wezena-mentor.ai.studio/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Wezena Mentor AI</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://wezena-talks.ai.studio" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Wezena Talks Hub</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider font-bold text-stone-400">
              Connect & Socials
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl transition-colors flex items-center gap-1.5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="text-[11px] font-mono">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl transition-colors flex items-center gap-1.5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-mono">LinkedIn</span>
              </a>
              {PERSONAL_INFO.tiktok && (
                <a
                  href={PERSONAL_INFO.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl transition-colors flex items-center gap-1.5"
                  title="TikTok @wezena1"
                >
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-mono">TikTok @wezena1</span>
                </a>
              )}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl transition-colors flex items-center gap-1.5"
                title="Email"
              >
                <Mail className="w-4 h-4" />
                <span className="text-[11px] font-mono">Email</span>
              </a>
            </div>
            <p className="text-[11px] text-stone-500 font-mono">
              GitHub: Da-Rumi • TikTok: @wezena1 • Harar, Ethiopia
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-stone-300 transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
