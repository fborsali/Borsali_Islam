import React, { useState, useMemo, useEffect } from 'react';
import { NAWAWI_HADITHS, SIRAH_TIMELINE, HIJRI_MONTHS, NawawiHadith } from '../data/hadithSirahData';
import { recitationPlayer } from '../utils/audioPlayer';
import {
  BookOpen,
  Compass,
  Calendar,
  Search,
  Volume2,
  VolumeX,
  Sparkles,
  MapPin,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface HadithAndSirahSectionProps {
  onStartProphetsQuiz: () => void;
}

export const HadithAndSirahSection: React.FC<HadithAndSirahSectionProps> = ({ onStartProphetsQuiz }) => {
  const [subTab, setSubTab] = useState<'hadiths' | 'sirah' | 'calendar'>('hadiths');
  const [hadithTheme, setHadithTheme] = useState<'all' | NawawiHadith['theme']>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [eraFilter, setEraFilter] = useState<'all' | 'Période Mecquoise' | 'Période Médinoise'>('all');

  useEffect(() => {
    return () => {
      recitationPlayer.stop();
    };
  }, []);

  // Compute current Hijri date using Intl.DateTimeFormat
  const todayHijriString = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('fr-FR-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(new Date());
    } catch {
      return 'Calendrier Hégirien 1448 H';
    }
  }, []);

  const filteredHadiths = useMemo(() => {
    return NAWAWI_HADITHS.filter((h) => {
      const matchesTheme = hadithTheme === 'all' || h.theme === hadithTheme;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        h.title.toLowerCase().includes(q) ||
        h.translation.toLowerCase().includes(q) ||
        h.narrator.toLowerCase().includes(q) ||
        h.arabic.includes(q);
      return matchesTheme && matchesSearch;
    });
  }, [hadithTheme, searchQuery]);

  const filteredSirah = useMemo(() => {
    if (eraFilter === 'all') return SIRAH_TIMELINE;
    return SIRAH_TIMELINE.filter((m) => m.era === eraFilter);
  }, [eraFilter]);

  const handlePlayArabic = (id: string, arabic: string) => {
    if (playingId === id) {
      recitationPlayer.stop();
      setPlayingId(null);
      return;
    }
    recitationPlayer.playAyah(
      undefined,
      arabic,
      () => setPlayingId(id),
      () => setPlayingId(null)
    );
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sunnah Prophétique, Sîrah & Temps Sacré</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Les Hadiths d'An-Nawawī, La Sîrah du Prophète ﷺ & Calendrier Hégirien
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              Étudiez les paroles prophétiques fondatrices compilées par l'Imam An-Nawawī, parcourez la biographie chronologique du Messager d'Allah ﷺ et découvrez les mois sacrés du calendrier lunaire.
            </p>
          </div>

          {/* Sub-tabs */}
          <div className="flex flex-wrap gap-2 bg-stone-800/90 p-1.5 rounded-xl border border-stone-700 self-start">
            <button
              onClick={() => setSubTab('hadiths')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                subTab === 'hadiths'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Hadiths d'An-Nawawī</span>
            </button>
            <button
              onClick={() => setSubTab('sirah')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                subTab === 'sirah'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Vie du Prophète ﷺ (Sîrah)</span>
            </button>
            <button
              onClick={() => setSubTab('calendar')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                subTab === 'calendar'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Calendrier Hégirien</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUB-TAB 1: HADITHS D'AN-NAWAWI */}
      {subTab === 'hadiths' && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un hadith (ex: intention, cœur, colère, fraternité...)"
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'Intention & Foi', 'Pratique & Éthique', 'Fraternité & Cœur'] as const).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setHadithTheme(theme)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    hadithTheme === theme
                      ? 'bg-emerald-800 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {theme === 'all' ? 'Tous les thèmes' : theme}
                </button>
              ))}
            </div>
          </div>

          {/* Hadiths Cards */}
          <div className="grid grid-cols-1 gap-5">
            {filteredHadiths.map((hadith) => {
              const isPlaying = playingId === `hadith-${hadith.number}`;
              return (
                <div
                  key={hadith.number}
                  className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-emerald-900 text-amber-300 font-mono text-xs font-bold">
                        Hadith n°{hadith.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-stone-900">
                          {hadith.title}
                        </h3>
                        <span className="text-xs text-stone-500">{hadith.theme}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handlePlayArabic(`hadith-${hadith.number}`, hadith.arabic)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                        isPlaying
                          ? 'bg-amber-400 text-stone-950 font-semibold'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      <span>{isPlaying ? 'Arrêter' : 'Écouter en arabe'}</span>
                    </button>
                  </div>

                  {/* Arabic Box */}
                  <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <p
                      dir="rtl"
                      className="font-arabic text-2xl sm:text-3xl leading-[2.1] text-stone-900 text-right"
                    >
                      {hadith.arabic}
                    </p>
                  </div>

                  {/* Phonetic & Translation */}
                  <div className="space-y-2">
                    <p className="text-xs text-emerald-800 font-mono italic">
                      {hadith.phonetic}
                    </p>
                    <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                      {hadith.translation}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1">
                      <span>Rapporté par : <strong className="text-stone-700">{hadith.narrator}</strong></span>
                      <span>·</span>
                      <span>Source : <strong className="text-emerald-800">{hadith.source}</strong></span>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      Enseignements & Sagesses Pratiques :
                    </h4>
                    <ul className="space-y-1.5">
                      {hadith.lessons.map((lesson, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-emerald-950 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: LA VIE DU PROPHETE (AS-SIRAH) */}
      {subTab === 'sirah' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 font-display">
                Chronologie de la Vie du Prophète Muhammad ﷺ (570 – 632 ap. J.-C.)
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                « En vérité, vous avez dans le Messager d'Allah un excellent modèle à suivre... » (Sourate Al-Ahzāb, 33:21)
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'Période Mecquoise', 'Période Médinoise'] as const).map((era) => (
                <button
                  key={era}
                  onClick={() => setEraFilter(era)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    eraFilter === era
                      ? 'bg-emerald-800 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {era === 'all' ? 'Toute la Sîrah' : era}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-700/40 space-y-6 ml-2 sm:ml-4">
            {filteredSirah.map((milestone) => (
              <div
                key={milestone.id}
                className="relative bg-white rounded-xl border border-stone-200 p-6 shadow-xs hover:border-emerald-400 transition-all"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-emerald-700 border-4 border-stone-100 shadow-xs" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-amber-300 font-mono text-xs font-bold">
                      {milestone.yearCE}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                      {milestone.yearHijri}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                        milestone.era === 'Période Mecquoise'
                          ? 'bg-amber-50 text-amber-900 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      }`}
                    >
                      {milestone.era}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{milestone.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    {milestone.title}
                  </h3>
                  <span className="font-arabic text-xl text-emerald-800 font-semibold">
                    {milestone.arabicTitle}
                  </span>
                </div>

                <p className="text-sm font-medium text-stone-800 leading-relaxed mb-3">
                  {milestone.summary}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {milestone.details}
                </p>

                <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950">
                  <strong className="font-semibold">Leçon spirituelle :</strong> {milestone.lesson}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={onStartProphetsQuiz}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm rounded-xl shadow-xs flex items-center gap-2 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Tester mes connaissances sur les Prophètes & la Sîrah</span>
            </button>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: CALENDRIER HEGIRIEN & MOIS SACRES */}
      {subTab === 'calendar' && (
        <div className="space-y-6">
          {/* Today's Hijri Date Card */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-900 text-white rounded-xl p-6 border border-emerald-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                Date Hégirienne du Jour (Umm Al-Qurā)
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-amber-300 capitalize">
                {todayHijriString}
              </div>
              <p className="text-xs text-stone-300">
                Le calendrier islamique débute avec l'Hégire du Prophète ﷺ vers Médine (622 ap. J.-C.) et compte 12 mois lunaires de 29 ou 30 jours.
              </p>
            </div>
            <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-emerald-100 max-w-xs">
              <strong>Les 4 Mois Sacrés (Al-Ashhur Al-Ḥurum) :</strong> Dhū Al-Qi'dah, Dhū Al-Ḥijjah, Al-Muḥarram et Rajab (Coran 9:36).
            </div>
          </div>

          {/* 12 Months Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIJRI_MONTHS.map((month) => (
              <div
                key={month.number}
                className={`rounded-xl border p-5 shadow-xs flex flex-col justify-between ${
                  month.isSacred
                    ? 'bg-amber-50/40 border-amber-300'
                    : month.number === 9
                    ? 'bg-emerald-50/50 border-emerald-400'
                    : 'bg-white border-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {month.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {month.isSacred && (
                        <span className="px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 text-[11px] font-bold">
                          Mois Sacré
                        </span>
                      )}
                      {month.number === 9 && (
                        <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[11px] font-bold">
                          Mois Béni
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-base font-bold text-stone-900">
                      {month.name}
                    </h3>
                    <span className="font-arabic text-xl font-bold text-emerald-900">
                      {month.arabicName}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 mb-3">
                    {month.meaning}
                  </p>

                  <ul className="space-y-1.5 border-t border-stone-200/70 pt-3">
                    {month.events.map((ev, i) => (
                      <li key={i} className="text-xs text-stone-700 flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
