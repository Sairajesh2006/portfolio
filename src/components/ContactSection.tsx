import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, ShieldCheck, Github, Linkedin, ExternalLink } from 'lucide-react';
import { contactData, personalInfo } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Message for Rajesh from ${visitorName}`);
    const body = encodeURIComponent(
      `Hi Rajesh,\n\n${message}\n\nFrom: ${visitorName}${visitorEmail ? ` (${visitorEmail})` : ''}`
    );

    // Open default mail client cleanly
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      setMessage('');
      setVisitorName('');
      setVisitorEmail('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Interested in discussing software engineering, student projects, or artificial intelligence? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white dark:text-white text-slate-900">
                Direct Channels
              </h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Primary Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded px-1.5 py-0.5"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm font-semibold text-white dark:text-white text-slate-900 hover:text-blue-400 transition-colors block break-all font-mono"
                >
                  {contactData.email}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 border-slate-200/80 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Campus Location</div>
                  <div className="text-sm font-semibold text-white dark:text-white text-slate-900 mt-0.5">
                    {contactData.location}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Undergraduate Engineering Campus</div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400">Professional Profiles</div>
                <div className="flex flex-col gap-2">
                  {contactData.githubUrl ? (
                    <a
                      href={contactData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 bg-slate-50 border border-slate-800/60 flex items-center justify-between text-xs text-slate-200 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        <span>GitHub Profile</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 bg-slate-50 border border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-slate-500" />
                        <span>GitHub Account</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Configurable in profileData.ts</span>
                    </div>
                  )}

                  {contactData.linkedinUrl ? (
                    <a
                      href={contactData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 bg-slate-50 border border-slate-800/60 flex items-center justify-between text-xs text-slate-200 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 bg-slate-50 border border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-slate-500" />
                        <span>LinkedIn Account</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Configurable in profileData.ts</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy Assurance */}
              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero private identifiers or phone numbers displayed.</span>
              </div>
            </div>
          </div>

          {/* Working Note & Message Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-xl text-left">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg font-bold text-white dark:text-white text-slate-900">
                  Send a Direct Note
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Draft a message directly to Rajesh's inbox. This automatically launches your configured email client with a formatted message template.
              </p>

              {sendSuccess && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Launching email client draft... Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSendDraft} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="e.g. Professor, Fellow Student, Recruiter"
                      className="w-full px-4 py-2.5 text-xs bg-slate-950/80 dark:bg-slate-950/80 bg-slate-50 border border-slate-800 dark:border-slate-800 border-slate-200 rounded-xl text-white dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      placeholder="e.g. your.email@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-slate-950/80 dark:bg-slate-950/80 bg-slate-50 border border-slate-800 dark:border-slate-800 border-slate-200 rounded-xl text-white dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                    Your Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or question for Rajesh here..."
                    className="w-full px-4 py-2.5 text-xs bg-slate-950/80 dark:bg-slate-950/80 bg-slate-50 border border-slate-800 dark:border-slate-800 border-slate-200 rounded-xl text-white dark:text-white text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct recipient: {personalInfo.preferredName}
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Draft</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
