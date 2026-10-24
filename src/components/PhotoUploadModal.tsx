import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Check, RefreshCw, FileText } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onPhotoUpdate: (newPhotoUrl: string) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onPhotoUpdate,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentPhoto);
  const [urlInput, setUrlInput] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        onPhotoUpdate(result);
        setSuccessMsg('Photo loaded successfully! It is now active on your website.');
        setTimeout(() => setSuccessMsg(null), 3500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setPreviewUrl(urlInput.trim());
      onPhotoUpdate(urlInput.trim());
      setSuccessMsg('Photo URL applied successfully!');
      setTimeout(() => setSuccessMsg(null), 3500);
    }
  };

  const handleResetToDefault = () => {
    const defaultPath = '/profile.jpg';
    setPreviewUrl(defaultPath);
    onPhotoUpdate(defaultPath);
    setSuccessMsg('Reset to default path (/profile.jpg)');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0c1220] border border-slate-700/80 rounded-2xl p-6 text-slate-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Profile Photograph Settings</h3>
              <p className="text-xs text-slate-400">Configure your portrait for Rajesh's Personal Universe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success message */}
        {successMsg && (
          <div className="my-3 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Current Preview */}
        <div className="my-5 flex flex-col sm:flex-row items-center gap-5 p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/10 shrink-0 bg-slate-950 flex items-center justify-center">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Rajesh Preview"
                className="w-full h-full object-cover"
                onError={() => {
                  setPreviewUrl('');
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex flex-col items-center justify-center text-center p-2">
                <span className="text-xl font-bold text-blue-300">ASR</span>
                <span className="text-[10px] text-slate-400 mt-1">Placeholder</span>
              </div>
            )}
          </div>
          <div className="text-left space-y-1">
            <div className="text-sm font-semibold text-white">Active Avatar Source</div>
            <p className="text-xs text-slate-400 break-all font-mono">
              {previewUrl.startsWith('data:') ? 'Custom Upload (Saved in browser storage)' : previewUrl}
            </p>
            <p className="text-[11px] text-slate-400">
              Preserves your natural face and photo dimensions with responsive cropping.
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Option A: Device File Upload */}
          <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Method 1: Upload from this Device (Phone / Computer)
            </label>
            <label className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg cursor-pointer transition-colors shadow-sm shadow-blue-600/30">
              <Upload className="w-4 h-4" />
              <span>Select Photo from Device</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-[11px] text-slate-400 mt-1.5 text-center">
              Works instantly in this preview without sending your photo to any third-party server.
            </p>
          </div>

          {/* Option B: Permanent Source Code Placement Guide */}
          <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-semibold text-slate-300">
                Method 2: Permanent Code Setup for Deployment
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              To bundle your photo permanently with the repository:
            </p>
            <ol className="text-[11px] text-slate-300 space-y-1 font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <li>1. Rename your photograph to <span className="text-blue-400">profile.jpg</span></li>
              <li>2. Save it inside the <span className="text-blue-400">/public/</span> folder</li>
              <li>3. Check <span className="text-violet-400">src/data/profileData.ts</span> line 76: <br/><code className="text-slate-400">profilePhoto: "/profile.jpg"</code></li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Placeholder</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
