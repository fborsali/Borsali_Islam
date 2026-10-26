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
import { QuizSection } from './components/QuizSection';
import { TasbihModal } from './components/TasbihModal';
import { Footer } from './components/Footer';
import { recitationPlayer } from './utils/audioPlayer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isTasbihOpen, setIsTasbihOpen] = useState<boolean>(false);
  const [quizCategoryFilter, setQuizCategoryFilter] = useState<'all' | 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general'>('all');

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
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 3-Zone Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenTasbih={() => setIsTasbihOpen(true)}
      />

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

        {activeTab === 'quiz' && (
          <QuizSection initialCategory={quizCategoryFilter} />
        )}
      </main>

      {/* Floating Tasbih Modal */}
      <TasbihModal
        isOpen={isTasbihOpen}
        onClose={() => setIsTasbihOpen(false)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenTasbih={() => setIsTasbihOpen(true)}
      />
    </div>
  );
}
