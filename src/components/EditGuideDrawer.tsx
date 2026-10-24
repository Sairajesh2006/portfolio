import React from 'react';
import { X, Code, FileText, Image as ImageIcon, Sliders, CheckCircle } from 'lucide-react';

interface EditGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPhotoModal: () => void;
}

export const EditGuideDrawer: React.FC<EditGuideDrawerProps> = ({
  isOpen,
  onClose,
  onOpenPhotoModal,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#0a0f1d] border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">How to Customize Your Universe</h3>
              <p className="text-xs text-slate-400">
                Single source of truth located at <code className="text-blue-400 font-mono">src/data/profileData.ts</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sections Breakdown */}
        <div className="mt-6 space-y-6 text-left">
          {/* Guide 1: Updating CGPA and Academic Year */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>1. Updating Your CGPA & Academic Year</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">profileData.ts lines 68–74</span>
            </div>
            <p className="text-xs text-slate-400">
              Open <code className="text-blue-300">src/data/profileData.ts</code>. Locate the <code className="text-purple-300">personalInfo</code> object and change the values:
            </p>
            <pre className="p-3 bg-slate-950 rounded-lg text-[11px] font-mono text-blue-300 overflow-x-auto border border-slate-800/80">
{`currentYear: "Second year", // Change to "Third year" next year
cgpa: 8.9,                  // Update your latest CGPA here`}
            </pre>
          </div>

          {/* Guide 2: Profile Photograph */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-400" />
                <span>2. Adding / Replacing Your Real Profile Photo</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenPhotoModal();
                }}
                className="text-xs text-blue-400 hover:underline font-semibold"
              >
                Upload Now ➔
              </button>
            </div>
            <p className="text-xs text-slate-400">
              You can test uploading right in your browser via the "Upload Photo" button in the Hero section, or permanently bundle it:
            </p>
            <ol className="text-xs text-slate-300 space-y-1 list-decimal list-inside font-mono bg-slate-950 p-3 rounded-lg border border-slate-800">
              <li>Save your picture as <span className="text-blue-400">profile.jpg</span></li>
              <li>Place it inside the <span className="text-blue-400">/public/</span> directory</li>
              <li>The website will instantly load your real photograph!</li>
            </ol>
          </div>

          {/* Guide 3: Adding New Projects */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span>3. Adding Future Projects</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">projectsData array</span>
            </div>
            <p className="text-xs text-slate-400">
              Append a new project object to the <code className="text-purple-300">projectsData</code> array in <code className="text-blue-300">profileData.ts</code>:
            </p>
            <pre className="p-3 bg-slate-950 rounded-lg text-[11px] font-mono text-slate-300 overflow-x-auto border border-slate-800/80">
{`{
  id: "my-next-project",
  title: "AI Code Assistant",
  category: "Machine Learning · Web",
  status: "Active Development",
  tagline: "Brief one-line summary...",
  description: "Comprehensive overview of the system...",
  softwareStack: ["Python", "React", "PyTorch"],
  highlights: ["Feature 1", "Feature 2"],
}`}
            </pre>
          </div>

          {/* Guide 4: Connecting Social Accounts */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>4. Adding LinkedIn & GitHub Links</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">contactData object</span>
            </div>
            <p className="text-xs text-slate-400">
              Whenever you're ready to publish your social profile links, simply add them in <code className="text-purple-300">contactData</code>:
            </p>
            <pre className="p-3 bg-slate-950 rounded-lg text-[11px] font-mono text-amber-300 overflow-x-auto border border-slate-800/80">
{`githubUrl: "https://github.com/your-username",
linkedinUrl: "https://linkedin.com/in/your-username",`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
