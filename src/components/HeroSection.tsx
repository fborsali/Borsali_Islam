import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { POPULAR_CITIES, getPrayerTimes, getNextPrayer, getBrowserLocation, CityLocation } from '../utils/prayerTimes';
import { recitationPlayer } from '../utils/audioPlayer';
import { BookOpen, Compass, HelpCircle, Moon, Volume2, VolumeX, ArrowRight, Clock, MapPin, Navigation, Loader2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [selectedCity, setSelectedCity] = useState<CityLocation>(POPULAR_CITIES[0]); // Paris default
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isPlayingAyah, setIsPlayingAyah] = useState<boolean>(false);
  const [isDetectingGps, setIsDetectingGps] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
      recitationPlayer.stop();
      setIsPlayingAyah(false);
    };
  }, []);

  const prayerTimes = getPrayerTimes(selectedCity, currentTime);
  const nextPrayer = getNextPrayer(prayerTimes, currentTime);

  // Daily featured Ayah (Ayat Al-Kursi excerpt or Surah Al-Fatiha)
  const featuredAyah = {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    phonetic: "Wa-idhā sa'alaka 'ibādī 'annī fa-innī qarīb, ujību da'wata ad-dā'i idhā da'ān",
    translation: "« Et quand Mes serviteurs t'interrogent sur Moi... alors Je suis tout proche : Je réponds à l'appel de celui qui M'invoque quand il M'invoque. »",
    reference: "Sourate Al-Baqarah (2:186)",
    audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/193.mp3"
  };

  const toggleAudio = () => {
    if (isPlayingAyah) {
      recitationPlayer.stop();
      setIsPlayingAyah(false);
    } else {
      recitationPlayer.playAyah(
        featuredAyah.audioUrl,
        featuredAyah.arabic,
        () => setIsPlayingAyah(true),
        () => setIsPlayingAyah(false)
      );
    }
  };

  const formatCountdown = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h === 0) return `${m} min`;
    return `${h}h ${m.toString().padStart(2, '0')}m`;
  };

  const handleDetectGps = async () => {
    setIsDetectingGps(true);
    try {
      const loc = await getBrowserLocation();
      setSelectedCity(loc);
    } catch {
      // Gracefully maintain selected city
    } finally {
      setIsDetectingGps(false);
    }
  };

  return (
    <div className="space-y-10 pb-8">
      {/* Top Banner / Welcome with Geometric Arabesque Visual */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white border border-stone-800 p-8 sm:p-12 shadow-sm">
        {/* Subtle decorative Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-emerald-300">
            <polygon points="100,10 120,70 180,60 140,100 180,140 120,130 100,190 80,130 20,140 60,100 20,60 80,70" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="45" strokeWidth="1" strokeDasharray="3 3" />
            <polygon points="100,25 155,100 100,175 45,100" strokeWidth="1" />
            <polygon points="45,45 155,45 155,155 45,155" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Basmalah */}
          <div className="text-emerald-400 font-arabic text-2xl sm:text-3xl font-semibold mb-4 text-emerald-300/90 tracking-wide">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-4 leading-tight [text-wrap:balance]">
            Apprenez les Fondements de l'Islam, le Noble Coran et la Prière
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl">
            Une plateforme pédagogique claire, respectueuse et interactive conçue pour les débutants et les apprenants : récitation verset par verset, simulateur de prière pas-à-pas et quiz de validation des acquis.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('prayer')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Simulateur de Prière</span>
            </button>
            <button
              onClick={() => onNavigate('quran')}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 font-medium text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Lire & Écouter le Coran</span>
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Tester mes Connaissances</span>
            </button>
          </div>
        </div>
      </section>

      {/* Real-time Prayer Times Strip (with city selector & countdown) */}
      <section className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900">
                Horaires des Prières Quotidiennes
              </h2>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span>Prochaine prière : <strong className="text-emerald-700 font-medium">{nextPrayer.name}</strong> ({nextPrayer.time})</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-700 font-mono font-medium">Dans {formatCountdown(nextPrayer.remainingMinutes)}</span>
              </div>
            </div>
          </div>

          {/* Location selector & GPS */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
            <button
              onClick={handleDetectGps}
              disabled={isDetectingGps}
              className="px-2.5 py-1 bg-emerald-800 hover:bg-emerald-700 text-white rounded-md font-medium transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-50"
              title="Détecter ma position GPS"
            >
              {isDetectingGps ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <Navigation className="w-3 h-3" />
              )}
              <span>{isDetectingGps ? 'GPS...' : 'Ma position GPS'}</span>
            </button>

            <div className="flex items-center gap-1.5 bg-stone-100 border border-stone-200 rounded-md px-2 py-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <label htmlFor="city-select" className="sr-only">Choisir la ville</label>
              <select
                id="city-select"
                value={selectedCity.name}
                onChange={(e) => {
                  const found = POPULAR_CITIES.find(c => c.name === e.target.value);
                  if (found) setSelectedCity(found);
                }}
                className="bg-transparent text-stone-800 font-medium focus:outline-none cursor-pointer"
              >
                {selectedCity.isGps && (
                  <option value={selectedCity.name}>📍 {selectedCity.name}</option>
                )}
                {POPULAR_CITIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.country})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 5 Daily Prayers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
          {[
            { key: 'fajr', label: 'Fajr', arabic: 'الفجر', time: prayerTimes.fajr, desc: 'Aube' },
            { key: 'dhuhr', label: 'Dhuhr', arabic: 'الظهر', time: prayerTimes.dhuhr, desc: 'Midi' },
            { key: 'asr', label: 'Asr', arabic: 'العصر', time: prayerTimes.asr, desc: 'Après-midi' },
            { key: 'maghrib', label: 'Maghrib', arabic: 'المغرب', time: prayerTimes.maghrib, desc: 'Coucher' },
            { key: 'isha', label: 'Isha', arabic: 'العشاء', time: prayerTimes.isha, desc: 'Nuit' },
          ].map((item) => {
            const isNext = nextPrayer.name.toLowerCase().includes(item.key);
            return (
              <div
                key={item.key}
                className={`p-3.5 rounded-lg border transition-all ${
                  isNext
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 ring-1 ring-emerald-300'
                    : 'bg-stone-50/60 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-medium text-stone-800">{item.label}</span>
                  <span className="font-arabic text-sm text-stone-600">{item.arabic}</span>
                </div>
                <div className="text-xl font-bold font-mono tracking-tight text-stone-900 tabular-nums">
                  {item.time}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Verset du Jour Card with Audio */}
      <section className="bg-gradient-to-r from-emerald-900 via-stone-900 to-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 border border-emerald-800/40 relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="uppercase tracking-wider font-semibold">Parole d'Allah</span>
              <span aria-hidden="true">·</span>
              <span>{featuredAyah.reference}</span>
            </div>

            {/* Arabic Script */}
            <p className="font-arabic text-2xl sm:text-3xl leading-loose text-emerald-100 text-right dir-rtl py-1">
              {featuredAyah.arabic}
            </p>

            {/* Phonetic */}
            <p className="text-xs text-stone-400 italic">
              {featuredAyah.phonetic}
            </p>

            {/* French Translation */}
            <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed">
              {featuredAyah.translation}
            </p>
          </div>

          <div className="shrink-0 flex items-center lg:flex-col justify-end gap-3">
            <button
              onClick={toggleAudio}
              className={`px-4 py-2 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors ${
                isPlayingAyah
                  ? 'bg-amber-400 text-stone-900 font-semibold'
                  : 'bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 border border-emerald-700/60'
              }`}
            >
              {isPlayingAyah ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Arrêter</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Écouter la récitation</span>
                </>
              )}
            </button>
            <button
              onClick={() => onNavigate('quran')}
              className="text-xs text-emerald-300 hover:text-white underline underline-offset-4 flex items-center gap-1"
            >
              <span>Explorer d'autres sourates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4 Interactive Feature Pillars / Hub Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            tab: 'pillars' as ActiveTab,
            title: "Piliers & Foi",
            arabic: "أركان الإسلام والإيمان",
            desc: "Comprendre les 5 Piliers de l'Islam et les 6 articles de la Foi avec explications et sagesses.",
            icon: <Moon className="w-5 h-5 text-emerald-700" />,
            badge: "Fondations"
          },
          {
            tab: 'quran' as ActiveTab,
            title: "Le Noble Coran",
            arabic: "القرآن الكريم والتجويد",
            desc: "Explorer les 114 sourates complètes avec les voix des Imams de La Mecque, d'Algérie 🇩🇿 (Warsh) et de Khaled Al-Jalil.",
            icon: <BookOpen className="w-5 h-5 text-teal-700" />,
            badge: "114 Sourates"
          },
          {
            tab: 'prayer' as ActiveTab,
            title: "La Prière (Salat)",
            arabic: "دليل الصلاة والوضوء",
            desc: "Apprendre les ablutions (Wudu) et suivre pas à pas chaque Rak'at avec illustrations anatomiques et audio.",
            icon: <Compass className="w-5 h-5 text-amber-700" />,
            badge: "Pratique & Qibla"
          },
          {
            tab: 'quiz' as ActiveTab,
            title: "Quiz Interactifs",
            arabic: "اختبارات وتحديات",
            desc: "Valider vos connaissances avec 100+ questions par niveau (Débutant, Intermédiaire, Avancé) et badges.",
            icon: <HelpCircle className="w-5 h-5 text-indigo-700" />,
            badge: "Évaluation"
          }
        ].map((mod) => (
          <button
            key={mod.tab}
            onClick={() => onNavigate(mod.tab)}
            className="group text-left p-6 bg-white rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {mod.icon}
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  {mod.badge}
                </span>
              </div>
              <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors">
                {mod.title}
              </h3>
              <p className="font-arabic text-sm text-stone-400 mb-2">
                {mod.arabic}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {mod.desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-emerald-800">
              <span>Accéder au module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};
