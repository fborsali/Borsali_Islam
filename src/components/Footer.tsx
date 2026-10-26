import React from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenTasbih: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTasbih }) => {
  return (
    <footer className="mt-16 bg-stone-900 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-800 flex items-center justify-center text-emerald-200 font-arabic text-base font-bold">
                من
              </div>
              <span className="text-base font-bold text-white font-display">
                Al-Manara
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              La Lanterne du Savoir : plateforme francophone dédiée à l'apprentissage des bases de l'Islam, du Saint Coran et des prières quotidiennes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Modules d'Apprentissage
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Les 5 Piliers & la Foi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quran')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sourates & Tajweed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prayer')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Simulateur de Prière
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prayer')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Les Ablutions (Al-Wudu)
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Outils & Pratique
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Quiz Interactifs (40+ questions)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTasbih}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Chapelet Virtuel (Tasbih)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prayer')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Boussole Qibla & Horaires
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Dalil */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-3">
              Sources & Rigueur
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Enseignements conformes au Saint Coran et à la Sunnah authentique selon le consensus des savants reconnus. Récitation audio par Sheikh Mishary Rashid Alafasy.
            </p>
            <div className="font-arabic text-emerald-400 text-lg">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </div>
            <div className="text-[11px] text-stone-500 italic mt-0.5">
              « Et dis : Ô mon Seigneur, accrois mes connaissances. » (Coran 20:114)
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Al-Manara. Conçu avec rigueur et bienveillance pour les apprenants.
          </div>
          <div className="flex items-center gap-4">
            <span>Savoir</span>
            <span aria-hidden="true">·</span>
            <span>Spiritualité</span>
            <span aria-hidden="true">·</span>
            <span>Pratique</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
