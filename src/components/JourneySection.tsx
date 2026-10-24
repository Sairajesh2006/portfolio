import React from 'react';
import { GitCommit, Milestone, Calendar, Building2 } from 'lucide-react';
import { timelineData, TimelineMilestone } from '../data/profileData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Milestone className="w-4 h-4" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            My Learning Journey
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            A chronological timeline of my engineering evolution—from starting my B.Tech at VIT-AP to hardware prototyping and deep-diving into algorithmic problem solving and AI.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative pl-6 sm:pl-8 border-l border-blue-500/30 dark:border-blue-500/30 border-blue-600/40 space-y-12 max-w-4xl mx-auto sm:ml-4 text-left">
          {timelineData.map((milestone: TimelineMilestone, index: number) => (
            <div key={index} className="relative group">
              {/* Timeline Node dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#05070e] dark:bg-[#05070e] bg-white border-2 border-blue-500 group-hover:border-purple-400 transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 shadow-md group-hover:border-blue-500/30 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-blue-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{milestone.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{milestone.organization}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-2 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Skills involved */}
                <div className="mt-4 pt-4 border-t border-slate-800/70 dark:border-slate-800/70 border-slate-200 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-slate-500 font-medium mr-1 flex items-center gap-1">
                    <GitCommit className="w-3 h-3" />
                    <span>Competencies:</span>
                  </span>
                  {milestone.skillsInvolved.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] text-slate-300 dark:text-slate-300 text-slate-700 px-2 py-0.5 rounded bg-slate-900 dark:bg-slate-900 bg-slate-100 border border-slate-800 dark:border-slate-800 border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
