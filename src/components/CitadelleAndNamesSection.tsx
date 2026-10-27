import React, { useState, useMemo, useEffect } from 'react';
import { HISN_CATEGORIES, HISN_DUAS, HisnCategory, HisnDua } from '../data/hisnAlMuslimData';
import { ALLAH_99_NAMES, AllahName } from '../data/asmaulHusnaData';
import { recitationPlayer } from '../utils/audioPlayer';
import {
  Sparkles,
  Sun,
  Moon,
  Home,
  Compass,
  Heart,
  BookOpen,
  Search,
  Volume2,
  VolumeX,
  RotateCcw,
  Check,
  Shield,
  Award
} from 'lucide-react';

interface CitadelleAndNamesSectionProps {
  onOpenTasbih: () => void;
}

export const CitadelleAndNamesSection: React.FC<CitadelleAndNamesSectionProps> = ({ onOpenTasbih }) => {
  const [activeSubTab, setActiveSubTab] = useState<'citadelle' | 'names99'>('citadelle');

  // Citadelle state
  const [selectedCategory, setSelectedCategory] = useState<HisnCategory['id'] | 'all'>('matin_soir');
  const [duaSearch, setDuaSearch] = useState<string>('');
  const [duaCounts, setDuaCounts] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('almanara_hisn_counts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [playingId, setPlayingId] = useState<string | null>(null);

  // 99 Names state
  const [nameSearch, setNameSearch] = useState<string>('');
  const [selectedNameModal, setSelectedNameModal] = useState<AllahName | null>(null);

  useEffect(() => {
    return () => {
      recitationPlayer.stop();
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('almanara_hisn_counts', JSON.stringify(duaCounts));
    } catch {
      // Ignore storage error
    }
  }, [duaCounts]);

  const filteredDuas = useMemo(() => {
    return HISN_DUAS.filter((dua) => {
      const matchesCat = selectedCategory === 'all' || dua.categoryId === selectedCategory;
      const q = duaSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        dua.title.toLowerCase().includes(q) ||
        dua.translation.toLowerCase().includes(q) ||
        dua.phonetic.toLowerCase().includes(q) ||
        dua.arabic.includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, duaSearch]);

  const filteredNames = useMemo(() => {
    const q = nameSearch.trim().toLowerCase();
    if (!q) return ALLAH_99_NAMES;
    return ALLAH_99_NAMES.filter(
      (n) =>
        n.transliteration.toLowerCase().includes(q) ||
        n.meaning.toLowerCase().includes(q) ||
        n.explanation.toLowerCase().includes(q) ||
        n.arabic.includes(q) ||
        n.number.toString() === q
    );
  }, [nameSearch]);

  const playClickTone = () => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Safe fallback
    }
  };

  const handleIncrementDua = (dua: HisnDua) => {
    playClickTone();
    setDuaCounts((prev) => {
      const current = prev[dua.id] || 0;
      if (current >= dua.targetCount) return prev;
      return { ...prev, [dua.id]: current + 1 };
    });
  };

  const handleResetDua = (duaId: string) => {
    setDuaCounts((prev) => ({ ...prev, [duaId]: 0 }));
  };

  const handleResetAllCounts = () => {
    setDuaCounts({});
  };

  const handleSpeakArabic = (id: string, arabicText: string) => {
    if (playingId === id) {
      recitationPlayer.stop();
      setPlayingId(null);
      return;
    }
    recitationPlayer.playAyah(
      undefined,
      arabicText,
      () => setPlayingId(id),
      () => setPlayingId(null)
    );
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-4 h-4" />;
      case 'Moon':
        return <Moon className="w-4 h-4" />;
      case 'Home':
        return <Home className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Heart':
        return <Heart className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const completedDuasCount = useMemo(() => {
    return HISN_DUAS.filter((d) => (duaCounts[d.id] || 0) >= d.targetCount).length;
  }, [duaCounts]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-emerald-800/40 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/70 border border-emerald-700/50 text-emerald-300 text-xs font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>Spiritualité Quotidienne & Invocations Authentiques</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              La Citadelle du Musulman & Les 99 Noms d'Allah
            </h1>
            <p className="text-sm text-stone-300 leading-relaxed">
              Protégez et illuminez votre journée avec les invocations prophétiques authentiques (<em>Ḥiṣn Al-Muslim</em>) dotées de compteurs interactifs, et méditez sur les 99 Noms Sublimes d'Allah (<em>Asmā' Allāh Al-Ḥusnā</em>).
            </p>
          </div>

          {/* Sub-navigation switcher */}
          <div className="flex flex-wrap gap-2 bg-stone-800/90 p-1.5 rounded-xl border border-stone-700 self-start">
            <button
              onClick={() => {
                recitationPlayer.stop();
                setPlayingId(null);
                setActiveSubTab('citadelle');
              }}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSubTab === 'citadelle'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Citadelle (Adhkār & Douas)</span>
            </button>
            <button
              onClick={() => {
                recitationPlayer.stop();
                setPlayingId(null);
                setActiveSubTab('names99');
              }}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSubTab === 'names99'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Les 99 Noms d'Allah</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUB-TAB 1: LA CITADELLE DU MUSULMAN */}
      {activeSubTab === 'citadelle' && (
        <div className="space-y-6">
          {/* Top Controls: Search, Progress & Category Tabs */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={duaSearch}
                  onChange={(e) => setDuaSearch(e.target.value)}
                  placeholder="Rechercher une invocation (ex: pardon, matin, voyage, guérison...)"
                  className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Daily completion counter & Reset */}
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>
                    Accompli aujourd'hui : <strong>{completedDuasCount} / {HISN_DUAS.length}</strong>
                  </span>
                </div>
                <button
                  onClick={handleResetAllCounts}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors flex items-center gap-1.5"
                  title="Réinitialiser tous les compteurs du jour"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser</span>
                </button>
              </div>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>Toutes les catégories ({HISN_DUAS.length})</span>
              </button>
              {HISN_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const countInCat = HISN_DUAS.filter((d) => d.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.title}</span>
                    <span className="opacity-75 font-mono">({countInCat})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Invocations List */}
          <div className="grid grid-cols-1 gap-5">
            {filteredDuas.map((dua) => {
              const currentCount = duaCounts[dua.id] || 0;
              const isCompleted = currentCount >= dua.targetCount;
              const progressPct = Math.min(100, Math.round((currentCount / dua.targetCount) * 100));
              const isPlaying = playingId === dua.id;
              const categoryObj = HISN_CATEGORIES.find((c) => c.id === dua.categoryId);

              return (
                <div
                  key={dua.id}
                  className={`bg-white rounded-xl border transition-all p-6 shadow-xs ${
                    isCompleted
                      ? 'border-emerald-400 bg-emerald-50/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold">
                        {categoryObj?.title}
                      </span>
                      <h3 className="text-base font-bold text-stone-900">
                        {dua.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSpeakArabic(dua.id, dua.arabic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                          isPlaying
                            ? 'bg-amber-400 text-stone-950 font-semibold'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {isPlaying ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>Arrêter</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Écouter</span>
                          </>
                        )}
                      </button>

                      {currentCount > 0 && (
                        <button
                          onClick={() => handleResetDua(dua.id)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                          title="Remettre ce compteur à zéro"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div className="p-5 rounded-xl bg-stone-50/90 border border-stone-200/80 mb-4">
                    <p
                      dir="rtl"
                      className="font-arabic text-2xl sm:text-3xl leading-[2.2] text-stone-900 text-right select-text"
                    >
                      {dua.arabic}
                    </p>
                  </div>

                  {/* Phonetic & Translation */}
                  <div className="space-y-2 mb-5">
                    <p className="text-xs sm:text-sm text-emerald-800 font-mono italic leading-relaxed">
                      {dua.phonetic}
                    </p>
                    <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                      « {dua.translation} »
                    </p>
                  </div>

                  {/* Footer: Virtue + Interactive Counter Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
                    <div className="space-y-1 max-w-2xl">
                      <div className="text-xs text-emerald-900 bg-emerald-50/80 border border-emerald-200/60 rounded-lg px-3 py-2 leading-relaxed">
                        <strong className="font-semibold">Mérite & Sagesse :</strong> {dua.virtue}
                      </div>
                      <div className="text-[11px] text-stone-500 font-medium">
                        Source : {dua.source}
                      </div>
                    </div>

                    {/* Interactive Repetition Counter */}
                    <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-1.5">
                      <button
                        onClick={() => handleIncrementDua(dua)}
                        className={`px-5 py-3 rounded-xl font-mono text-sm font-bold flex items-center justify-center gap-3 transition-all active:scale-95 cursor-pointer select-none shadow-xs ${
                          isCompleted
                            ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                            : 'bg-stone-900 hover:bg-emerald-800 text-white'
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Terminé ({currentCount} / {dua.targetCount})</span>
                          </>
                        ) : (
                          <>
                            <span>Réciter & Compter</span>
                            <span className="px-2 py-0.5 rounded bg-white/15 text-amber-300">
                              {currentCount} / {dua.targetCount}
                            </span>
                          </>
                        )}
                      </button>
                      <div className="w-full sm:w-44 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 transition-all duration-200"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: LES 99 NOMS D'ALLAH */}
      {activeSubTab === 'names99' && (
        <div className="space-y-6">
          {/* Hadith Banner & Search */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-stone-900 font-display">
                  Les 99 Plus Beaux Noms d'Allah (Asmā' Allāh Al-Ḥusnā)
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  « Certes, Allah possède quatre-vingt-dix-neuf Noms, cent moins un ; quiconque les retient (les comprend et agit en conséquence) entrera au Paradis. » (Sahih Al-Bukhari & Muslim)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={nameSearch}
                    onChange={(e) => setNameSearch(e.target.value)}
                    placeholder="Chercher un Nom (ex: Rahmān, Paix, 15...)"
                    className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <button
                  onClick={onOpenTasbih}
                  className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ouvrir le Tasbīh</span>
                </button>
              </div>
            </div>
          </div>

          {/* 99 Names Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNames.map((item) => {
              const isPlaying = playingId === `name-${item.number}`;
              return (
                <div
                  key={item.number}
                  onClick={() => setSelectedNameModal(item)}
                  className="group bg-white rounded-xl border border-stone-200 hover:border-emerald-500 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-950 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                        #{item.number}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeakArabic(`name-${item.number}`, item.arabic);
                        }}
                        className={`p-2 rounded-lg text-xs transition-colors ${
                          isPlaying
                            ? 'bg-amber-400 text-stone-950'
                            : 'bg-stone-100 hover:bg-emerald-100 text-stone-600 hover:text-emerald-900'
                        }`}
                        title="Écouter la prononciation"
                      >
                        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                          {item.transliteration}
                        </h3>
                        <p className="text-xs font-semibold text-amber-700">
                          {item.meaning}
                        </p>
                      </div>
                      <div className="font-arabic text-3xl font-bold text-emerald-950">
                        {item.arabic}
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mt-2">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal detail for a selected Name of Allah */}
          {selectedNameModal && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedNameModal(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-md w-full p-6 border border-stone-200 shadow-2xl space-y-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                  Nom d'Allah #{selectedNameModal.number} / 99
                </div>
                <div className="font-arabic text-5xl font-bold text-emerald-950 py-3">
                  {selectedNameModal.arabic}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    {selectedNameModal.transliteration}
                  </h3>
                  <p className="text-sm font-semibold text-amber-700 mt-0.5">
                    {selectedNameModal.meaning}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {selectedNameModal.explanation}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleSpeakArabic(`name-${selectedNameModal.number}`, selectedNameModal.arabic)}
                    className="flex-1 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Écouter la prononciation</span>
                  </button>
                  <button
                    onClick={() => setSelectedNameModal(null)}
                    className="px-4 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-semibold"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
