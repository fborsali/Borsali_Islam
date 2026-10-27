import React, { useState, useMemo } from 'react';
import { ISLAM_PILLARS, IMAN_ARTICLES } from '../data/pillarsData';
import { Moon, Sparkles, CheckCircle2, Quote, ArrowRight, Calculator, Coins, Sun, HeartHandshake, Info } from 'lucide-react';

interface PillarsSectionProps {
  onStartPillarsQuiz: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onStartPillarsQuiz }) => {
  const [activePillarTab, setActivePillarTab] = useState<'islam' | 'iman' | 'zakat' | 'ramadan'>('islam');
  const [selectedPillarId, setSelectedPillarId] = useState<string>(ISLAM_PILLARS[0].id);

  // Zakat Calculator State
  const [nisabStandard, setNisabStandard] = useState<'gold' | 'silver'>('gold');
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(75); // ~75 EUR/g
  const [silverPricePerGram, setSilverPricePerGram] = useState<number>(0.95); // ~0.95 EUR/g
  const [cashAndBank, setCashAndBank] = useState<number>(5000);
  const [goldSilverValue, setGoldSilverValue] = useState<number>(1500);
  const [investmentsAndGoods, setInvestmentsAndGoods] = useState<number>(2000);
  const [debtsToDeduct, setDebtsToDeduct] = useState<number>(500);

  // Zakat Al-Fitr State
  const [householdMembers, setHouseholdMembers] = useState<number>(4);
  const [fitrPerPerson, setFitrPerPerson] = useState<number>(7); // ~7€ to 9€ in France/Europe

  const selectedPillar = ISLAM_PILLARS.find(p => p.id === selectedPillarId) || ISLAM_PILLARS[0];

  const zakatCalculation = useMemo(() => {
    const nisabThreshold = nisabStandard === 'gold' ? 85 * goldPricePerGram : 595 * silverPricePerGram;
    const totalAssets = Math.max(0, cashAndBank + goldSilverValue + investmentsAndGoods);
    const netZakatableWealth = Math.max(0, totalAssets - debtsToDeduct);
    const isEligible = netZakatableWealth >= nisabThreshold;
    const zakatDue = isEligible ? netZakatableWealth * 0.025 : 0;

    return {
      nisabThreshold,
      totalAssets,
      netZakatableWealth,
      isEligible,
      zakatDue
    };
  }, [nisabStandard, goldPricePerGram, silverPricePerGram, cashAndBank, goldSilverValue, investmentsAndGoods, debtsToDeduct]);

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span>Théologie & Pratique</span>
            <span aria-hidden="true">·</span>
            <span>Fondements, Zakāt & Ramadan</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Les Piliers de l'Islam, la Foi, la Zakāt & le Ramadan
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Explorez les 5 Piliers de l'Islam, les 6 Articles de la Foi (Iman), calculez votre Zakāt annuelle avec précision et maîtrisez les règles spirituelles et pratiques du mois béni de Ramadan.
          </p>
        </div>

        {/* Tab switch control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-xl shrink-0 self-start">
          <button
            onClick={() => setActivePillarTab('islam')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activePillarTab === 'islam'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            5 Piliers de l'Islam
          </button>
          <button
            onClick={() => setActivePillarTab('iman')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activePillarTab === 'iman'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            6 Piliers de la Foi
          </button>
          <button
            onClick={() => setActivePillarTab('zakat')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activePillarTab === 'zakat'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculateur Zakāt</span>
          </button>
          <button
            onClick={() => setActivePillarTab('ramadan')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activePillarTab === 'ramadan'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Guide du Ramadan</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 5 PILLARS OF ISLAM */}
      {activePillarTab === 'islam' && (
        <div className="space-y-6">
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
      )}

      {/* TAB 2: 6 ARTICLES OF IMAN */}
      {activePillarTab === 'iman' && (
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

      {/* TAB 3: ZAKAT CALCULATOR */}
      {activePillarTab === 'zakat' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 cols: Zakat Al-Mal Inputs */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-lg font-bold text-stone-900 font-display flex items-center gap-2">
                    <Coins className="w-5 h-5 text-emerald-700" />
                    <span>Calculateur de Zakāt Al-Māl (2,5 % annuel)</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Applicable sur l'épargne détenue pendant une année lunaire complète (Al-Hawl) au-dessus du seuil minimal (Nisāb).
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg text-xs">
                  <button
                    onClick={() => setNisabStandard('gold')}
                    className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                      nisabStandard === 'gold' ? 'bg-amber-500 text-stone-950' : 'text-stone-600'
                    }`}
                  >
                    Nisāb Or (85g)
                  </button>
                  <button
                    onClick={() => setNisabStandard('silver')}
                    className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                      nisabStandard === 'silver' ? 'bg-stone-800 text-white' : 'text-stone-600'
                    }`}
                  >
                    Nisāb Argent (595g)
                  </button>
                </div>
              </div>

              {/* Reference Gold/Silver price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Cours de l'Or (€ / gramme) — Seuil 85g
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={goldPricePerGram}
                    onChange={(e) => setGoldPricePerGram(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Cours de l'Argent (€ / gramme) — Seuil 595g
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.05"
                    value={silverPricePerGram}
                    onChange={(e) => setSilverPricePerGram(Math.max(0.1, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-sm font-mono"
                  />
                </div>
              </div>

              {/* Wealth Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Liquidités & Comptes bancaires (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={cashAndBank}
                    onChange={(e) => setCashAndBank(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Valeur de l'Or & de l'Argent possédés (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={goldSilverValue}
                    onChange={(e) => setGoldSilverValue(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Actions, investissements & stocks commerciaux (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={investmentsAndGoods}
                    onChange={(e) => setInvestmentsAndGoods(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Dettes exigibles à court terme à déduire (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={debtsToDeduct}
                    onChange={(e) => setDebtsToDeduct(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-mono focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Live Result Summary + Zakat Al-Fitr */}
            <div className="space-y-4">
              <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-800 space-y-4">
                <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  Résultat Zakāt Al-Māl
                </div>

                <div className="space-y-2 text-xs border-b border-emerald-800/80 pb-4">
                  <div className="flex justify-between">
                    <span className="text-emerald-200/80">Seuil du Nisāb ({nisabStandard === 'gold' ? 'Or 85g' : 'Argent 595g'}) :</span>
                    <span className="font-mono font-semibold">{zakatCalculation.nisabThreshold.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-emerald-200/80">Patrimoine net imposable :</span>
                    <span className="font-mono font-semibold">{zakatCalculation.netZakatableWealth.toFixed(2)} €</span>
                  </div>
                </div>

                {zakatCalculation.isEligible ? (
                  <div className="space-y-1">
                    <div className="text-xs text-amber-300 font-medium">
                      Seuil du Nisāb atteint — Zakāt obligatoire (2,5 %) :
                    </div>
                    <div className="text-3xl font-bold font-mono text-amber-400">
                      {zakatCalculation.zakatDue.toFixed(2)} €
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-xs text-emerald-100">
                    Votre épargne nette est inférieure au seuil du Nisāb ({zakatCalculation.nisabThreshold.toFixed(0)} €). Vous n'êtes pas imposable à la Zakāt Al-Māl cette année.
                  </div>
                )}
              </div>

              {/* Zakat Al-Fitr Card */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-stone-900">
                    Zakāt Al-Fiṭr (Fin du Ramadan)
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Aumône purificatrice du jeûne versée avant la prière de l'Aïd Al-Fitr pour chaque membre du foyer (environ 1 Sā' de nourriture ou ~7 € à 9 €).
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Personnes au foyer
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={householdMembers}
                      onChange={(e) => setHouseholdMembers(Math.max(1, Number(e.target.value)))}
                      className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Montant / pers. (€)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={fitrPerPerson}
                      onChange={(e) => setFitrPerPerson(Math.max(1, Number(e.target.value)))}
                      className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-900">
                  <span>Total Zakāt Al-Fiṭr :</span>
                  <span className="text-base font-mono font-bold text-emerald-700">
                    {(householdMembers * fitrPerPerson).toFixed(2)} €
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: RAMADAN GUIDE */}
      {activePillarTab === 'ramadan' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-emerald-800/40 space-y-3">
            <div className="text-emerald-300 font-arabic text-2xl">
              شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display">
              Guide Spirituel & Pratique du Mois Béni de Ramadan
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
              Quatrième pilier de l'Islam, le jeûne de Ramadan est une école de piété (Taqwā), de maîtrise de soi, de générosité et d'intimité avec le Noble Coran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Sun className="w-4 h-4" />
                <span>1. Les Piliers du Jeûne</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700 leading-relaxed">
                <li>• <strong>L'Intention (An-Niyyah) :</strong> Formulée dans le cœur avant l'aube (Fajr).</li>
                <li>• <strong>L'Abstinence (Al-Imsāk) :</strong> S'abstenir de manger, boire et des rapports conjugaux depuis l'aube véridique (Fajr) jusqu'au coucher du soleil (Maghrib).</li>
                <li>• <strong>L'Éthique du cœur :</strong> Préserver sa langue du mensonge, de la médisance et de la colère.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>2. Sunnahs & Doua de Rupture (Iftār)</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Retarder le repas de l'aube (Suhūr) et hâter la rupture (Iftār) avec des dattes fraîches ou de l'eau en prononçant :
              </p>
              <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-right font-arabic text-lg text-stone-900">
                ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ
              </div>
              <p className="text-[11px] text-stone-600 italic">
                « La soif est dissipée, les veines sont abreuvées et la récompense est acquise si Allah le veut. » (Abu Dawud)
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <Info className="w-4 h-4" />
                <span>3. Laylat Al-Qadr & Les 10 Dernières Nuits</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Rechercher la Nuit du Destin (meilleure que 1000 mois) dans les nuits impaires des dix derniers jours en multipliant cette invocation enseignée à 'Ā'ishah :
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-right font-arabic text-lg text-emerald-950">
                اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
              </div>
              <p className="text-[11px] text-stone-600 italic">
                « Ô Allah, Tu es Indulgent, Tu aimes l'indulgence, alors pardonne-moi. »
              </p>
            </div>
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
