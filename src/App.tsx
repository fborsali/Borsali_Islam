/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PillarsSection } from './components/PillarsSection';
import { QuranExplorer } from './components/QuranExplorer';
import { PrayerGuide } from './components/PrayerGuide';
import { CitadelleAndNamesSection } from './components/CitadelleAndNamesSection';
import { HadithAndSirahSection } from './components/HadithAndSirahSection';
import { QuizSection } from './components/QuizSection';
import { TasbihModal } from './components/TasbihModal';
import { Footer } from './components/Footer';
import { PWAInstallModal } from './components/PWAInstallModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { usePWAInstall } from './hooks/usePWAInstall';
import { recitationPlayer } from './utils/audioPlayer';
import { Smartphone, Download, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isTasbihOpen, setIsTasbihOpen] = useState<boolean>(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [installBannerDismissed, setInstallBannerDismissed] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [quizCategoryFilter, setQuizCategoryFilter] = useState<'all' | 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general'>('all');

  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();

  const handleStartCategoryQuiz = (category: 'all' | 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general') => {
    recitationPlayer.stop();
    setQuizCategoryFilter(category);
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: ActiveTab) => {
    recitationPlayer.stop();
    if (tab === 'quiz') {
      setQuizCategoryFilter('all');
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300 ${
        isDarkMode ? 'tahajjud-dark' : ''
      }`}
    >
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenTasbih={() => setIsTasbihOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        isInstalled={isInstalled}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />

      {/* Smart Mobile / PWA Install Banner */}
      {!isInstalled && !installBannerDismissed && (
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white border-b border-emerald-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-emerald-50 truncate">
                <span className="font-bold text-amber-300">Nouveau :</span> Installez{' '}
                <strong className="font-semibold">Al-Manara</strong> sur l'écran d'accueil de votre téléphone (Android & iPhone)
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={async () => {
                  if (isInstallable) {
                    const accepted = await install();
                    if (!accepted) setIsInstallModalOpen(true);
                  } else {
                    setIsInstallModalOpen(true);
                  }
                }}
                className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Installer sur téléphone</span>
              </button>
              <button
                onClick={() => setInstallBannerDismissed(true)}
                className="p-1 text-emerald-200 hover:text-white rounded-md transition-colors cursor-pointer"
                aria-label="Masquer la bannière"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'overview' && (
          <HeroSection onNavigate={handleTabChange} />
        )}

        {activeTab === 'pillars' && (
          <PillarsSection onStartPillarsQuiz={() => handleStartCategoryQuiz('pillars')} />
        )}

        {activeTab === 'quran' && (
          <QuranExplorer onStartQuranQuiz={() => handleStartCategoryQuiz('quran')} />
        )}

        {activeTab === 'prayer' && (
          <PrayerGuide onStartPrayerQuiz={() => handleStartCategoryQuiz('prayer')} />
        )}

        {activeTab === 'adhkar' && (
          <CitadelleAndNamesSection onOpenTasbih={() => setIsTasbihOpen(true)} />
        )}

        {activeTab === 'sunnah' && (
          <HadithAndSirahSection onStartProphetsQuiz={() => handleStartCategoryQuiz('prophets')} />
        )}

        {activeTab === 'quiz' && (
          <QuizSection initialCategory={quizCategoryFilter} />
        )}
      </main>

      {/* Floating Tasbih Modal */}
      <TasbihModal
        isOpen={isTasbihOpen}
        onClose={() => setIsTasbihOpen(false)}
      />

      {/* PWA Mobile Installation Modal */}
      <PWAInstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        isInstallable={isInstallable}
        isInstalled={isInstalled}
        isIOS={isIOS}
        isAndroid={isAndroid}
        onTriggerNativeInstall={install}
      />

      {/* Offline Status Indicator */}
      <OfflineIndicator />

      {/* Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenTasbih={() => setIsTasbihOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />
    </div>
  );
}
