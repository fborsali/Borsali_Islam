import React, { useState } from 'react';
import { POST_PRAYER_TASBIH, DAILY_ADHKAR } from '../data/adhkarData';
import { DhikrItem } from '../types';
import { X, RotateCcw, Volume2, Sparkles, Check } from 'lucide-react';

interface TasbihModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TasbihModal: React.FC<TasbihModalProps> = ({ isOpen, onClose }) => {
  const [selectedDhikr, setSelectedDhikr] = useState<DhikrItem>(POST_PRAYER_TASBIH[0]);
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [totalSessionsCount, setTotalSessionsCount] = useState<number>(0);

  if (!isOpen) return null;

  const handleIncrement = () => {
    // Play light click sound via AudioContext
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext unavailable or blocked
    }

    // Try haptic vibration
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(20);
      } catch {
        // Safe fallback
      }
    }

    setCurrentCount(prev => prev + 1);
    setTotalSessionsCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCurrentCount(0);
  };

  const handleSelectDhikr = (dhikr: DhikrItem) => {
    setSelectedDhikr(dhikr);
    setCurrentCount(0);
  };

  const progressPercentage = Math.min(100, Math.round((currentCount / selectedDhikr.targetCount) * 100));
  const isTargetReached = currentCount >= selectedDhikr.targetCount;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold text-white font-display">
              Chapelet Électronique & Invocations (Tasbīh)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Invocations Switcher */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Choisir une invocation :
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[...POST_PRAYER_TASBIH, ...DAILY_ADHKAR].map((d) => {
                const isSelected = d.id === selectedDhikr.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => handleSelectDhikr(d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-emerald-800 text-white shadow-xs font-semibold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {d.title.split(' ')[0]} ({d.targetCount})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Dhikr Card */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-2">
            <div className="font-arabic text-2xl sm:text-3xl text-emerald-950 font-bold leading-relaxed">
              {selectedDhikr.arabic}
            </div>
            <div className="text-xs text-stone-500 italic font-mono">
              {selectedDhikr.phonetic}
            </div>
            <div className="text-xs text-stone-700 font-medium">
              « {selectedDhikr.translation} »
            </div>
          </div>

          {/* Giant Clickable Counter */}
          <div className="flex flex-col items-center justify-center pt-2">
            <button
              onClick={handleIncrement}
              className={`relative w-44 h-44 rounded-full border-4 flex flex-col items-center justify-center transition-all transform active:scale-95 shadow-md select-none cursor-pointer ${
                isTargetReached
                  ? 'border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-4 ring-emerald-200'
                  : 'border-stone-300 hover:border-emerald-600 bg-white text-stone-900'
              }`}
            >
              <span className="text-5xl font-bold font-mono tabular-nums">
                {currentCount}
              </span>
              <span className="text-xs text-stone-500 font-medium mt-1">
                Objectif : {selectedDhikr.targetCount}
              </span>
              <span className="text-[10px] text-stone-400 mt-0.5">
                Appuyer pour compter
              </span>

              {isTargetReached && (
                <div className="absolute -top-2 right-2 bg-emerald-600 text-white rounded-full p-1 shadow-sm">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </button>

            {/* Target Progress Bar */}
            <div className="w-56 mt-4 space-y-1">
              <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-200"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                <span>{progressPercentage}% accompli</span>
                <span>Session : {totalSessionsCount}</span>
              </div>
            </div>
          </div>

          {/* Merit Note */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-lg text-xs text-emerald-900 text-center">
            ✨ {selectedDhikr.virtue}
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Remettre à zéro</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Fermer le Tasbīh
          </button>
        </div>
      </div>
    </div>
  );
};
