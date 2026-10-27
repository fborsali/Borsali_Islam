import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ALL_114_SURAHS, SurahMeta } from '../data/allSurahsMetadata';
import { RECITERS, Reciter } from '../data/recitersData';
import { ESSENTIAL_SURAHS, TAJWEED_RULES, QURAN_OVERVIEW } from '../data/quranData';
import { recitationPlayer, AudioTimeUpdate } from '../utils/audioPlayer';
import { renderTajweedColoredText, TAJWEED_LEGEND } from '../utils/tajweedColorizer';
import {
  Play,
  Pause,
  RotateCcw,
  SkipBack,
  SkipForward,
  Search,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Info,
  Check,
  ChevronRight,
  Sliders,
  Compass
} from 'lucide-react';

interface QuranExplorerProps {
  onStartQuranQuiz: () => void;
}

interface LoadedVerse {
  numberInSurah: number;
  arabicText: string;
  frenchText: string;
}

export const QuranExplorer: React.FC<QuranExplorerProps> = ({ onStartQuranQuiz }) => {
  const [subTab, setSubTab] = useState<'surahs' | 'overview' | 'tajweed'>('surahs');

  // Active Surah & Reciter
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [selectedReciterId, setSelectedReciterId] = useState<string>('sudais'); // Default to Grand Imam of Mecca
  const [reciterCategory, setReciterCategory] = useState<'all' | 'algeria' | 'mecca' | 'reference'>('all');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterType, setFilterType] = useState<'all' | 'meccan' | 'medinan' | 'famous' | 'juz30' | 'favorites'>('all');

  // Audio Playback & Hifz Memorization State
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [loopSurah, setLoopSurah] = useState<boolean>(false);
  const [favoriteSurahs, setFavoriteSurahs] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('almanara_fav_surahs');
      return saved ? JSON.parse(saved) : [1, 18, 36, 67, 112];
    } catch {
      return [1, 18, 36, 67, 112];
    }
  });

  const toggleFavoriteSurah = (surahNum: number) => {
    setFavoriteSurahs((prev) => {
      const next = prev.includes(surahNum) ? prev.filter((n) => n !== surahNum) : [...prev, surahNum];
      try {
        localStorage.setItem('almanara_fav_surahs', JSON.stringify(next));
      } catch {
        // Ignore storage error
      }
      return next;
    });
  };

  // Verses Display State
  const [versesList, setVersesList] = useState<LoadedVerse[]>([]);
  const [isLoadingVerses, setIsLoadingVerses] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [showTajweedColors, setShowTajweedColors] = useState<boolean>(true);
  const [showLegend, setShowLegend] = useState<boolean>(false);
  const [arabicFontSize, setArabicFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');

  // Verses cache so we don't re-fetch
  const versesCacheRef = useRef<Record<number, LoadedVerse[]>>({});
  const activeSurahRef = useRef<number>(1);

  const currentReciter = useMemo(
    () => RECITERS.find(r => r.id === selectedReciterId) || RECITERS[0],
    [selectedReciterId]
  );

  const filteredReciters = useMemo(() => {
    if (reciterCategory === 'all') return RECITERS;
    return RECITERS.filter(r => r.category === reciterCategory);
  }, [reciterCategory]);

  const currentSurahMeta = useMemo(
    () => ALL_114_SURAHS.find(s => s.number === selectedSurahNumber) || ALL_114_SURAHS[0],
    [selectedSurahNumber]
  );

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      recitationPlayer.stop();
    };
  }, []);

  // Update activeSurahRef when selectedSurahNumber changes
  useEffect(() => {
    activeSurahRef.current = selectedSurahNumber;
  }, [selectedSurahNumber]);

  // Load verses whenever selectedSurahNumber changes
  useEffect(() => {
    loadVersesForSurah(selectedSurahNumber);
  }, [selectedSurahNumber]);

  // Helper to load verses (from local preloaded or API)
  const loadVersesForSurah = async (surahNum: number) => {
    // 1. Check local cache
    if (versesCacheRef.current[surahNum]) {
      setVersesList(versesCacheRef.current[surahNum]);
      return;
    }

    // 2. Check local essential surahs
    const localEssential = ESSENTIAL_SURAHS.find(s => s.number === surahNum);
    if (localEssential) {
      const formatted: LoadedVerse[] = localEssential.verses.map(v => ({
        numberInSurah: v.number,
        arabicText: v.arabic,
        frenchText: v.translation
      }));
      versesCacheRef.current[surahNum] = formatted;
      setVersesList(formatted);
      return;
    }

    // 3. Fetch from AlQuran Cloud API
    setIsLoadingVerses(true);
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,fr.hamidullah`
      );
      const data = await response.json();

      if (data?.code === 200 && data?.data?.length >= 2) {
        const arabicAyahs = data.data[0].ayahs;
        const frenchAyahs = data.data[1].ayahs;

        const combined: LoadedVerse[] = arabicAyahs.map((ay: { numberInSurah: number; text: string }, idx: number) => ({
          numberInSurah: ay.numberInSurah || idx + 1,
          arabicText: ay.text,
          frenchText: frenchAyahs[idx]?.text || ''
        }));

        versesCacheRef.current[surahNum] = combined;
        if (activeSurahRef.current === surahNum) {
          setVersesList(combined);
        }
      }
    } catch {
      // In case of network interruption, fallback to empty list without breaking UI
    } finally {
      if (activeSurahRef.current === surahNum) {
        setIsLoadingVerses(false);
      }
    }
  };

  /**
   * CRITICAL USER REQUIREMENT:
   * "il faut qd je clique sur une sourate, elle commence a la premeir verset jusqua la fin"
   */
  const handleSelectAndPlaySurah = (surahNumber: number, reciter?: Reciter) => {
    const targetReciter = reciter || currentReciter;
    setSelectedSurahNumber(surahNumber);
    activeSurahRef.current = surahNumber;

    const streamUrl = targetReciter.getAudioUrl(surahNumber);

    recitationPlayer.playSurahStream(streamUrl, {
      onStart: () => {
        setIsPlaying(true);
      },
      onTimeUpdate: (update: AudioTimeUpdate) => {
        setCurrentTime(update.currentTime);
        setDuration(update.duration);
      },
      onEnd: () => {
        setIsPlaying(false);
        // Mode Hifz (Boucle sur la même sourate) ou passage à la suivante
        if (loopSurah) {
          handleSelectAndPlaySurah(surahNumber, targetReciter);
        } else if (autoAdvance && surahNumber < 114) {
          handleSelectAndPlaySurah(surahNumber + 1, targetReciter);
        }
      },
      onError: () => {
        setIsPlaying(false);
      }
    });
  };

  const handleTogglePlayPause = () => {
    if (isPlaying) {
      recitationPlayer.pause();
      setIsPlaying(false);
    } else {
      if (recitationPlayer.getCurrentTime() > 0) {
        recitationPlayer.resume();
        setIsPlaying(true);
      } else {
        handleSelectAndPlaySurah(selectedSurahNumber, currentReciter);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    recitationPlayer.seek(targetTime);
  };

  const handleSkipSeconds = (deltaSeconds: number) => {
    const newTime = Math.max(0, Math.min(currentTime + deltaSeconds, duration));
    setCurrentTime(newTime);
    recitationPlayer.seek(newTime);
  };

  const handlePreviousSurah = () => {
    if (selectedSurahNumber > 1) {
      handleSelectAndPlaySurah(selectedSurahNumber - 1);
    }
  };

  const handleNextSurah = () => {
    if (selectedSurahNumber < 114) {
      handleSelectAndPlaySurah(selectedSurahNumber + 1);
    }
  };

  const handleChangeReciter = (reciterId: string) => {
    setSelectedReciterId(reciterId);
    const newReciter = RECITERS.find(r => r.id === reciterId);
    if (newReciter) {
      // Re-trigger playback from beginning with new reciter
      handleSelectAndPlaySurah(selectedSurahNumber, newReciter);
    }
  };

  const handleChangeSpeed = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    recitationPlayer.setPlaybackRate(newSpeed);
  };

  const formatTime = (secondsVal: number): string => {
    if (isNaN(secondsVal) || secondsVal <= 0) return '00:00';
    const mins = Math.floor(secondsVal / 60);
    const secs = Math.floor(secondsVal % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Filter 114 Surahs
  const filteredSurahs = useMemo(() => {
    return ALL_114_SURAHS.filter(s => {
      // Search text
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNumber = s.number.toString() === query;
        const matchesName = s.name.toLowerCase().includes(query);
        const matchesTrans = s.translationName.toLowerCase().includes(query);
        const matchesArabic = s.arabicName.includes(query) || s.shortArabic.includes(query);
        if (!matchesNumber && !matchesName && !matchesTrans && !matchesArabic) return false;
      }

      // Filter category
      if (filterType === 'meccan') return s.revelationType === 'Mecquoise';
      if (filterType === 'medinan') return s.revelationType === 'Médinoise';
      if (filterType === 'juz30') return s.number >= 78;
      if (filterType === 'favorites') return favoriteSurahs.includes(s.number);
      if (filterType === 'famous') {
        const famousNumbers = [1, 2, 18, 36, 55, 56, 67, 112, 113, 114];
        return famousNumbers.includes(s.number);
      }
      return true;
    });
  }, [searchQuery, filterType, favoriteSurahs]);

  const getFontSizeClass = () => {
    switch (arabicFontSize) {
      case 'normal': return 'text-2xl leading-loose';
      case 'large': return 'text-3xl leading-loose';
      case 'xlarge': return 'text-4xl leading-[2.6]';
      default: return 'text-3xl leading-loose';
    }
  };

  return (
    <div className="space-y-8 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span>Récitation & Sciences Coraniques</span>
            <span aria-hidden="true">·</span>
            <span>Les 114 Sourates Complètes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Écoute & Méditation du Saint Coran
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Récitations intégrales des 114 sourates par les plus illustres imams de La Mecque et Sheikh Mishary Alafasy. Cliquez sur n'importe quelle sourate pour démarrer instantanément la récitation du premier au dernier verset.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg shrink-0">
          <button
            onClick={() => setSubTab('surahs')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              subTab === 'surahs'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Les 114 Sourates & Récitations
          </button>
          <button
            onClick={() => setSubTab('overview')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              subTab === 'overview'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Origines & Structure
          </button>
          <button
            onClick={() => setSubTab('tajweed')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              subTab === 'tajweed'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Guide du Tajweed
          </button>
        </div>
      </div>

      {subTab === 'surahs' && (
        <div className="space-y-6">
          {/* Reciters Selection Strip */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Choisir le Récitateur (La Mecque, Algérie 🇩🇿, Khaled Al-Jalil & Grandes Voix)
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Écoute complète de chaque sourate du début à la fin (Hafs 'an 'Asim & Warsh 'an Nafi')
                </p>
              </div>

              {/* Reciter Category Tabs */}
              <div className="flex flex-wrap items-center gap-1 bg-stone-100 p-1 rounded-lg">
                {[
                  { id: 'all' as const, label: `Toutes les voix (${RECITERS.length})` },
                  { id: 'algeria' as const, label: 'Algérie 🇩🇿 (Warsh)' },
                  { id: 'mecca' as const, label: 'La Mecque 🕋' },
                  { id: 'reference' as const, label: 'Khaled Al-Jalil & Références ✨' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setReciterCategory(cat.id)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                      reciterCategory === cat.id
                        ? 'bg-white text-stone-900 shadow-xs font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reciters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredReciters.map((reciter) => {
                const isSelected = reciter.id === selectedReciterId;
                return (
                  <button
                    key={reciter.id}
                    onClick={() => handleChangeReciter(reciter.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 relative ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-emerald-500/40'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-lg bg-gradient-to-br ${reciter.avatarBg} text-white flex flex-col items-center justify-center font-bold text-xs shrink-0 shadow-xs`}
                    >
                      <span className="text-base leading-none">{reciter.flag}</span>
                      <span className="text-[9px] uppercase tracking-tighter opacity-90 font-mono mt-0.5">
                        {reciter.category === 'algeria' ? 'Warsh' : reciter.isMecca ? 'Makkah' : 'Hafs'}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-xs truncate">
                          {reciter.name}
                        </span>
                        {reciter.isMecca ? (
                          <span className={`text-[10px] font-mono px-1 rounded shrink-0 ${isSelected ? 'bg-amber-400 text-stone-900 font-bold' : 'bg-amber-100 text-amber-900'}`}>
                            La Mecque
                          </span>
                        ) : reciter.category === 'algeria' ? (
                          <span className={`text-[10px] font-mono px-1 rounded shrink-0 ${isSelected ? 'bg-emerald-400 text-stone-900 font-bold' : 'bg-emerald-100 text-emerald-900'}`}>
                            Algérie 🇩🇿
                          </span>
                        ) : reciter.id === 'khaled_aljalil' ? (
                          <span className={`text-[10px] font-mono px-1 rounded shrink-0 ${isSelected ? 'bg-indigo-300 text-indigo-950 font-bold' : 'bg-indigo-100 text-indigo-900'}`}>
                            Riyad
                          </span>
                        ) : null}
                      </div>

                      <div className={`font-arabic text-xs mt-0.5 ${isSelected ? 'text-emerald-300 font-medium' : 'text-stone-700 font-semibold'}`}>
                        {reciter.arabicName}
                      </div>

                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isSelected ? 'bg-stone-800 text-emerald-300 border border-stone-700' : 'bg-white text-emerald-800 border border-emerald-200'}`}>
                          {reciter.rewaya}
                        </span>
                      </div>

                      <div className={`text-[11px] truncate mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {reciter.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Fast Filters */}
          <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher (ex: 36, Yasin, Al-Mulk, La Vache...)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { id: 'all' as const, label: `Toutes (${ALL_114_SURAHS.length})` },
                { id: 'favorites' as const, label: `Favoris ★ (${favoriteSurahs.length})` },
                { id: 'famous' as const, label: 'Sourates Célèbres' },
                { id: 'juz30' as const, label: 'Juz 30 (Amma 78-114)' },
                { id: 'meccan' as const, label: 'Mecquoises' },
                { id: 'medinan' as const, label: 'Médinoises' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterType(f.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    filterType === f.id
                      ? 'bg-emerald-900 text-white font-semibold'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Surah Catalog (114 Surahs Scrollable Grid) */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
              <span className="font-semibold uppercase tracking-wider text-stone-700">
                Catalogue des Sourates ({filteredSurahs.length} affichées)
              </span>
              <span>Cliquez pour écouter du 1er verset jusqu'à la fin</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-72 overflow-y-auto p-1 pr-2">
              {filteredSurahs.map((s) => {
                const isSelected = s.number === selectedSurahNumber;
                return (
                  <button
                    key={s.number}
                    onClick={() => handleSelectAndPlaySurah(s.number)}
                    className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs ring-2 ring-emerald-500/40'
                        : 'bg-stone-50 hover:bg-emerald-50/50 hover:border-emerald-300 text-stone-800 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-mono text-[11px] ${isSelected ? 'text-emerald-300' : 'text-stone-500'}`}>
                        {s.number}.
                      </span>
                      <span className={`font-arabic text-sm ${isSelected ? 'text-emerald-200' : 'text-stone-700 font-semibold'}`}>
                        {s.shortArabic}
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate">
                      {s.name}
                    </div>
                    <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-emerald-200/80' : 'text-stone-500'}`}>
                      {s.translationName}
                    </div>
                    <div className="flex items-center justify-between text-[9px] mt-1.5 pt-1 border-t border-stone-200/50 opacity-80">
                      <span>{s.versesCount} v.</span>
                      <span>{s.revelationType === 'Mecquoise' ? 'Mecq.' : 'Méd.'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Surah Scripture Viewer (Text & Verses) */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            {/* Surah Header Card */}
            <div className="p-6 bg-gradient-to-r from-stone-900 via-stone-850 to-emerald-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
                  <span>Sourate N°{currentSurahMeta.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentSurahMeta.revelationType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentSurahMeta.versesCount} Versets</span>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {currentSurahMeta.name} ({currentSurahMeta.translationName})
                  </h2>
                  <span className="font-arabic text-3xl text-emerald-400 font-bold">
                    {currentSurahMeta.arabicName}
                  </span>
                </div>
                <p className="text-xs text-stone-300 mt-2 flex items-center gap-2 flex-wrap">
                  <span>Récitation par <strong>{currentReciter.name}</strong> {currentReciter.flag}</span>
                  <span className="text-emerald-400 font-mono text-[11px] bg-stone-800/80 px-2 py-0.5 rounded border border-emerald-900/60">{currentReciter.rewaya}</span>
                  <span className="text-stone-400 text-[11px]">({currentReciter.role})</span>
                </p>
              </div>

              {/* Start Recitation CTA + Hifz Loop + Favorite */}
              <div className="shrink-0 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => toggleFavoriteSurah(currentSurahMeta.number)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    favoriteSurahs.includes(currentSurahMeta.number)
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:text-white'
                  }`}
                  title="Ajouter ou retirer des Sourates favorites"
                >
                  <span>{favoriteSurahs.includes(currentSurahMeta.number) ? '★ Favori' : '☆ Favori'}</span>
                </button>

                <button
                  onClick={() => setLoopSurah(!loopSurah)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    loopSurah
                      ? 'bg-emerald-700 border-emerald-400 text-white'
                      : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:text-white'
                  }`}
                  title="Mode Mémorisation (Hifz) : Répéter la sourate en boucle"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{loopSurah ? 'Boucle Hifz : ON' : 'Boucle Hifz'}</span>
                </button>

                <button
                  onClick={handleTogglePlayPause}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm ${
                    isPlaying
                      ? 'bg-amber-400 text-stone-900'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Mettre en pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Écouter depuis le 1er verset</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Reading Preferences Bar */}
            <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showTranslation}
                    onChange={(e) => setShowTranslation(e.target.checked)}
                    className="rounded text-emerald-700 focus:ring-emerald-600"
                  />
                  <span>Traduction en français</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showTajweedColors}
                    onChange={(e) => setShowTajweedColors(e.target.checked)}
                    className="rounded text-emerald-700 focus:ring-emerald-600"
                  />
                  <span className="font-semibold text-emerald-950">Couleurs Tajweed & Nom d'Allah</span>
                </label>

                <button
                  onClick={() => setShowLegend(!showLegend)}
                  className="text-[11px] text-stone-500 hover:text-stone-900 underline underline-offset-2 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>{showLegend ? 'Masquer la légende' : 'Légende des couleurs'}</span>
                </button>
              </div>

              {/* Font size control */}
              <div className="flex items-center gap-1.5">
                <span className="text-stone-500 text-[11px]">Taille du texte arabe :</span>
                {(['normal', 'large', 'xlarge'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setArabicFontSize(sz)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      arabicFontSize === sz
                        ? 'bg-emerald-900 text-white'
                        : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                    }`}
                  >
                    {sz === 'normal' ? 'A' : sz === 'large' ? 'A+' : 'A++'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tajweed Legend Box (Mushaf Tajweed color guide) */}
            {showLegend && (
              <div className="p-4 bg-stone-100/80 border-b border-stone-200 text-xs">
                <div className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Guide des Couleurs du Mushaf Tajweed :</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {TAJWEED_LEGEND.map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-white rounded-lg border border-stone-200 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs ${item.colorClass}`}>{item.label}</span>
                        <span className="font-arabic text-sm text-stone-600 font-bold">{item.arabicName}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Basmalah Ornament (except Surah 9 At-Tawbah) */}
            {currentSurahMeta.number !== 9 && (
              <div className="py-6 text-center border-b border-stone-100 bg-stone-50/30">
                <p className="font-arabic text-2xl sm:text-3xl text-emerald-950 font-bold tracking-wide">
                  {renderTajweedColoredText("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", showTajweedColors)}
                </p>
                <p className="text-xs text-stone-500 italic mt-1">
                  Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux
                </p>
              </div>
            )}

            {/* Verses List */}
            {isLoadingVerses ? (
              <div className="p-12 text-center text-xs text-stone-500 space-y-2">
                <div className="w-6 h-6 border-2 border-emerald-700 border-t-transparent rounded-full animate-spin mx-auto" />
                <p>Chargement des versets de la sourate...</p>
              </div>
            ) : (
              <div className="divide-y divide-stone-100 p-4 sm:p-6 space-y-4">
                {versesList.map((verse) => (
                  <div
                    key={verse.numberInSurah}
                    className="pt-5 first:pt-0 rounded-xl p-4 transition-all hover:bg-stone-50/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center font-mono text-xs font-semibold text-stone-700">
                          {verse.numberInSurah}
                        </span>
                        <span className="text-xs text-stone-400">
                          Verset {verse.numberInSurah} / {currentSurahMeta.versesCount}
                        </span>
                      </div>
                    </div>

                    {/* Arabic Text with Uthmani Calligraphy & Tajweed Colors */}
                    <div className="text-right dir-rtl py-2">
                      <p className={`font-arabic text-stone-900 font-semibold tracking-wide ${getFontSizeClass()}`}>
                        {renderTajweedColoredText(verse.arabicText, showTajweedColors)}
                      </p>
                    </div>

                    {/* French Translation */}
                    {showTranslation && verse.frenchText && (
                      <p className="text-sm sm:text-base text-stone-700 font-medium mt-2 leading-relaxed">
                        {verse.frenchText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overview & Structure Tab */}
      {subTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium mb-1">
                <span>Introduction aux Sciences du Coran</span>
                <span aria-hidden="true">·</span>
                <span>'Ulūm Al-Qur'ān</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                {QURAN_OVERVIEW.title}
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed mt-2 max-w-3xl">
                {QURAN_OVERVIEW.definition}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: "Sourates", val: QURAN_OVERVIEW.structure.totalSurahs },
                { label: "Versets (Ayāt)", val: QURAN_OVERVIEW.structure.totalVerses },
                { label: "Parties (Juz)", val: QURAN_OVERVIEW.structure.totalJuz },
                { label: "Sections (Hizb)", val: QURAN_OVERVIEW.structure.totalHizb }
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">{stat.label}</div>
                  <div className="text-2xl font-bold font-mono text-emerald-950 mt-1 tabular-nums">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
              <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-amber-950 text-base">
                    {QURAN_OVERVIEW.makkiVsMadani.makki.title}
                  </h3>
                  <span className="font-mono text-xs text-amber-800 font-semibold">
                    {QURAN_OVERVIEW.makkiVsMadani.makki.count} sourates
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {QURAN_OVERVIEW.makkiVsMadani.makki.themes}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-teal-950 text-base">
                    {QURAN_OVERVIEW.makkiVsMadani.madani.title}
                  </h3>
                  <span className="font-mono text-xs text-teal-800 font-semibold">
                    {QURAN_OVERVIEW.makkiVsMadani.madani.count} sourates
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {QURAN_OVERVIEW.makkiVsMadani.madani.themes}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Bienséances (Adāb) pour la lecture du Coran</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QURAN_OVERVIEW.etiquettes.map((etiq, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-stone-50 rounded-lg text-xs text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{etiq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tajweed Tab */}
      {subTab === 'tajweed' && (
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <div className="mb-6">
              <h2 className="text-xl font-bold font-display text-stone-900 mb-1">
                Initiation aux Règles de Tajweed (Récitation Embellie)
              </h2>
              <p className="text-xs text-stone-600 max-w-2xl">
                Le Tajweed (التجويد) consiste à donner à chaque lettre arabe son droit d'articulation et ses caractéristiques sans excès ni défaut. Voici les quatre règles indispensables pour bien commencer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TAJWEED_RULES.map((rule) => (
                <div key={rule.id} className="p-5 rounded-xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-stone-900 text-base">
                        {rule.name}
                      </h3>
                      <span className="font-arabic text-lg text-emerald-800 font-bold">
                        {rule.arabicName}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {rule.description}
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-mono">Exemple :</span>
                      <span className="font-arabic text-base text-stone-900 font-bold">
                        {rule.exampleArabic}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 italic">
                      {rule.examplePhonetic}
                    </div>
                    <div className="text-xs text-stone-700 mt-1">
                      {rule.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz trigger */}
      <div className="p-6 bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white mb-1">
            Testez vos connaissances sur le Saint Coran
          </h3>
          <p className="text-xs text-stone-300">
            Évaluez votre compréhension des sourates, de la révélation et des règles de Tajweed.
          </p>
        </div>
        <button
          onClick={onStartQuranQuiz}
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Lancer le Quiz Coran
        </button>
      </div>

      {/* PERSISTENT FULL-FEATURED RECITATION DOCK PLAYER (STICKY BOTTOM) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900 text-white border-t border-stone-800 shadow-2xl backdrop-blur-md bg-opacity-98">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Progress Slider */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-mono text-stone-400 tabular-nums">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <span className="text-[11px] font-mono text-stone-400 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left Zone: Current Track Info */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-lg bg-emerald-900 text-emerald-300 font-bold flex items-center justify-center font-mono text-xs shrink-0">
                {currentSurahMeta.number}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white truncate">
                    {currentSurahMeta.number}. {currentSurahMeta.name}
                  </span>
                  <span className="font-arabic text-emerald-400 text-sm hidden md:inline">
                    {currentSurahMeta.shortArabic}
                  </span>
                </div>
                <div className="text-xs text-stone-400 truncate flex items-center gap-1.5">
                  <span>{currentReciter.flag}</span>
                  <span>{currentReciter.name}</span>
                  <span className="text-stone-600">·</span>
                  <span className="text-emerald-400 font-mono text-[11px]">{currentReciter.rewaya}</span>
                </div>
              </div>
            </div>

            {/* Center Zone: Playback Controls */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Previous Surah */}
              <button
                onClick={handlePreviousSurah}
                disabled={selectedSurahNumber <= 1}
                className="p-1.5 text-stone-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Sourate précédente"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              {/* Skip -10s */}
              <button
                onClick={() => handleSkipSeconds(-10)}
                className="p-1.5 text-stone-300 hover:text-white transition-colors text-xs font-mono"
                title="Reculer de 10 secondes"
              >
                -10s
              </button>

              {/* Main Play / Pause Button */}
              <button
                onClick={handleTogglePlayPause}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-95 shadow-md ${
                  isPlaying
                    ? 'bg-amber-400 text-stone-900'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-white'
                }`}
                title={isPlaying ? 'Pause' : 'Lecture'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>

              {/* Skip +10s */}
              <button
                onClick={() => handleSkipSeconds(10)}
                className="p-1.5 text-stone-300 hover:text-white transition-colors text-xs font-mono"
                title="Avancer de 10 secondes"
              >
                +10s
              </button>

              {/* Next Surah */}
              <button
                onClick={handleNextSurah}
                disabled={selectedSurahNumber >= 114}
                className="p-1.5 text-stone-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Sourate suivante"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Right Zone: Autoplay & Speed Controls */}
            <div className="flex items-center gap-3 shrink-0 text-xs">
              {/* Autoplay next toggle */}
              <label className="flex items-center gap-1.5 text-stone-300 cursor-pointer hidden md:flex">
                <input
                  type="checkbox"
                  checked={autoAdvance}
                  onChange={(e) => setAutoAdvance(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-400 bg-stone-800"
                />
                <span className="text-[11px]">Enchaîner sourate suivante</span>
              </label>

              {/* Speed switcher */}
              <div className="flex items-center gap-1 bg-stone-800 p-1 rounded-lg">
                {[0.75, 1, 1.25].map((sp) => (
                  <button
                    key={sp}
                    onClick={() => handleChangeSpeed(sp)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                      playbackSpeed === sp
                        ? 'bg-emerald-600 text-white'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {sp}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
