import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { BookOpen, Moon, Compass, Sparkles, HelpCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenTasbih: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenTasbih }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Accueil', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'pillars', label: 'Piliers & Foi', icon: <Moon className="w-4 h-4" /> },
    { id: 'quran', label: 'Saint Coran', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'prayer', label: 'Guide Prière', icon: <Compass className="w-4 h-4" /> },
    { id: 'quiz', label: 'Quiz Interactif', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-emerald-300 font-arabic text-xl font-bold group-hover:bg-emerald-700 transition-colors">
              من
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white font-display block leading-none">
                Al-Manara
              </span>
              <span className="text-[11px] text-stone-400 font-normal">
                Savoir & Prière en Islam
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 single-line nav links with hover underlines */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-emerald-400 font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTasbih}
              className="px-3.5 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 rounded-lg hover:bg-emerald-900/60 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chapelet / Tasbīh</span>
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Tester mes Connaissances
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTasbih}
              className="p-2 text-stone-300 hover:text-white"
              title="Tasbih"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900 px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-900/50 text-emerald-300'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-800 flex gap-2">
            <button
              onClick={() => {
                onOpenTasbih();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-medium text-emerald-300 bg-emerald-950 border border-emerald-800 rounded-lg text-center"
            >
              Tasbīh Virtuel
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="flex-1 py-2 text-xs font-semibold text-stone-900 bg-amber-400 rounded-lg text-center"
            >
              Quiz Interactif
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
