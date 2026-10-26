import React, { useState } from 'react';
import { ISLAM_PILLARS, IMAN_ARTICLES } from '../data/pillarsData';
import { Pillar } from '../types';
import { Moon, Sparkles, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onStartPillarsQuiz: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onStartPillarsQuiz }) => {
  const [activePillarTab, setActivePillarTab] = useState<'islam' | 'iman'>('islam');
  const [selectedPillarId, setSelectedPillarId] = useState<string>(ISLAM_PILLARS[0].id);

  const selectedPillar = ISLAM_PILLARS.find(p => p.id === selectedPillarId) || ISLAM_PILLARS[0];

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span>Théologie & Pratique</span>
            <span aria-hidden="true">·</span>
            <span>Fondements de la Croyance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Les Piliers de l'Islam & les Articles de la Foi
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            L'édifice du musulman repose sur deux dimensions indissociables : les 5 Piliers de l'Islam (les actes du corps et de la communauté) et les 6 Piliers de l'Iman (la foi sincère du cœur).
          </p>
        </div>

        {/* Tab switch control (functional buttons, not pills) */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg shrink-0">
          <button
            onClick={() => setActivePillarTab('islam')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              activePillarTab === 'islam'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Les 5 Piliers de l'Islam
          </button>
          <button
            onClick={() => setActivePillarTab('iman')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              activePillarTab === 'iman'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Les 6 Piliers de la Foi (Iman)
          </button>
        </div>
      </div>

      {activePillarTab === 'islam' ? (
        <div className="space-y-6">
          {/* Horizontal selector strip for 5 Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {ISLAM_PILLARS.map((p) => {
              const isSelected = p.id === selectedPillar.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillarId(p.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-600/30'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-mono text-xs ${isSelected ? 'text-emerald-300' : 'text-stone-500'}`}>
                      0{p.number}
                    </span>
                    <span className={`font-arabic text-sm ${isSelected ? 'text-emerald-200' : 'text-stone-600'}`}>
                      {p.arabicTitle}
                    </span>
                  </div>
                  <div className="text-sm font-semibold tracking-tight">
                    {p.title}
                  </div>
                  <div className={`text-[11px] truncate mt-1 ${isSelected ? 'text-emerald-200/80' : 'text-stone-500'}`}>
                    {p.transliteration}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <span>Pilier N°{selectedPillar.number} de l'Islam</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPillar.transliteration}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                  {selectedPillar.title}
                </h2>
                <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
                  {selectedPillar.summary}
                </p>
              </div>

              <div className="shrink-0 p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-center min-w-[160px]">
                <div className="font-arabic text-3xl font-bold text-emerald-900 mb-1">
                  {selectedPillar.arabicTitle}
                </div>
                <div className="text-xs text-emerald-800 font-medium">
                  {selectedPillar.transliteration}
                </div>
              </div>
            </div>

            {/* Pillar Details & Wisdom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Enseignements & Règles Clés</span>
                </h3>
                <ul className="space-y-3">
                  {selectedPillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Sagesse Spirituelle & Bienfaits</span>
                </h3>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 text-sm text-stone-700 leading-relaxed">
                  {selectedPillar.wisdom}
                </div>

                {/* Dalil / Source */}
                <div className="p-4 bg-emerald-950 text-emerald-100 rounded-xl border border-emerald-900 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Preuve scripturaire (Dalīl)</span>
                  </div>
                  <p className="text-sm italic leading-relaxed text-emerald-100">
                    {selectedPillar.dalil.text}
                  </p>
                  <div className="text-right text-xs text-emerald-400 font-medium">
                    — {selectedPillar.dalil.source}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* The 6 Articles of Iman (Faith) */
        <div className="space-y-6">
          <div className="p-5 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold font-display text-white mb-1">
                Les Six Piliers de la Foi (Arkān Al-Īmān)
              </h2>
              <p className="text-xs text-stone-300 max-w-2xl">
                Tirés du célèbre Hadith de l'ange Jibril interrogé par le Prophète ﷺ. Ils constituent la croyance intime et inébranlable du croyant.
              </p>
            </div>
            <button
              onClick={onStartPillarsQuiz}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Quiz sur la Foi & les Piliers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {IMAN_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                    <span className="font-mono">Article 0{article.number}</span>
                    <span className="font-arabic text-base text-stone-700 font-medium">
                      {article.arabicTitle}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {article.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-1.5">
                  {article.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA to test knowledge */}
      <div className="p-6 bg-gradient-to-r from-emerald-950 to-stone-900 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white mb-1">
            Prêt à évaluer vos connaissances sur les Piliers ?
          </h3>
          <p className="text-xs text-emerald-200/80">
            Des questions ciblées sur la Chahada, la Zakat, le Ramadan et les fondements de la foi.
          </p>
        </div>
        <button
          onClick={onStartPillarsQuiz}
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Lancer le Quiz Piliers
        </button>
      </div>
    </div>
  );
};
