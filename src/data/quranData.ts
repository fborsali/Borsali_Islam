import { Surah, TajweedRule } from '../types';

export const QURAN_OVERVIEW = {
  title: "Le Noble Coran (Al-Qur'an Al-Karim)",
  arabicTitle: "القرآن الكريم",
  definition: "La parole littérale et incréée d'Allah, révélée au Prophète Muhammad ﷺ par l'intermédiaire de l'archange Jibril (Gabriel) en langue arabe claire sur une période de 23 années (610 à 632 de l'ère chrétienne).",
  structure: {
    totalSurahs: 114,
    totalVerses: 6236,
    totalJuz: 30,
    totalHizb: 60,
    revelationDuration: "23 ans (13 ans à La Mecque, 10 ans à Médine)"
  },
  makkiVsMadani: {
    makki: {
      title: "Sourates Mecquoises (Makki)",
      count: 86,
      themes: "Révélées avant l'Hégire (migration vers Médine). Axées sur l'affirmation du Tawhid (Unicité divine), la purification du cœur, la certitude de la Résurrection et du Jugement, les récits des anciens peuples et la patience face aux épreuves."
    },
    madani: {
      title: "Sourates Médinoises (Madani)",
      count: 28,
      themes: "Révélées après l'Hégire. Axées sur la législation (charia), les relations sociales, les devoirs civiques, la famille, le culte communautaire, les traités et l'organisation de la société."
    }
  },
  etiquettes: [
    "Être en état de pureté rituelle (ablutions recommandées).",
    "Commencer par la demande de protection : « A'oudhou billahi mina ash-shaytani ar-rajim ».",
    "Réciter avec recueillement et sérénité (Tartil), sans précipitation.",
    "Méditer sur le sens profond des versets (Tadabbour)."
  ]
};

export const ESSENTIAL_SURAHS: Surah[] = [
  {
    number: 1,
    name: "Al-Fātiha",
    arabicName: "الفاتحة",
    translationName: "L'Ouverture",
    revelationType: "Mecquoise",
    versesCount: 7,
    juzNumber: 1,
    intro: "La Mère du Livre (Oumm Al-Kitab). Sa récitation est un pilier indispensable de chaque unité (Rak'at) de prière. Sans elle, la prière n'est pas valide.",
    significance: "Elle résume à elle seule la totalité du message coranique : louange au Créateur, reconnaissance de Sa miséricorde, rappel du Jour du Jugement et demande de guidance sur le droit chemin.",
    verses: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismi Allāhi ar-Rahmāni ar-Rahīm",
        translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        tafsir: "Formule sacrée ouvrant chaque sourate (sauf la sourate 9). Elle place toute action sous la bénédiction divine.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Al-Hamdu lillāhi Rabbi al-'ālamīn",
        translation: "Louange à Allah, Seigneur de l'univers,",
        tafsir: "L'éloge absolu appartient exclusivement au Maître, Nourricier et Protecteur de toutes les créatures.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3"
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Ar-Rahmāni ar-Rahīm",
        translation: "Le Tout Miséricordieux, le Très Miséricordieux,",
        tafsir: "Ar-Rahman désigne la miséricorde immense englobant toute la création ; Ar-Rahim désigne Sa miséricorde spécifique et continue pour les croyants.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3"
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Māliki yawmi ad-dīn",
        translation: "Maître du Jour de la rétribution.",
        tafsir: "Souverain incontesté du Jour du Jugement dernier, où chaque âme sera rétribuée avec une absolue justice.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3"
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyāka na'budu wa-iyyāka nasta'īn",
        translation: "C'est Toi Seul que nous adorons, et c'est Toi Seul dont nous implorons le secours.",
        tafsir: "Le pivot de la foi : aucun intermédiaire dans l'adoration, ni dans la demande de secours suprême.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3"
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinā as-sirāta al-mustaqīm",
        translation: "Guide-nous dans le droit chemin,",
        tafsir: "La plus grande invocation de l'être humain : la demande de rectitude, de clarté spirituelle et de fermeté.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3"
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Sirāta alladhīna an'amta 'alayhim ghayri al-maghdūbi 'alayhim walā ad-dāllīn",
        translation: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        tafsir: "La voie des prophètes, des véridiques et des vertueux, évitant l'orgueil rebelle et l'ignorance erratique.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3"
      }
    ]
  },
  {
    number: 112,
    name: "Al-Ikhlās",
    arabicName: "الإخلاص",
    translationName: "Le Monothéisme Pur",
    revelationType: "Mecquoise",
    versesCount: 4,
    juzNumber: 30,
    intro: "Sourate fondamentale sur l'unicité divine (Tawhid). Le Prophète ﷺ a enseigné qu'elle équivaut au tiers du Coran par son contenu théologique.",
    significance: "Définit Dieu sans aucun anthropomorphisme : Il n'a point d'associé, d'égal, d'enfant ni de parent.",
    verses: [
      {
        number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        transliteration: "Qul huwa Allāhu ahad",
        translation: "Dis : « Il est Allah, Unique.",
        tafsir: "Unicité absolue dans Son essence, Ses attributs et Sa divinité.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6221.mp3"
      },
      {
        number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        transliteration: "Allāhu as-Samad",
        translation: "Allah, Le Seul à être imploré pour ce que nous désirons (L'Absolu).",
        tafsir: "As-Samad : Celui dont toutes les créatures dépendent pour tous leurs besoins, alors que Lui ne dépend de rien.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6222.mp3"
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid walam yūlad",
        translation: "Il n'a jamais engendré, n'a pas été engendré non plus.",
        tafsir: "Purifié de tout lien de filiation, de naissance ou de succession temporelle.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6223.mp3"
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Walam yakun lahu kufuwan ahad",
        translation: "Et nul n'est égal à Lui. »",
        tafsir: "Rien ni personne dans les cieux ou sur terre ne saurait être comparé à Sa grandeur.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6224.mp3"
      }
    ]
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    translationName: "L'Aube Naissante",
    revelationType: "Mecquoise",
    versesCount: 5,
    juzNumber: 30,
    intro: "L'une des deux sourates protectrices (Al-Mu'awwidhatayn), recommandée matin, soir et avant de dormir.",
    significance: "Enseigne au croyant à chercher asile auprès du Maître de la lumière matinale contre les ténèbres, la malveillance cachée et la jalousie destructrice.",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        transliteration: "Qul a'ūdhu bi-Rabbi al-falaq",
        translation: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante,",
        tafsir: "Al-Falaq symbolise la clarté qui déchire l'obscurité nocturne.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6225.mp3"
      },
      {
        number: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        transliteration: "Min sharri mā khalaq",
        translation: "contre le mal des êtres qu'Il a créés,",
        tafsir: "Protection contre le tort potentiel émanant de toute créature.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6226.mp3"
      },
      {
        number: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        transliteration: "Wa-min sharri ghāsiqin idhā waqab",
        translation: "contre le mal de l'obscurité quand elle s'approfondit,",
        tafsir: "Contre les dangers physiques et spirituels qui s'activent sous le voile de la nuit.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6227.mp3"
      },
      {
        number: 4,
        arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        transliteration: "Wa-min sharri an-naffāthāti fī al-'uqad",
        translation: "contre le mal de celles qui soufflent (les sorcières) sur les nœuds,",
        tafsir: "Protection contre la sorcellerie et les manipulations maléfiques.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6228.mp3"
      },
      {
        number: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        transliteration: "Wa-min sharri hāsidin idhā hasad",
        translation: "et contre le mal de l'envieux quand il envie. »",
        tafsir: "Protection contre le mauvais œil et la haine jalouse d'autrui.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6229.mp3"
      }
    ]
  },
  {
    number: 114,
    name: "An-Nās",
    arabicName: "الناس",
    translationName: "Les Hommes",
    revelationType: "Mecquoise",
    versesCount: 6,
    juzNumber: 30,
    intro: "La 114ème et dernière sourate du Saint Coran. Complète la protection spirituelle contre les attaques invisibles qui visent directement l'esprit et le cœur humain.",
    significance: "Rappelle que Dieu est le Souverain et Dieu des hommes, et le seul refuge contre le doute, l'angoisse et les tentations insidieuses (Waswas).",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul a'ūdhu bi-Rabbi an-nās",
        translation: "Dis : « Je cherche protection auprès du Seigneur des hommes,",
        tafsir: "Le Créateur et Éducateur de l'humanité entière.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6230.mp3"
      },
      {
        number: 2,
        arabic: "مَلِكِ النَّاسِ",
        transliteration: "Maliki an-nās",
        translation: "Le Souverain des hommes,",
        tafsir: "Le Roi suprême devant lequel tous les rois de la terre ne sont rien.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6231.mp3"
      },
      {
        number: 3,
        arabic: "إِلَٰهِ النَّاسِ",
        transliteration: "Ilāhi an-nās",
        translation: "Dieu des hommes,",
        tafsir: "Le seul digne de culte, d'amour absolu et d'obéissance.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6232.mp3"
      },
      {
        number: 4,
        arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        transliteration: "Min sharri al-waswāsi al-khannās",
        translation: "contre le mal du mauvais conseiller furtif,",
        tafsir: "Satan qui insuffle des pensées négatives et corruptrices quand l'homme oublie Dieu, puis se retire dès qu'Allah est évoqué.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6233.mp3"
      },
      {
        number: 5,
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        transliteration: "Alladhī yuwaswisu fī sudūri an-nās",
        translation: "qui souffle le mal dans les poitrines des hommes,",
        tafsir: "Tentations, doutes, peurs injustifiées et rancœurs.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6234.mp3"
      },
      {
        number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        transliteration: "Mina al-jinnati wa-an-nās",
        translation: "qu'il soit parmi les djinns ou parmi les hommes. »",
        tafsir: "Les instigateurs de mal existent sous forme invisible (djinns) et humaine (mauvais compagnons).",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6235.mp3"
      }
    ]
  },
  {
    number: 108,
    name: "Al-Kawthar",
    arabicName: "الكوثر",
    translationName: "L'Abondance",
    revelationType: "Mecquoise",
    versesCount: 3,
    juzNumber: 30,
    intro: "La plus courte sourate du Coran (seulement 3 versets et 10 mots), révélée pour consoler le Prophète ﷺ après le décès de son jeune fils.",
    significance: "Annonce un fleuve d'abondance au Paradis pour le Prophète et ses disciples et assure que le bien perdure tandis que les calomniateurs sombrent dans l'oubli.",
    verses: [
      {
        number: 1,
        arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
        transliteration: "Innā a'taynāka al-kawthar",
        translation: "Nous t'avons certes accordé l'Abondance (Al-Kawthar).",
        tafsir: "L'abondance de bien ici-bas et dans l'au-delà, dont le bassin (Hawd) du Jour du Jugement.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6205.mp3"
      },
      {
        number: 2,
        arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        transliteration: "Fasalli li-Rabbika wa-anhar",
        translation: "Accomplis donc la prière pour ton Seigneur et sacrifie.",
        tafsir: "Consacrer la prière et le sacrifice rituel exclusivement à Allah avec gratitude.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6206.mp3"
      },
      {
        number: 3,
        arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        transliteration: "Inna shāni'aka huwa al-abtar",
        translation: "Certes, celui qui te hait sera le sans-postérité.",
        tafsir: "Celui qui méprise la vérité sera coupé de tout bien et de tout souvenir noble.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6207.mp3"
      }
    ]
  },
  {
    number: 103,
    name: "Al-'Asr",
    arabicName: "العصر",
    translationName: "Le Temps",
    revelationType: "Mecquoise",
    versesCount: 3,
    juzNumber: 30,
    intro: "L'Imam Ash-Shafi'i disait d'elle : « Si les hommes méditaient uniquement sur cette sourate, elle leur suffirait. »",
    significance: "Énonce les quatre conditions indispensables pour échapper à la perdition humaine : la foi sincère, les actions vertueuses, le conseil mutuel dans la vérité et la persévérance.",
    verses: [
      {
        number: 1,
        arabic: "وَالْعَصْرِ",
        transliteration: "Wa-al-'asr",
        translation: "Par le Temps !",
        tafsir: "Serment par le temps qui s'écoule inexorablement, capital irremplaçable de toute vie.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6177.mp3"
      },
      {
        number: 2,
        arabic: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
        transliteration: "Inna al-insāna lafī khusr",
        translation: "L'homme est certes en perdition,",
        tafsir: "Tout être humain court à sa perte en gaspillant son temps pour des vanités éphémères.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6178.mp3"
      },
      {
        number: 3,
        arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        transliteration: "Illā alladhīna āmanū wa'amilū as-sālihāti watawāsaw bil-haqqi watawāsaw bis-sabr",
        translation: "sauf ceux qui croient, font de bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement la patience.",
        tafsir: "Le pacte de réussite intégrale : foi vivante, travail noble, intégrité et résistance aux épreuves.",
        audioUrl: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6179.mp3"
      }
    ]
  }
];

export const TAJWEED_RULES: TajweedRule[] = [
  {
    id: 'qalqalah',
    name: "La Qalqalah (Écho / Rebond)",
    arabicName: "القلقلة",
    description: "Une vibration ou rebond vocal net appliqué sur 5 consonnes lorsqu'elles portent un Soukoun (arrêt) ou se situent en fin de récitation.",
    exampleArabic: "قُطْبُ جَدٍّ (ق - ط - ب - ج - د)",
    examplePhonetic: "Qatb Jadd (Qaf, Taa, Baa, Jeem, Dal)",
    explanation: "Exemple : dans « Qul a'ūdhu bi-Rabbi al-falaq », le 'q' final produit un rebond distinctif et énergique."
  },
  {
    id: 'ghunnah',
    name: "La Ghunnah (Nasalisation)",
    arabicName: "الغُنّة",
    description: "Un son harmonieux provenant des cavités nasales (Khayshoum), maintenu pendant environ deux temps (mouvements).",
    exampleArabic: "إِنَّ / ثُمَّ",
    examplePhonetic: "Inna / Thumma",
    explanation: "Obligatoire sur les lettres Nūn (نّ) et Mīm (مّ) lorsqu'elles sont doublées d'une Chadda (tashdid)."
  },
  {
    id: 'madd',
    name: "Le Madd (Prolongation des voyelles)",
    arabicName: "المَدّ",
    description: "L'allongement de la voyelle longue (Alif, Waw, Yaa). Il existe le Madd naturel (2 temps) et le Madd dérivé (4 à 6 temps selon la présence d'une Hamza ou d'un Soukoun).",
    exampleArabic: "قَالَ / جَاءَ",
    examplePhonetic: "Qāla (2 temps) / Jā'a (4 à 5 temps)",
    explanation: "Permet de donner au Coran sa cadence poétique et sa clarté sans déformer le sens du mot."
  },
  {
    id: 'idgham',
    name: "L'Idgham (Assimilation)",
    arabicName: "الإدغام",
    description: "La fusion d'un Nūn sans voyelle ou d'un Tanwīn dans la lettre qui suit parmi les lettres du mot يَرْمَلُون (Yarmalūn).",
    exampleArabic: "مَن يَقُولُ (تُقرأ: مَيَّقُول)",
    examplePhonetic: "May-yaqūl au lieu de Man yaqūl",
    explanation: "Fluidifie la récitation en unifiant deux sons consécutifs avec ou sans nasalisation."
  }
];
