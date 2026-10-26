import { DhikrItem } from '../types';

export const POST_PRAYER_TASBIH: DhikrItem[] = [
  {
    id: 'subhanallah',
    title: "SubhānAllāh (Gloire à Allah)",
    arabic: "سُبْحَانَ اللَّهِ",
    phonetic: "SubhānAllāh",
    translation: "Gloire et pureté à Allah au-dessus de tout manque ou imperfection.",
    targetCount: 33,
    virtue: "Efface les péchés même s'ils égalaient l'écume de la mer lorsqu'il est complété par les autres invocations."
  },
  {
    id: 'alhamdulillah',
    title: "Al-Hamdulillāh (Louange à Allah)",
    arabic: "الْحَمْدُ لِلَّهِ",
    phonetic: "Al-Hamdulillāh",
    translation: "La louange et la gratitude reviennent de droit à Allah Seul.",
    targetCount: 33,
    virtue: "Remplit la balance céleste des bonnes œuvres du croyant au Jour du Jugement."
  },
  {
    id: 'allahuakbar',
    title: "Allāhu Akbar (Allah est le Plus Grand)",
    arabic: "اللَّهُ أَكْبَرُ",
    phonetic: "Allāhu Akbar",
    translation: "Allah est infiniment Plus Grand que toute chose existante ou concevable.",
    targetCount: 33,
    virtue: "Ancre l'humilité et le détachement des illusions terrestres."
  },
  {
    id: 'tahlil_seal',
    title: "Le Sceau de clôture (100ème parole)",
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    phonetic: "Lā ilāha illā Allāhu wahdahu lā sharīka lahu, lahu al-mulku wa lahu al-hamd, wa huwa 'alā kulli shay'in qadīr.",
    translation: "Il n'y a de divinité digne d'adoration qu'Allah, Seul sans associé. À Lui la royauté, à Lui la louange, et Il est Omnipotent sur toute chose.",
    targetCount: 1,
    virtue: "Parachève le Tasbih post-prière (33 + 33 + 33 + 1 = 100)."
  }
];

export const DAILY_ADHKAR: DhikrItem[] = [
  {
    id: 'morning_evening_protection',
    title: "Protection suprême (Matin et Soir)",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    phonetic: "Bismillāhi alladhī lā yadurru ma'a ismihi shay'un fī al-ardi walā fī as-samā'i wa huwa as-Samī'u al-'Alīm.",
    translation: "Au nom d'Allah, nul ne peut causer de tort par Son Nom sur terre comme au ciel, et Il est l'Audient, l'Omniscient.",
    targetCount: 3,
    virtue: "Celui qui la récite 3 fois le matin et 3 fois le soir, aucun mal ne pourra l'atteindre au cours de la journée ou de la nuit."
  },
  {
    id: 'istighfar',
    title: "La Demande de Pardon (Al-Istighfar)",
    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ",
    phonetic: "Astaghfiru Allāha al-'Adhīm wa atūbu ilayh.",
    translation: "J'implore le pardon d'Allah l'Immense et je me repens sincèrement à Lui.",
    targetCount: 100,
    virtue: "Attire la miséricorde, apaise les angoisses et ouvre les portes de la subsistance."
  },
  {
    id: 'salawat',
    title: "La Prière sur le Prophète ﷺ",
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
    phonetic: "Allāhumma salli wa sallim 'alā nabiyyinā Muhammad.",
    translation: "Ô Allah, accorde Ta grâce, Ta bénédiction et Ta paix à notre Prophète Muhammad.",
    targetCount: 10,
    virtue: "« Celui qui prie sur moi une seule fois, Allah prie sur lui dix fois en retour. » (Hadith Muslim)"
  }
];
