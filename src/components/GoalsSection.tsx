import React from 'react';
import { Target, Compass, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { goalsData, GoalItem } from '../data/profileData';

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>Future Ambitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            What's Next On My Horizon?
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            The milestones and technical ambitions I am currently working towards as an engineering undergraduate.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {goalsData.map((goal: GoalItem, index: number) => (
            <div
              key={goal.id}
              className="p-8 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group text-left"
            >
              <div>
                {/* Editorial Index & Category */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/70 dark:border-slate-800/70 border-slate-200">
                  <span className="text-xs font-mono font-semibold text-blue-400">
                    Goal 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {goal.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                  {goal.title}
                </h3>

                <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-3 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Action Plan */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-400" />
                  <span>Action Blueprint</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 border-slate-200/80 text-xs text-slate-300 dark:text-slate-300 text-slate-700 flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{goal.actionPlan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Continuous Growth Philosophy</span>
            </div>
            <p className="text-sm font-medium text-slate-200 dark:text-slate-200 text-slate-800">
              "Great software engineers aren't made overnight—they are forged through daily consistency, curiosity, and debugging."
            </p>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-md shadow-blue-600/30"
          >
            Review Active Projects
          </a>
        </div>
      </div>
    </section>
  );
};
