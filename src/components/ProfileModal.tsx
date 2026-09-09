import React from 'react';
import { 
  X, Printer, Download, Mail, ExternalLink, MapPin, 
  Stethoscope, Code2, GraduationCap, Sparkles, CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO, STATS, EDUCATION_DATA, SKILL_GROUPS } from '../data/portfolioData';
import profilePhoto from '../assets/images/mah.jpg';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fafaf9] text-stone-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-10 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="border-b border-stone-200 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src={profilePhoto}
              alt={PERSONAL_INFO.name}
              className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover object-top border-2 border-stone-300 shadow-sm shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 bg-stone-900 text-stone-100 rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / PDF
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mt-2.5 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                  GitHub: {PERSONAL_INFO.githubUser}
                </a>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-700 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 bg-emerald-50/80 border border-emerald-200/70 rounded-2xl text-xs text-emerald-900 italic leading-relaxed">
            "{PERSONAL_INFO.tagline}"
          </div>
        </div>

        {/* Profile Body */}
        <div className="py-6 space-y-6 text-xs sm:text-sm">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Personal Profile & Core Vision
            </h3>
            <p className="text-stone-700 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Education & Clinical Training
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/80">
                  <div className="flex items-center justify-between font-semibold text-stone-900">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-stone-500">{edu.period}</span>
                  </div>
                  <div className="text-xs font-medium text-emerald-800 mb-1">{edu.role}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Core Technical & Pedagogical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <div className="font-semibold text-stone-900 mb-1.5">{group.category}</div>
                  <div className="flex flex-wrap gap-1">
                    {group.items.slice(0, 4).map((item, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-white border border-stone-200 rounded text-[11px] text-stone-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Key Entrepreneurship & Leadership
            </h3>
            <ul className="list-disc pl-5 text-stone-700 text-xs space-y-1.5 leading-relaxed">
              <li><strong>Founder, Wezena Academy (Harar, Ethiopia):</strong> Scaled from 10 to ~100 students, engineered gamified vocabulary engine, multidisciplinary team of 4 teachers.</li>
              <li><strong>Co-Founder, HararDev Center:</strong> Technology coding lab instructing youth in Python, web development, and AI workflows.</li>
              <li><strong>Founder, Harari Medical Association:</strong> Peer clinical learning community for medical student collaboration.</li>
              <li><strong>Author, Clinical Survival Guides:</strong> Surgery & Internal Medicine clinical attachment manuals for hospital rotations.</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>Building with curiosity & cross-disciplinary precision</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl font-medium transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
