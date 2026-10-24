import React, { useState } from 'react';
import { ChevronDown, Sparkles, Code2, Compass } from 'lucide-react';
import { personalInfo } from '../data/profileData';

interface HeroSectionProps {
  currentPhoto: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentPhoto,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400/90 dark:text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Personal Universe</span>
              <span aria-hidden="true">·</span>
              <span>VIT-AP University</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2027</span>
            </div>

            {/* Primary Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white text-slate-900 leading-[1.1] max-w-2xl" style={{ textWrap: 'balance' }}>
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Rajesh.
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-medium text-slate-300 dark:text-slate-300 text-slate-700">
              <span>Student</span>
              <span className="text-slate-500">·</span>
              <span className="text-blue-400 dark:text-blue-400 font-semibold">Aspiring Software Engineer</span>
              <span className="text-slate-500">·</span>
              <span>Tech Enthusiast</span>
            </div>

            {/* Authentic Welcoming Introduction */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.intro} Currently pursuing my B.Tech at VIT-AP University, sharpening problem-solving fundamentals in Java and DSA, and building purposeful projects.
            </p>

            {/* Main Ambition Quote */}
            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100/90 border border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 max-w-xl">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Main Ambition
              </div>
              <p className="text-sm font-medium text-slate-200 dark:text-slate-200 text-slate-800 italic">
                "{personalInfo.mainAmbition}"
              </p>
            </div>

            {/* Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My World</span>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 text-slate-700 hover:text-white bg-slate-900/70 dark:bg-slate-900/70 bg-white hover:bg-slate-800/80 border border-slate-700/80 dark:border-slate-700/80 border-slate-300 rounded-xl transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>View My Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Frame with Electric Blue & Violet Glow */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-72 sm:w-80 aspect-[4/5] max-w-full">
              {/* Electric blue and violet ambient glow behind frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none" />

              {/* Outer frame */}
              <div className="relative w-full h-full bg-[#0a0f1d] border-2 border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                {/* Photo container */}
                <div className="relative w-full flex-1 bg-gradient-to-b from-slate-900 to-[#070b14] overflow-hidden flex items-center justify-center">
                  {!imgError && currentPhoto && currentPhoto !== '/profile.jpg' ? (
                    <img
                      src={currentPhoto}
                      alt="Amrutapu Sai Rajesh"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Elegant monogram portrait placeholder when photo file is not yet placed in /public/ */
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.18),transparent_70%)]" />
                      <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-purple-600/30 border border-blue-400/40 flex items-center justify-center shadow-inner mb-4">
                        <span className="text-4xl font-extrabold tracking-tight text-white">
                          ASR
                        </span>
                      </div>
                      <div className="relative space-y-1">
                        <h4 className="text-base font-bold text-white">Amrutapu Sai Rajesh</h4>
                        <p className="text-xs text-blue-400 font-medium">B.Tech Second Year · VIT-AP</p>
                        <p className="text-[11px] text-slate-400 max-w-[200px] mt-2">
                          Engineering Student & Tech Enthusiast
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Gradient contrast scrim at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/50 to-transparent pointer-events-none" />
                </div>

                {/* Photo card bottom info */}
                <div className="p-4 bg-[#0a0f1d] border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">Amrutapu Sai Rajesh</div>
                    <div className="text-[11px] text-slate-400 font-mono">Age 19 · Second Year</div>
                  </div>
                  <div className="text-[11px] font-mono text-blue-400 font-medium">
                    VIT-AP University
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights Strip below the hero split per Frontend Design Guidelines */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Institution</div>
              <div className="text-base sm:text-lg font-bold text-white dark:text-white text-slate-900 mt-1">
                VIT-AP University
              </div>
              <div className="text-xs text-slate-400 mt-0.5">B.Tech Programme</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Academic Year</div>
              <div className="text-base sm:text-lg font-bold text-white dark:text-white text-slate-900 mt-1">
                Second Year
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Undergraduate</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Cumulative Grade</div>
              <div className="text-base sm:text-lg font-extrabold text-blue-400 dark:text-blue-400 font-mono tabular-nums mt-1 flex items-center gap-1">
                <span>{personalInfo.cgpa.toFixed(1)}</span>
                <span className="text-xs font-sans text-slate-400 font-normal">/ 10.0 CGPA</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Academic Standing</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Core Focus</div>
              <div className="text-base sm:text-lg font-bold text-white dark:text-white text-slate-900 mt-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Java · DSA · AI</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Engineering Foundation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative mt-8 flex flex-col items-center justify-center text-slate-500 hover:text-slate-300 transition-colors">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded p-1"
          aria-label="Scroll to About Me section"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
