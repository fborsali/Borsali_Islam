import React, { useState, useEffect } from 'react';
import { PRAYERS, WUDU_STEPS, WUDU_DUA_AFTER, WUDU_NULLIFIERS, PRAYER_STEP_DETAILS } from '../data/prayerData';
import { POPULAR_CITIES, calculateQiblaDirection, getPrayerTimes, getBrowserLocation, CityLocation } from '../utils/prayerTimes';
import { recitationPlayer } from '../utils/audioPlayer';
import { PrayerDefinition, PrayerStepDetail } from '../types';
import { Compass, Droplets, Volume2, VolumeX, CheckCircle, ChevronLeft, ChevronRight, Play, Info, MapPin, Navigation, Loader2 } from 'lucide-react';
import { RealisticPrayerIllustration } from './RealisticPrayerIllustrations';
import { RealisticWuduIllustration } from './RealisticWuduIllustrations';

interface PrayerGuideProps {
  onStartPrayerQuiz: () => void;
}

export const PrayerGuide: React.FC<PrayerGuideProps> = ({ onStartPrayerQuiz }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'wudu' | 'qibla'>('simulator');

  // Simulator state
  const [selectedPrayerId, setSelectedPrayerId] = useState<string>('fajr');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Qibla city state & GPS
  const [selectedCity, setSelectedCity] = useState<CityLocation>(POPULAR_CITIES[0]);
  const [isDetectingGps, setIsDetectingGps] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  // Stop audio on tab change, prayer change, step change or unmount
  useEffect(() => {
    return () => {
      recitationPlayer.stop();
      setIsPlayingAudio(false);
    };
  }, [activeTab, selectedPrayerId, currentStepIndex]);

  const currentPrayer: PrayerDefinition = PRAYERS.find(p => p.id === selectedPrayerId) || PRAYERS[0];
  const currentStep: PrayerStepDetail = PRAYER_STEP_DETAILS[currentStepIndex] || PRAYER_STEP_DETAILS[0];

  const qiblaAngle = Math.round(calculateQiblaDirection(selectedCity.latitude, selectedCity.longitude));
  const prayerTimes = getPrayerTimes(selectedCity);

  const handleNextStep = () => {
    recitationPlayer.stop();
    setIsPlayingAudio(false);
    if (currentStepIndex < PRAYER_STEP_DETAILS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    recitationPlayer.stop();
    setIsPlayingAudio(false);
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const toggleStepAudio = () => {
    if (isPlayingAudio) {
      recitationPlayer.stop();
      setIsPlayingAudio(false);
    } else {
      recitationPlayer.playAyah(
        undefined,
        currentStep.recitationArabic,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false)
      );
    }
  };


  const handleDetectGps = async () => {
    setIsDetectingGps(true);
    setGpsError(null);
    try {
      const loc = await getBrowserLocation();
      setSelectedCity(loc);
    } catch (err: unknown) {
      setGpsError(err instanceof Error ? err.message : "Impossible d'accéder à la géolocalisation.");
    } finally {
      setIsDetectingGps(false);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span>Pilier Central du Culte</span>
            <span aria-hidden="true">·</span>
            <span>La Connexion Quotidienne</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Guide Complet de la Prière (As-Salāt) & des Ablutions
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Maîtrisez les gestes, paroles et invocations de chaque unité de prière grâce à notre simulateur pas-à-pas, apprenez les ablutions et repérez la Qibla.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg shrink-0">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'simulator'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Simulateur de Prière
          </button>
          <button
            onClick={() => setActiveTab('wudu')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'wudu'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Les Ablutions (Wudu)
          </button>
          <button
            onClick={() => setActiveTab('qibla')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'qibla'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Qibla & Horaires
          </button>
        </div>
      </div>

      {/* Mode 1: Interactive Prayer Simulator */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          {/* Select Prayer to simulate */}
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="text-xs text-stone-500 mb-2 font-medium">
              1. Choisissez la prière à étudier :
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {PRAYERS.map((pr) => {
                const isSelected = pr.id === selectedPrayerId;
                return (
                  <button
                    key={pr.id}
                    onClick={() => {
                      setSelectedPrayerId(pr.id);
                      setCurrentStepIndex(0);
                    }}
                    className={`p-3 rounded-lg text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold">{pr.name}</span>
                      <span className="font-arabic">{pr.arabicName}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] opacity-80">
                      <span>{pr.rakats} Rak'at</span>
                      <span>{pr.recitationType.split(' ')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Step Card with Posture Diagram & Audio */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            {/* Step navigation bar */}
            <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-800 text-emerald-200 font-mono text-xs font-bold flex items-center justify-center">
                  {currentStepIndex + 1}
                </span>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white">
                    {currentStep.name}
                  </h2>
                  <span className="font-arabic text-emerald-400 text-xs sm:text-sm font-semibold">
                    {currentStep.arabicTitle}
                  </span>
                </div>
              </div>

              {/* Step counter */}
              <div className="text-xs text-stone-400 font-mono">
                Étape {currentStepIndex + 1} / {PRAYER_STEP_DETAILS.length}
              </div>
            </div>

            {/* Step Details Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Posture visual & description */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5 border-b lg:border-b-0 lg:border-r border-stone-100 pb-6 lg:pb-0 lg:pr-8">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
                    Posture Corporelle
                  </div>
                  <div className="bg-stone-50 rounded-xl border border-stone-200 p-2 sm:p-3 flex items-center justify-center mb-4 overflow-hidden">
                    <RealisticPrayerIllustration postureId={currentStep.id} className="w-full h-64 sm:h-72 max-w-sm mx-auto" />
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {currentStep.postureDescription}
                  </p>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Conseil de concentration (Khushū') :</strong> {currentStep.tips}
                  </span>
                </div>
              </div>

              {/* Right Column: Recitation, Audio & Translation */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
                      Paroles à prononcer {currentStep.repetition && `(${currentStep.repetition})`}
                    </span>
                    <button
                      onClick={toggleStepAudio}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                        isPlayingAudio
                          ? 'bg-amber-400 text-stone-900 font-semibold'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200'
                      }`}
                    >
                      {isPlayingAudio ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Arrêter l'audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Écouter la prononciation</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Arabic text */}
                  <div className="p-5 bg-stone-50/70 rounded-xl border border-stone-200 text-right dir-rtl">
                    <p className="font-arabic text-2xl sm:text-3xl text-stone-900 font-bold leading-loose">
                      {currentStep.recitationArabic}
                    </p>
                  </div>

                  {/* Phonetic */}
                  <div>
                    <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1">
                      Transcription phonétique
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 font-mono italic bg-stone-100/60 p-3 rounded-lg border border-stone-200/60">
                      {currentStep.recitationPhonetic}
                    </p>
                  </div>

                  {/* Translation */}
                  <div>
                    <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1">
                      Signification en français
                    </div>
                    <p className="text-sm text-stone-800 font-medium leading-relaxed bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                      {currentStep.recitationTranslation}
                    </p>
                  </div>
                </div>

                {/* Step Navigation Controls */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStepIndex === 0}
                    className="px-4 py-2 text-xs font-semibold rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Étape précédente</span>
                  </button>

                  <button
                    onClick={handleNextStep}
                    disabled={currentStepIndex === PRAYER_STEP_DETAILS.length - 1}
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Étape suivante</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Ablutions (Wudu) */}
      {activeTab === 'wudu' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium mb-1">
                <span>La Purification Rituelle Préalable</span>
                <span aria-hidden="true">·</span>
                <span>At-Tahārah</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                Les Étapes des Petites Ablutions (Al-Wudū')
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed mt-1 max-w-3xl">
                La prière ne peut être accomplie sans l'état de pureté rituelle. Voici l'enchaînement canonique tel qu'enseigné par le Prophète Muhammad ﷺ.
              </p>
            </div>

            {/* 8 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {WUDU_STEPS.map((wStep) => (
                <div
                  key={wStep.stepNumber}
                  className="p-4 bg-stone-50/70 rounded-xl border border-stone-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Realistic Anatomical Illustration */}
                    <RealisticWuduIllustration stepNumber={wStep.stepNumber} className="w-full h-36 mb-3" />

                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-mono text-xs font-bold flex items-center justify-center">
                        {wStep.stepNumber}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        {wStep.frequency}
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm mb-1">
                      {wStep.title}
                    </h3>
                    <p className="font-arabic text-xs text-emerald-800 mb-2 font-medium">
                      {wStep.arabicTitle}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      {wStep.instruction}
                    </p>
                  </div>

                  {wStep.duaArabic && (
                    <div className="pt-2 border-t border-stone-200 text-right">
                      <div className="font-arabic text-base text-stone-800 font-bold">
                        {wStep.duaArabic}
                      </div>
                      <div className="text-[11px] text-stone-500 italic mt-0.5">
                        {wStep.duaPhonetic}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dua after Wudu */}
            <div className="p-5 bg-emerald-950 text-emerald-100 rounded-xl border border-emerald-900 space-y-3">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Invocation prophétique après les ablutions</span>
              </div>
              <p className="font-arabic text-xl sm:text-2xl text-emerald-200 text-right dir-rtl leading-loose">
                {WUDU_DUA_AFTER.arabic}
              </p>
              <p className="text-xs text-stone-300 italic font-mono">
                {WUDU_DUA_AFTER.phonetic}
              </p>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {WUDU_DUA_AFTER.translation}
              </p>
              <div className="text-xs text-emerald-400/90 pt-2 border-t border-emerald-900">
                ⭐ {WUDU_DUA_AFTER.merit}
              </div>
            </div>

            {/* Nullifiers */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-rose-600" />
                <span>Ce qui annule les ablutions (Nawāqid Al-Wudū')</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {WUDU_NULLIFIERS.map((n, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Qibla & Prayer times */}
      {activeTab === 'qibla' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold font-display text-stone-900">
                  Direction de la Qibla & Calculateur
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Orientation exacte vers la Kaaba sacrée (La Mecque) depuis votre position géographique.
                </p>
              </div>

              {/* Location Controls: GPS & City selector */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <button
                  onClick={handleDetectGps}
                  disabled={isDetectingGps}
                  className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                  title="Utiliser la position GPS de mon appareil"
                >
                  {isDetectingGps ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Navigation className="w-3.5 h-3.5" />
                  )}
                  <span>{isDetectingGps ? 'Localisation...' : 'Ma Position GPS'}</span>
                </button>

                <div className="flex items-center gap-1.5 bg-stone-100 border border-stone-300 rounded-lg px-2.5 py-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  <select
                    value={selectedCity.name}
                    onChange={(e) => {
                      setGpsError(null);
                      const found = POPULAR_CITIES.find(c => c.name === e.target.value);
                      if (found) setSelectedCity(found);
                    }}
                    className="bg-transparent font-medium text-stone-800 focus:outline-none cursor-pointer"
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

            {gpsError && (
              <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                ⚠️ {gpsError}
              </div>
            )}

            {/* Compass Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-64 h-64 rounded-full border-4 border-stone-200 bg-stone-50 flex items-center justify-center shadow-inner">
                  {/* Cardinal Points */}
                  <span className="absolute top-2 font-bold text-xs text-stone-600">N (0°)</span>
                  <span className="absolute right-2 font-bold text-xs text-stone-600">E (90°)</span>
                  <span className="absolute bottom-2 font-bold text-xs text-stone-600">S (180°)</span>
                  <span className="absolute left-2 font-bold text-xs text-stone-600">O (270°)</span>

                  {/* Compass needle pointing to Qibla */}
                  <div
                    className="absolute w-full h-full flex items-center justify-center transition-transform duration-700"
                    style={{ transform: `rotate(${qiblaAngle}deg)` }}
                  >
                    <div className="w-1.5 h-32 bg-gradient-to-t from-transparent via-amber-500 to-emerald-600 relative rounded-full">
                      {/* Pointer top arrow */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-b-10 border-b-emerald-700" />
                    </div>
                  </div>

                  {/* Central emblem */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-stone-900 text-amber-400 border-2 border-amber-400 flex flex-col items-center justify-center shadow-md">
                    <span className="text-xs font-bold font-mono">{qiblaAngle}°</span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-300">Qibla</span>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <div className="text-sm font-semibold text-stone-900">
                    Orientation depuis {selectedCity.name} : <span className="text-emerald-700 font-mono">{qiblaAngle}°</span>
                  </div>
                  <div className="text-xs text-stone-500">
                    Tournez-vous en direction de {qiblaAngle < 90 ? 'Nord-Est' : qiblaAngle < 180 ? 'Sud-Est' : 'Sud-Ouest'}.
                  </div>
                </div>
              </div>

              {/* Day's Prayer Schedule for selected city */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Horaires du jour à {selectedCity.name}
                </h3>
                <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden">
                  {[
                    { name: 'Fajr (Aube)', time: prayerTimes.fajr },
                    { name: 'Chourouq (Lever du soleil)', time: prayerTimes.sunrise },
                    { name: 'Dhuhr (Midi)', time: prayerTimes.dhuhr },
                    { name: 'Asr (Après-midi)', time: prayerTimes.asr },
                    { name: 'Maghrib (Coucher)', time: prayerTimes.maghrib },
                    { name: 'Isha (Nuit)', time: prayerTimes.isha }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-stone-50/50">
                      <span className="text-xs font-medium text-stone-700">{item.name}</span>
                      <span className="text-xs font-mono font-bold text-stone-900 tabular-nums">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Prompt */}
      <div className="p-6 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white mb-1">
            Prêt à tester vos acquis sur la Prière et les Ablutions ?
          </h3>
          <p className="text-xs text-stone-300">
            Exercices d'ordonnancement des gestes et questions pratiques sur les 5 prières.
          </p>
        </div>
        <button
          onClick={onStartPrayerQuiz}
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Lancer le Quiz Prière
        </button>
      </div>
    </div>
  );
};
