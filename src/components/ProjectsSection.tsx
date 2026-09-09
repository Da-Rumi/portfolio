import React, { useState } from 'react';
import { 
  FolderGit2, Sparkles, Stethoscope, GraduationCap, 
  Cpu, Globe, ExternalLink, CheckCircle2, Code2, Layers 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'medicine' | 'education' | 'productivity' | 'ecommerce'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-stone-200/80 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              03 / Engineered Systems & Software
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Software and digital platforms crafted to solve acute problems in medical education, community classrooms, personal learning, and local commerce.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-stone-200/70 rounded-2xl text-xs font-medium self-start">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'medicine', label: 'Medicine & Clinical' },
              { id: 'education', label: 'Education Systems' },
              { id: 'productivity', label: 'Focus & Productivity' },
              { id: 'ecommerce', label: 'Local Commerce' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  filter === tab.id
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                
                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-xs font-semibold uppercase">
                      {project.category}
                    </span>
                    {project.intersections.map((inter, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-mono">
                        {inter}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-stone-500">
                    Status: <span className="text-stone-900 font-semibold">{project.impactOrStatus}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-quote text-stone-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-emerald-900 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-4xl">
                  {project.description}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800">
                      The Friction / Problem:
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-1.5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
                      The Engineered Solution:
                    </div>
                    <p className="text-xs text-stone-800 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features & Tech Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                  
                  <div className="lg:col-span-7 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
                      Key Architectural Features:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
                      Technologies & Methods:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Project Footer with Live Link */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-stone-500">
                    Category: <span className="capitalize font-semibold text-stone-700">{project.category}</span>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold font-mono tracking-tight transition-all shadow-xs hover:shadow-sm group"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-stone-400 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200/60">
                      Internal Custom Build
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
