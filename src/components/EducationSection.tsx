import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/profileData';

export const EducationSection: React.FC = () => {
  const academicHighlights = [
    'Object-Oriented Programming & Principles with Java',
    'Data Structures & Algorithm Complexity Analysis',
    'Computer Organization & Digital Logic Design',
    'Discrete Mathematics for Computing & Problem Solving',
    'Database Management Fundamentals & Query Foundations',
  ];

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            My Academic Journey
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Building strong engineering foundations and computational rigor through formal undergraduate study.
          </p>
        </div>

        {/* Primary Education Card + CGPA Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Institution Card (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/90 dark:border-slate-800/90 border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-white text-slate-900">
                    {personalInfo.university}
                  </h3>
                  <div className="text-base font-semibold text-blue-400 mt-1">
                    {personalInfo.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{personalInfo.currentYear} (Undergraduate)</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Amaravati, Andhra Pradesh</span>
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Academic Status</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5">Active Student</div>
                </div>
              </div>

              {/* Campus Visual Banner */}
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 border-slate-200 aspect-[21/9] max-h-52 relative">
                <img
                  src="/assets/aistudio/Screenshot_2026-10-24_191623_004dd541.png"
                  alt="VIT-AP University Campus"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c]/90 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-slate-200 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    VIT-AP University Campus
                  </span>
                </div>
              </div>

              {/* Coursework & Learning Focus */}
              <div className="py-6">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Engineering Coursework & Areas of Study</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {academicHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 border-slate-200/80 text-xs text-slate-300 dark:text-slate-300 text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note on adaptability */}
            <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 border-slate-200 text-xs text-slate-400">
              Curriculum integrates algorithmic analysis, software paradigms, and hands-on laboratory implementation.
            </div>
          </div>

          {/* CGPA Statistics Showcase Card (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#0d162a] via-[#090f1e] to-[#060913] border border-blue-500/30 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient glow effect */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Academic Performance
                </span>
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left">
                <div className="text-xs text-slate-400 font-medium">Cumulative Grade Point Average</div>
                <div className="mt-2 flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 font-mono tabular-nums tracking-tight">
                    {personalInfo.cgpa.toFixed(1)}
                  </span>
                  <span className="text-slate-400 text-lg font-medium">/ 10.0</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Represents consistent academic dedication across semester examinations and laboratory assessments.
                </p>
              </div>

              {/* Progress scale visual indicator */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Grading Scale</span>
                  <span className="font-mono text-blue-400 font-semibold">{((personalInfo.cgpa / 10) * 100).toFixed(0)}% of scale</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                    style={{ width: `${(personalInfo.cgpa / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick update reminder */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Institution: VIT-AP</span>
              <span className="font-mono text-blue-300">Class of 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
