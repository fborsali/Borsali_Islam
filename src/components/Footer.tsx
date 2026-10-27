import React from 'react';
import { ActiveTab } from '../types';
import { Smartphone } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenTasbih: () => void;
  onOpenInstallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTasbih,
  onOpenInstallModal,
}) => {
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
            <button
              onClick={onOpenInstallModal}
              className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-700/60 text-amber-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Installer sur téléphone (Android & iOS)</span>
            </button>
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
                  onClick={() => onNavigate('adhkar')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  La Citadelle du Musulman & 99 Noms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sunnah')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  40 Hadiths d'An-Nawawī & Sîrah
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
                  Quiz Interactifs (108 questions)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Calculateur de Zakāt & Guide Ramadan
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
                  Boussole Qibla, Horaires & Suivi
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
              Enseignements conformes au Saint Coran et à la Sunnah authentique selon le consensus des savants reconnus. Récitations par les grands récitateurs de La Mecque, d'Algérie et du monde islamique.
            </p>
            <div className="font-arabic text-emerald-400 text-lg">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </div>
            <div className="text-[11px] text-stone-500 italic mt-0.5">
              « Et dis : Ô mon Seigneur, accrois mes connaissances. » (Coran 20:114)
            </div>
          </div>
        </div>

        {/* Sadaqa Jariya Dedication Banner */}
        <div className="my-8 rounded-2xl bg-gradient-to-br from-emerald-950/90 via-stone-900 to-emerald-950/90 border border-emerald-800/60 p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-amber-300 text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span>صدقة جارية</span>
            <span aria-hidden="true">•</span>
            <span>Sadaqa Jariya</span>
          </div>

          <p
            dir="rtl"
            className="font-arabic text-2xl sm:text-3xl text-amber-300 leading-relaxed mb-4 tracking-wide"
          >
            هَذَا العَمَلُ صَدَقَةٌ جَارِيَةٌ، فَلَا تَنْسَوْنَا وَوَالِدَيْنَا مِنْ صَالِحِ دُعَائِكُمْ
          </p>

          <p className="text-sm sm:text-base text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed italic mb-4">
            « Ce travail est une aumône continue (Sadaqa Jariya), ne nous oubliez pas, ainsi que nos parents, dans vos invocations. »
          </p>

          <div className="pt-3 border-t border-emerald-800/40 inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-semibold">
            <span className="text-stone-400 font-normal">Initié et dédié par :</span>
            <span className="text-amber-300 font-bold tracking-wide text-sm sm:text-base">
              Fethi Borsali
            </span>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Al-Manara — <span className="text-emerald-400 font-semibold">Fethi Borsali</span>. Conçu avec rigueur et bienveillance.
          </div>
          <div className="flex items-center gap-4">
            <span>Savoir</span>
            <span aria-hidden="true">·</span>
            <span>Spiritualité</span>
            <span aria-hidden="true">·</span>
            <span>Sadaqa Jariya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
