import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { IntersectionsSection } from './components/IntersectionsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GuidesSection } from './components/GuidesSection';
import { CommunitySection } from './components/CommunitySection';
import { WritingSection } from './components/WritingSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedIntersection, setSelectedIntersection] = useState<string>('med-software');
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'intersections', 'projects', 'guides', 'community', 'writing', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectIntersection = (id: string) => {
    setSelectedIntersection(id);
    const element = document.getElementById('intersections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-emerald-100 selection:text-emerald-950">
      
      {/* Navigation */}
      <Navbar 
        onOpenProfileModal={() => setIsProfileModalOpen(true)} 
        activeSection={activeSection}
      />

      {/* Hero */}
      <main id="hero">
        <Hero onSelectIntersection={handleSelectIntersection} />
        
        {/* About & "How I Think" */}
        <AboutSection />

        {/* 5 Intersections */}
        <IntersectionsSection 
          selectedId={selectedIntersection} 
        />

        {/* Selected Projects */}
        <ProjectsSection />

        {/* Clinical Survival Guides */}
        <GuidesSection />

        {/* Community, Wezena Academy & Teaching */}
        <CommunitySection />

        {/* Essays & Field Notes */}
        <WritingSection />

        {/* Technical Toolkit & Current Explorations */}
        <SkillsSection />

        {/* Contact & Connect */}
        <ContactSection 
          onOpenProfileModal={() => setIsProfileModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Master Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />

    </div>
  );
}
