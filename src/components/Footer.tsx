import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Goals', href: '#goals' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 dark:border-slate-800/80 border-slate-200 bg-[#04060c] dark:bg-[#04060c] bg-slate-50 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60 dark:border-slate-800/60 border-slate-200">
          {/* Brand & Digital Signature */}
          <div className="text-center md:text-left space-y-2">
            <div className="text-xl font-extrabold tracking-tight text-white dark:text-white text-slate-900">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                RAJESH
              </span>
              <span className="text-xs font-mono font-normal text-slate-400 ml-2">
                · {personalInfo.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 italic max-w-md">
              "Designed to tell my story. Built to grow with me."
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-300 text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 hover:border-blue-500/40 transition-colors flex items-center gap-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            title="Return to top of page"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Privacy Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.fullName} · All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span>VIT-AP University</span>
            <span>·</span>
            <span>Second Year B.Tech</span>
            <span>·</span>
            <span className="text-blue-400 font-semibold">{personalInfo.cgpa} CGPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
