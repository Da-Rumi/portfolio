import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, FileText, Github, Linkedin, 
  Mail, Stethoscope, Code2, GraduationCap, ChevronRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/mah.jpg';

interface NavbarProps {
  onOpenProfileModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfileModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Intersections', href: '#intersections' },
    { label: 'Projects', href: '#projects' },
    { label: 'Clinical Guides', href: '#guides' },
    { label: 'Community & Teaching', href: '#community' },
    { label: 'Field Notes', href: '#writing' },
    { label: 'Toolkit', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand with Profile Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-stone-800 shadow-xs group-hover:border-emerald-600 transition-colors">
            <img
              src={profilePhoto}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-stone-900 flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active in clinical rotations & tech building"></span>
            </div>
            <div className="text-[11px] font-mono text-stone-500 hidden sm:block">
              Medicine • AI • Software • Education
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/70 text-xs font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full transition-all ${
                activeSection === link.href.substring(1)
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenProfileModal}
            className="hidden md:flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl border border-stone-200/80 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            <span>Master Profile</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 bg-stone-900 hover:bg-emerald-800 text-white rounded-xl transition-all shadow-xs"
          >
            <span>Connect</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fafaf9] border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <div className="grid grid-cols-2 gap-1.5 text-xs font-medium pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3 h-3 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex gap-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfileModal();
              }}
              className="flex-1 py-2.5 px-3 bg-stone-200 text-stone-800 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" /> View Profile Summary
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 px-3 bg-stone-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
