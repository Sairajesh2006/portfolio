import React, { useState } from 'react';
import { Cpu, LayoutGrid, X, ExternalLink, Activity, Info, CheckCircle, ShieldCheck } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/profileData';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <LayoutGrid className="w-4 h-4" />
            <span>Projects & Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Things I'm Building & Designing
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Authentic projects developed during my university tenure, spanning physical microcontroller systems and smart campus architectural concepts.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/70 dark:border-slate-800/70 border-slate-200">
                  <span className="text-xs font-mono text-blue-400 font-semibold tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {project.status}
                  </span>
                </div>

                {/* Project Image Preview if available */}
                {project.imageUrl && (
                  <div className="mb-5 overflow-hidden rounded-xl border border-slate-800/80 dark:border-slate-800/80 border-slate-200 bg-slate-950 aspect-[16/10] max-h-60 relative group-hover:border-blue-500/40 transition-colors">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                      <span className="text-[11px] font-mono text-slate-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        Real Hardware Setup
                      </span>
                    </div>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 mt-2">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Hardware Components (if hardware project) */}
                {project.hardwareComponents && project.hardwareComponents.length > 0 && (
                  <div className="mt-5 p-3 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 bg-slate-50 border border-slate-800/70 dark:border-slate-800/70 border-slate-200">
                    <div className="text-[11px] font-semibold text-slate-300 dark:text-slate-300 text-slate-800 flex items-center gap-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>Key Hardware & Sensor Modules</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.hardwareComponents.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] text-slate-300 dark:text-slate-300 text-slate-700 px-2 py-0.5 rounded bg-slate-900 dark:bg-slate-900 bg-slate-200/80 border border-slate-800 dark:border-slate-800 border-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Software / Concept Stack */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-slate-500 font-medium mr-1">Stack:</span>
                  {project.softwareStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-300 dark:text-slate-300 text-slate-700 font-mono px-2 py-0.5 rounded bg-slate-900/80 dark:bg-slate-900/80 bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 border-slate-200 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect System Architecture</span>
                </button>

                <span className="text-[11px] text-slate-500 font-mono">
                  VIT-AP Engineering
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: In-depth Project Details & Architecture Visualizer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div
              className="relative w-full max-w-2xl bg-[#0b101f] border border-slate-700 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {activeModalProject.category} · {activeModalProject.status}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="mt-4 text-sm font-medium text-slate-200">
                {activeModalProject.tagline}
              </p>

              {/* Hardware / Concept Image inside Modal */}
              {activeModalProject.imageUrl && (
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/10] max-h-72">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Detailed Breakdown */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </div>

              {/* System Architecture Blueprint */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>System Architecture & Highlights</span>
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Specifications if applicable */}
              {activeModalProject.hardwareComponents && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Microcontroller Circuit Wiring</span>
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-[11px] text-slate-300 space-y-1.5">
                    <div>[Input] Analog Sound Sensor Module ➔ ESP32 ADC Pin (GPIO 34)</div>
                    <div>[Processing] Threshold filtering & Decibel estimation loop in C++</div>
                    <div>[Display] I2C Liquid Crystal Display (SDA: GPIO 21, SCL: GPIO 22)</div>
                    <div>[Output] Visual Green/Yellow/Red LEDs + Audible Piezo Buzzer Warning</div>
                  </div>
                </div>
              )}

              {/* Authenticity notice */}
              <div className="mt-6 p-3 rounded-xl bg-blue-950/20 border border-blue-900/30 text-[11px] text-blue-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Documented authentically as a student engineering implementation.</span>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
