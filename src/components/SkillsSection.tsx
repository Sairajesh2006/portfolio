import React, { useState } from 'react';
import { Code, Binary, FileCode2, Palette, Sparkles, Brain, Cpu, Layers } from 'lucide-react';
import { skillsData, SkillItem } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Programming & DSA', 'Web Technologies', 'Emerging Tech'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'java':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'dsa':
        return <Binary className="w-5 h-5 text-blue-400" />;
      case 'html':
        return <FileCode2 className="w-5 h-5 text-orange-400" />;
      case 'css':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'javascript':
        return <Layers className="w-5 h-5 text-yellow-400" />;
      case 'ai':
        return <Brain className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Skills & Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
              What I'm Actively Learning
            </h2>
            <p className="mt-3 text-base text-slate-400 leading-relaxed">
              These represent technical domains I am currently developing and exploring through university coursework, problem solving, and personal experimentation.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control per anti-slop guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 dark:bg-slate-900/80 bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 border-slate-200 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer / Authenticity note */}
        <div className="mb-8 p-3 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 border-slate-200 text-xs text-slate-400 flex items-center justify-between">
          <span>
            <strong className="text-slate-300 dark:text-slate-300 text-slate-700">Transparency Note:</strong> Progress bars indicate personal learning familiarity and time invested, not external certification tests.
          </span>
          <span className="text-[11px] font-mono text-blue-400 hidden sm:inline">6 Core Learning Subjects</span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-[#0a0f1d] dark:bg-[#0a0f1d] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 bg-slate-100 border border-slate-800 dark:border-slate-800 border-slate-200 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                  {skill.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 border-slate-200/80">
                  <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Current Focus</div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-700 mt-0.5">
                    {skill.focusNote}
                  </p>
                </div>
              </div>

              {/* Progress Indicator with explicit personal estimate label */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-400 text-[11px]">Familiarity Estimate</span>
                  <span className="font-mono text-blue-400 font-semibold tabular-nums text-[11px]">
                    {skill.estimatedProgress}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 dark:bg-slate-800 bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700"
                    style={{ width: `${skill.estimatedProgress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
