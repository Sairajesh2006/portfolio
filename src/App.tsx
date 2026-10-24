/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { CosmicCanvas } from './components/CosmicCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { LifestyleSection } from './components/LifestyleSection';
import { GoalsSection } from './components/GoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { EditGuideDrawer } from './components/EditGuideDrawer';
import { ambientSound } from './utils/audioPlayer';
import { personalInfo } from './data/profileData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('rajesh_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [isEditGuideOpen, setIsEditGuideOpen] = useState<boolean>(false);

  const [currentPhoto, setCurrentPhoto] = useState<string>(() => {
    return localStorage.getItem('rajesh_profile_photo') || personalInfo.profilePhoto;
  });

  // Sync theme with HTML class and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('rajesh_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('rajesh_theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleToggleMusic = () => {
    const playing = ambientSound.toggle();
    setIsPlayingMusic(playing);
  };

  const handlePhotoUpdate = (newPhotoUrl: string) => {
    setCurrentPhoto(newPhotoUrl);
    localStorage.setItem('rajesh_profile_photo', newPhotoUrl);
  };

  return (
    <div className="relative min-h-screen text-slate-100 dark:text-slate-100 font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-colors duration-500 overflow-x-hidden bg-[#05070e] dark:bg-[#05070e]">
      {/* Background Cosmic Canvas */}
      <CosmicCanvas isDark={isDark} />

      {/* Top Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
        onOpenEditGuide={() => setIsEditGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          currentPhoto={currentPhoto}
        />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <LifestyleSection />
        <GoalsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Customizer Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsEditGuideOpen(true)}
          className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group"
          title="Open Customization Guide"
          aria-label="Open Customization Guide"
        >
          <Sliders className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          <span className="hidden sm:inline">Customize / Guide</span>
        </button>
      </div>

      {/* Photo Upload & Replacement Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={currentPhoto}
        onPhotoUpdate={handlePhotoUpdate}
      />

      {/* Edit Guide & Customization Modal */}
      <EditGuideDrawer
        isOpen={isEditGuideOpen}
        onClose={() => setIsEditGuideOpen(false)}
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
      />
    </div>
  );
}
