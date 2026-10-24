import React from 'react';
import { User, Terminal, BookOpen, Compass, Cpu, Target } from 'lucide-react';
import { personalInfo } from '../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            My Story & Engineering Perspective
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            A second-year student navigating the intersection of algorithmic logic, software engineering, and artificial intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed text-base">
            <p>
              I am <strong className="text-white dark:text-white text-slate-900 font-semibold">Amrutapu Sai Rajesh</strong>, known by most people simply as <strong className="text-blue-400 font-semibold">Rajesh</strong>. I am currently 19 years old and pursuing my Bachelor of Technology (B.Tech) degree in my second year at <strong className="text-white dark:text-white text-slate-900 font-medium">VIT-AP University</strong>.
            </p>

            <p>
              My path in engineering is driven by a deep fascination with how code translates abstract ideas into working solutions. Rather than rushing to surface-level trends, I prioritize mastering <span className="text-white dark:text-white text-slate-900 font-medium">core programming fundamentals in Java</span> and developing a structured intuition for <span className="text-white dark:text-white text-slate-900 font-medium">Data Structures and Algorithms (DSA)</span>.
            </p>

            <p>
              My hands-on experience bridges both software and physical computing—from building an <span className="text-blue-400 font-medium">ESP32-based Smart Noise Detection System</span> with analog sensors and alert outputs, to designing architectural concepts like <span className="text-purple-400 font-medium">CAMPUS-FLOW</span> to solve real spatial utilization problems across university facilities.
            </p>

            {/* Guiding Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                <div className="flex items-center gap-2 text-white dark:text-white text-slate-900 font-semibold text-sm mb-1">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>Fundamentals First</span>
                </div>
                <p className="text-xs text-slate-400">
                  Investing disciplined effort into object-oriented design, algorithmic complexity, and structured problem-solving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                <div className="flex items-center gap-2 text-white dark:text-white text-slate-900 font-semibold text-sm mb-1">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Curiosity for AI</span>
                </div>
                <p className="text-xs text-slate-400">
                  Actively learning the computational mechanics and real-world potential of artificial intelligence technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e1424] to-[#080d18] border border-slate-800/90 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Identity Snapshot</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs">Full Name</span>
                  <span className="font-medium text-slate-100">{personalInfo.fullName}</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs">Preferred Name</span>
                  <span className="font-medium text-blue-300">{personalInfo.preferredName}</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs">Age</span>
                  <span className="font-medium text-slate-100 font-mono tabular-nums">{personalInfo.age} years</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs">University</span>
                  <span className="font-medium text-slate-100">{personalInfo.university}</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs">Degree & Year</span>
                  <span className="font-medium text-slate-100">{personalInfo.degree} · {personalInfo.currentYear}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">Current CGPA</span>
                  <span className="font-bold text-blue-400 font-mono tabular-nums">{personalInfo.cgpa.toFixed(1)} / 10.0</span>
                </div>
              </div>

              {/* Personal Ambition Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1">
                  <Target className="w-3.5 h-3.5 text-indigo-400" />
                  <span>North Star</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{personalInfo.mainAmbition}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
