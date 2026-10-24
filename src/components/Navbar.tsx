import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onOpenEditGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  isPlayingMusic,
  onToggleMusic,
}) => {
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
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Lifestyle', href: '#lifestyle' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070e]/90 dark:bg-[#05070e]/90 bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-white dark:text-white text-slate-900 whitespace-nowrap shrink-0 group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              RAJESH
            </span>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-blue-400 dark:hover:text-blue-400 hover:text-blue-600 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Ambient Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Audio Toggle (ambient space sound generator) */}
            <button
              onClick={onToggleMusic}
              title={isPlayingMusic ? 'Mute ambient soundscape' : 'Play calming ambient space music (Web Audio)'}
              aria-label={isPlayingMusic ? 'Mute soundscape' : 'Play ambient soundscape'}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isPlayingMusic
                  ? 'bg-blue-500/15 border-blue-500/40 text-blue-400 animate-pulse'
                  : 'bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isPlayingMusic ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden lg:inline text-[11px] whitespace-nowrap">
                {isPlayingMusic ? 'Ambient On' : 'Music Off'}
              </span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-400 hover:text-slate-200 dark:hover:text-slate-200 hover:text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg transition-all duration-200 shadow-md shadow-blue-500/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 bg-slate-100 border border-slate-700/60 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#090d18] dark:bg-[#090d18] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Connect with Rajesh
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
