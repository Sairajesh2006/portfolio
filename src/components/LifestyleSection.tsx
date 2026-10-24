import React, { useState } from 'react';
import { Camera, Heart, Plus, X, Image as ImageIcon, Sparkles, Code, Cpu, Headphones, Compass, CircuitBoard } from 'lucide-react';
import { galleryPlaceholders, hobbiesList, GalleryPhoto } from '../data/profileData';

export const LifestyleSection: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(galleryPlaceholders);
  const [activeLightbox, setActiveLightbox] = useState<GalleryPhoto | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newCategory, setNewCategory] = useState<'Campus Life' | 'Tech & Workspace' | 'Moments' | 'Everyday Life'>('Campus Life');
  const [newDescription, setNewDescription] = useState<string>('');
  const [newImageUrl, setNewImageUrl] = useState<string>('');

  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'circuit-board':
        return <CircuitBoard className="w-4 h-4 text-emerald-400" />;
      case 'headphones':
        return <Headphones className="w-4 h-4 text-amber-400" />;
      case 'compass':
        return <Compass className="w-4 h-4 text-sky-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  const handleAddCustomPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPhoto: GalleryPhoto = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      description: newDescription.trim() || 'A personal moment from my college life.',
      dateTag: 'Added by Rajesh',
      imageUrl: newImageUrl.trim() || undefined,
    };

    setPhotos([newPhoto, ...photos]);
    setShowAddModal(false);
    setNewTitle('');
    setNewDescription('');
    setNewImageUrl('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="lifestyle" className="py-24 relative border-t border-slate-800/60 dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Heart className="w-4 h-4" />
              <span>Lifestyle & Moments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
              My World Outside Code
            </h2>
            <p className="mt-3 text-base text-slate-400 leading-relaxed">
              Balancing computer science with curiosity, university life at VIT-AP, and everyday interests.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-sm shadow-blue-600/30 whitespace-nowrap self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <Plus className="w-4 h-4" />
            <span>Add Memory / Photo</span>
          </button>
        </div>

        {/* Part 1: Hobbies and Daily Interests */}
        <div className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 text-left">
            Hobbies & Everyday Pursuits
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hobbiesList.map((hobby) => (
              <div
                key={hobby.title}
                className="p-4 rounded-xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 text-left hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 bg-slate-100 border border-slate-800 dark:border-slate-800 border-slate-200 w-fit mb-3">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <h4 className="text-sm font-bold text-white dark:text-white text-slate-900">
                    {hobby.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Visual Gallery Grid */}
        <div>
          <div className="flex items-center justify-between mb-4 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Personal Gallery & College Moments
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              Click any card to expand full view
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightbox(photo)}
                className="group cursor-pointer rounded-2xl bg-[#090e1c] dark:bg-[#090e1c] bg-white border border-slate-800/80 dark:border-slate-800/80 border-slate-200 overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-md flex flex-col justify-between text-left"
              >
                {/* Photo frame or styled placeholder */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                  {photo.imageUrl ? (
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Elegant placeholder container per design constitution */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0e172a] to-[#070b14] flex flex-col items-center justify-center p-4 text-center">
                      <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{photo.title}</span>
                      <span className="text-[10px] text-slate-500 font-mono mt-1">Placeholder · Click to view</span>
                    </div>
                  )}

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs font-medium text-white flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Expand image</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1">
                    <span>{photo.category}</span>
                    <span>{photo.dateTag}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activeLightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveLightbox(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#0a0f1d] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image slot */}
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                {activeLightbox.imageUrl ? (
                  <img
                    src={activeLightbox.imageUrl}
                    alt={activeLightbox.title}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div className="text-lg font-bold text-white">{activeLightbox.title}</div>
                    <p className="text-xs text-slate-400 max-w-md mt-2">
                      This is an authentic placeholder for your university photo. You can upload an actual photo of your campus or workspace to display it here.
                    </p>
                  </div>
                )}
              </div>

              {/* Lightbox details */}
              <div className="p-6 text-left border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>{activeLightbox.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeLightbox.dateTag}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeLightbox.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {activeLightbox.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal to Add Photo to Gallery */}
        {showAddModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowAddModal(false)}
          >
            <div
              className="relative max-w-lg w-full bg-[#0a0f1d] border border-slate-700 rounded-2xl p-6 text-slate-100 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span>Add Photo to Gallery</span>
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddCustomPhoto} className="mt-4 space-y-4 text-left">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Title / Caption
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Library Study Hall, Tech Fest 2025"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Campus Life">Campus Life</option>
                    <option value="Tech & Workspace">Tech & Workspace</option>
                    <option value="Moments">Moments</option>
                    <option value="Everyday Life">Everyday Life</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Short Description
                  </label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows={2}
                    placeholder="Brief description of the moment..."
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Select Image File
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                  />
                  {newImageUrl && (
                    <div className="mt-2 text-[11px] text-emerald-400">
                      ✓ Image preview loaded successfully!
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
