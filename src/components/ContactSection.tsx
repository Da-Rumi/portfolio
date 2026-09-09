import React, { useState } from 'react';
import { 
  Mail, Github, Linkedin, MapPin, Copy, 
  Check, Send, Sparkles, MessageSquare, ArrowRight, FileText, Video, ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenProfileModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProfileModal }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Medical Tech & Software',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`[${formData.category}] Connection from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            08 / Connect & Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-quote text-stone-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Interested in medical technology, AI-assisted learning systems, community education programs, or building cross-disciplinary software? Let's talk.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#fafaf9] border border-stone-200/90 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                Direct Communication
              </div>

              <div>
                <div className="text-xs text-stone-500 font-mono">Email Address:</div>
                <div className="text-base sm:text-lg font-bold font-mono text-stone-900 mt-0.5 break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2.5 px-4 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail</span>
                </a>
              </div>
            </div>

            {/* Social & Verification Cards */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                Online Profiles & Code
              </div>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-stone-900 text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">GitHub</div>
                      <div className="text-[11px] font-mono text-stone-500">github.com/{PERSONAL_INFO.githubUser}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-700 text-white">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">LinkedIn</div>
                      <div className="text-[11px] font-mono text-stone-500">mahbub-mahbub-611660238</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {PERSONAL_INFO.tiktok && (
                  <a
                    href={PERSONAL_INFO.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-stone-900 text-white">
                        <Video className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">TikTok Education</div>
                        <div className="text-[11px] font-mono text-stone-500">{PERSONAL_INFO.tiktokUser}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}

                <button
                  onClick={onOpenProfileModal}
                  className="w-full p-3 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-800 text-white">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-950">Printable Master Profile</div>
                      <div className="text-[11px] font-mono text-emerald-800">One-page printable summary</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Location & Status */}
            <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 flex items-center gap-3 font-mono">
              <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Based in Harar / Addis Ababa, Ethiopia (East Africa Time, UTC+3)</span>
            </div>

          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#fafaf9] rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-sm space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-serif-quote text-stone-900">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Fill out the form below to initiate an email conversation directly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Check className="w-5 h-5 text-emerald-700" />
                  <span>Message prepared in your default mail client!</span>
                </div>
                <p className="text-xs leading-relaxed">
                  If your mail application did not open automatically, you can always reach out directly to{' '}
                  <strong className="underline">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-emerald-800 text-white text-xs font-medium rounded-xl hover:bg-emerald-900 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Topic Pills */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-stone-600">
                    Topic of Discussion:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Medical Tech & Software',
                      'Educational / Wezena Collaboration',
                      'AI Research & Workflows',
                      'Speaking / Workshop',
                      'General Connection'
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          formData.category === cat
                            ? 'bg-stone-900 text-white font-semibold shadow-xs'
                            : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-medium text-stone-600">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Jane Doe / Alex Smith"
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-700 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono font-medium text-stone-600">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@organization.com"
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-700 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono font-medium text-stone-600">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your idea, research proposal, or question..."
                    className="w-full bg-white border border-stone-200 rounded-xl p-3.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-700 shadow-2xs leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-stone-900 hover:bg-emerald-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
