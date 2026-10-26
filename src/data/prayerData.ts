import { WuduStep, PrayerDefinition, PrayerStepDetail } from '../types';

export const WUDU_STEPS: WuduStep[] = [
  {
    stepNumber: 1,
    title: "L'Intention (Niyyah) & Dire Bismillah",
    arabicTitle: "النية والتسمية",
    instruction: "Formuler l'intention sincère dans le cœur de se purifier pour Allah, puis prononcer la formule sacrée.",
    details: "L'intention ne se prononce pas à voix haute, elle réside dans le cœur. On commence par dire 'Bismillah' (Au nom d'Allah).",
    duaArabic: "بِسْمِ اللَّهِ",
    duaPhonetic: "Bismillāh",
    duaTranslation: "Au nom d'Allah",
    frequency: "1 fois",
    iconName: "Heart"
  },
  {
    stepNumber: 2,
    title: "Laver les mains jusqu'aux poignets",
    arabicTitle: "غسل اليدين إلى الرسغين",
    instruction: "Laver soigneusement les deux mains jusqu'aux poignets en veillant à frotter entre les doigts.",
    details: "Commencer par la main droite, puis la main gauche, en nettoyant les espaces interdigitaux.",
    frequency: "3 fois",
    iconName: "Hand"
  },
  {
    stepNumber: 3,
    title: "Le Rinçage de la bouche (Madmadah)",
    arabicTitle: "المضمضة",
    instruction: "Prendre une poignée d'eau avec la main droite, la porter à la bouche, faire circuler l'eau et recracher.",
    details: "Permet de nettoyer la bouche de tout résidu alimentaire pour aborder la récitation du Coran avec pureté.",
    frequency: "3 fois",
    iconName: "Smile"
  },
  {
    stepNumber: 4,
    title: "L'Aspiration d'eau par le nez (Istinshaq)",
    arabicTitle: "الاستنشاق والاستنثار",
    instruction: "Aspirer doucement de l'eau par le nez avec la main droite, puis rejeter l'eau (Istinthar) avec la main gauche.",
    details: "Nettoie les narines. Ne pas aspirer trop fort si l'on est en état de jeûne.",
    frequency: "3 fois",
    iconName: "Wind"
  },
  {
    stepNumber: 5,
    title: "Laver le visage entier",
    arabicTitle: "غسل الوجه",
    instruction: "Laver le visage du haut du front (naissance des cheveux) jusqu'au bas du menton, et d'une oreille à l'autre.",
    details: "Veiller à ce que l'eau humidifie l'ensemble du visage, y compris la barbe pour les hommes.",
    frequency: "3 fois",
    iconName: "User"
  },
  {
    stepNumber: 6,
    title: "Laver les avant-bras jusqu'aux coudes",
    arabicTitle: "غسل اليدين إلى المرفقين",
    instruction: "Laver chaque avant-bras de la pointe des doigts jusqu'au coude inclus.",
    details: "Commencer par le bras droit en incluant bien le coude dans le lavage, puis répéter pour le bras gauche.",
    frequency: "3 fois pour chaque bras",
    iconName: "Activity"
  },
  {
    stepNumber: 7,
    title: "Passer les mains mouillées sur la tête et les oreilles",
    arabicTitle: "مسح الرأس والأذنين",
    instruction: "Passer les mains humides sur l'ensemble des cheveux d'avant en arrière, puis insérer les index dans les oreilles et passer les pouces derrière.",
    details: "Un seul passage (Mas-h) suffit avec une nouvelle eau résiduelle sur les mains.",
    frequency: "1 fois",
    iconName: "Sparkles"
  },
  {
    stepNumber: 8,
    title: "Laver les pieds jusqu'aux chevilles",
    arabicTitle: "غسل الرجلين إلى الكعبين",
    instruction: "Laver entièrement le pied droit jusqu'à la cheville incluse en passant le petit doigt entre les orteils, puis faire de même avec le pied gauche.",
    details: "Ne pas oublier les talons et les malléoles, zones souvent négligées.",
    frequency: "3 fois pour chaque pied",
    iconName: "Footprints"
  }
];

export const WUDU_DUA_AFTER = {
  arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
  phonetic: "Ash-hadu an lā ilāha illā Allāhu wahdahu lā sharīka lahu, wa ash-hadu anna Muhammadan 'abduhu wa rasūluh. Allāhumma ij'alnī mina at-tawwābīna waj'alnī mina al-mutatahhirīn.",
  translation: "Je témoigne qu'il n'y a de divinité digne d'adoration qu'Allah, Seul sans associé, et je témoigne que Muhammad est Son serviteur et Messager. Ô Seigneur ! Fais que je sois du nombre des repentants et du nombre de ceux qui se purifient.",
  merit: "Le Prophète ﷺ a enseigné que celui qui prononce cette invocation après de parfaites ablutions, les huit portes du Paradis s'ouvrent à lui pour qu'il y entre par celle de son choix."
};

export const WUDU_NULLIFIERS = [
  "Tout ce qui sort par les voies naturelles (urine, matières fécales, gaz intestinaux).",
  "Le sommeil profond allongé qui fait perdre la conscience de son corps.",
  "La perte de conscience (évanouissement, ivresse, anesthésie générale).",
  "Le contact direct et sans obstacle des parties intimes avec la paume de la main.",
  "La consommation de viande de chameau (selon l'école hanbalite et le hadith prophétique authentique)."
];

export const PRAYERS: PrayerDefinition[] = [
  {
    id: 'fajr',
    name: "Al-Fajr (L'Aube)",
    arabicName: "الفجر",
    rakats: 2,
    sunnahBefore: 2,
    sunnahAfter: 0,
    recitationType: "À voix haute (Jahr)",
    timingDesc: "De la première lueur blanche de l'aube véritable jusqu'au lever du soleil (Chourouq).",
    merits: "« Les deux unités de prière précédant le Fajr sont meilleures que ce bas-monde et tout ce qu'il contient. » (Hadith Muslim)"
  },
  {
    id: 'dhuhr',
    name: "Ad-Dhuhr (Le Midi)",
    arabicName: "الظهر",
    rakats: 4,
    sunnahBefore: 4,
    sunnahAfter: 2,
    recitationType: "À voix basse (Sirr)",
    timingDesc: "Dès que le soleil commence à décliner de son zénith (Zawal) jusqu'à ce que l'ombre d'un objet égale sa taille.",
    merits: "Moment où les portes du ciel s'ouvrent à la mi-journée pour accueillir les bonnes œuvres."
  },
  {
    id: 'asr',
    name: "Al-'Asr (L'Après-midi)",
    arabicName: "العصر",
    rakats: 4,
    sunnahBefore: 0,
    sunnahAfter: 0,
    recitationType: "À voix basse (Sirr)",
    timingDesc: "De la fin de Dhuhr jusqu'au début du jaunissement du soleil précédant son coucher.",
    merits: "Appelée 'la prière médiane' (Salat Al-Wusta) dans le Coran : « Préservez les prières, et tout particulièrement la prière médiane. »"
  },
  {
    id: 'maghrib',
    name: "Al-Maghrib (Le Coucher)",
    arabicName: "المغرب",
    rakats: 3,
    sunnahBefore: 0,
    sunnahAfter: 2,
    recitationType: "Mixte (2 Jahr + 1 Sirr)",
    timingDesc: "Dès la disparition complète du disque solaire sous l'horizon jusqu'à l'extinction du crépuscule rouge.",
    merits: "Prière qui clôture le jour et accompagne la rupture du jeûne pour les jeûneurs."
  },
  {
    id: 'isha',
    name: "Al-'Isha (La Nuit)",
    arabicName: "العشاء",
    rakats: 4,
    sunnahBefore: 0,
    sunnahAfter: 2,
    recitationType: "Mixte (2 Jahr + 2 Sirr)",
    timingDesc: "De la disparition des lueurs crépusculaires rouges jusqu'au milieu de la nuit.",
    merits: "« Celui qui accomplit la prière de l'Isha en groupe a la récompense d'avoir prié la moitié de la nuit. »"
  }
];

export const PRAYER_STEP_DETAILS: PrayerStepDetail[] = [
  {
    id: 'takbir',
    name: "1. Takbīrat Al-Ihrām (Entrée sacrée)",
    arabicTitle: "تكبيرة الإحرام",
    postureDescription: "Debout, le regard humblement fixé vers l'endroit de la prosternation, lever les deux mains à la hauteur des oreilles ou des épaules en disant avec ferveur :",
    recitationArabic: "اللَّهُ أَكْبَرُ",
    recitationPhonetic: "Allāhu Akbar",
    recitationTranslation: "Allah est le Plus Grand.",
    repetition: "1 fois",
    tips: "Cette formule marque l'entrée solennelle dans la prière et rend interdite toute parole ou occupation profane.",
    applicableRakats: [1]
  },
  {
    id: 'istiftah',
    name: "2. Invocation d'ouverture (Du'ā Al-Istiftāh)",
    arabicTitle: "دعاء الاستفتاح",
    postureDescription: "Poser la main droite sur le dos de la main gauche, au niveau de la poitrine ou au-dessus du nombril.",
    recitationArabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ",
    recitationPhonetic: "Subhānak-Allāhumma wa bihamdik, wa tabārak-asmuk, wa ta'ālā jadduk, wa lā ilāha ghayruk.",
    recitationTranslation: "Gloire et pureté à Toi, ô Allah, et à Toi la louange. Béni soit Ton Nom, exaltée soit Ta majesté, et il n'y a d'autre divinité que Toi.",
    repetition: "1 fois (Sunnah dans la 1ère Rakat)",
    tips: "Récité à voix basse pour calmer l'esprit et consacrer son attention à Allah.",
    applicableRakats: [1]
  },
  {
    id: 'qiyam_fatiha',
    name: "3. Récitation de la Sourate Al-Fātiha",
    arabicTitle: "قراءة الفاتحة",
    postureDescription: "Toujours debout (Qiyām), réciter la formule de refuge « A'oudhou billahi mina ash-shaytani ar-rajim » puis la Fatiha verset par verset.",
    recitationArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    recitationPhonetic: "Bismi Allāhi ar-Rahmāni ar-Rahīm. Al-Hamdu lillāhi Rabbi al-'ālamīn...",
    recitationTranslation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur de l'univers...",
    repetition: "Obligatoire dans TOUTES les Rakats",
    tips: "Après le dernier verset, on dit à voix posée : « Âmīn » (Ô Seigneur, exauce notre prière).",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'qiyam_surah',
    name: "4. Récitation d'une sourate ou de versets complémentaires",
    arabicTitle: "قراءة ما تيسر من القرآن",
    postureDescription: "Debout, réciter une courte sourate comme Al-Ikhlas, Al-Falaq, An-Nas ou Al-Kawthar (dans les 2 premières Rakats seulement).",
    recitationArabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    recitationPhonetic: "Qul huwa Allāhu ahad. Allāhu as-Samad. Lam yalid walam yūlad. Walam yakun lahu kufuwan ahad.",
    recitationTranslation: "Dis : « Il est Allah, Unique. Allah, Le Seul à être imploré. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui. »",
    repetition: "Dans les Rakats 1 et 2",
    tips: "Dans les 3ème et 4ème Rakats, on ne récite généralement que la Fatiha seule.",
    applicableRakats: [1, 2]
  },
  {
    id: 'ruku',
    name: "5. L'Inclinaison (Ar-Rukū')",
    arabicTitle: "الركوع",
    postureDescription: "Dire « Allāhu Akbar » en s'inclinant, le dos droit à l'horizontale, les mains agrippant fermement les genoux, doigts écartés.",
    recitationArabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    recitationPhonetic: "Subhāna Rabbiya al-'Adhīm",
    recitationTranslation: "Gloire et pureté à mon Seigneur l'Immense.",
    repetition: "3 fois (au minimum 1 fois obligatoire)",
    tips: "Garder la nuque dans le prolongement de la colonne vertébrale, sans trop baisser ni trop relever la tête.",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'itidal',
    name: "6. Le Redressement de l'inclinaison (Al-I'tidāl)",
    arabicTitle: "الرفع من الركوع",
    postureDescription: "Se redresser complètement jusqu'à retrouver la station debout droite et sereine en prononçant :",
    recitationArabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ (puis une fois debout) رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
    recitationPhonetic: "Sami'a Allāhu liman hamidah... Rabbanā wa laka al-hamd, hamdan kathīran tayyiban mubārakan fīh.",
    recitationTranslation: "Allah a entendu celui qui L'a loué... Ô notre Seigneur, à Toi la louange, une louange abondante, pure et bénie.",
    repetition: "1 fois",
    tips: "Attendre un instant que chaque vertèbre reprenne sa place avant d'amorcer la descente au sol.",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'sujud_1',
    name: "7. La Première Prosternation (As-Sujūd)",
    arabicTitle: "السجود الأول",
    postureDescription: "Dire « Allāhu Akbar » et se prosterner en posant au sol les 7 membres sacrés : le front et le nez, les 2 paumes de mains, les 2 genoux et les orteils des 2 pieds pliés vers la Qibla.",
    recitationArabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    recitationPhonetic: "Subhāna Rabbiya al-A'lā",
    recitationTranslation: "Gloire et pureté à mon Seigneur le Très-Haut.",
    repetition: "3 fois",
    tips: "C'est l'état où le serviteur est le plus proche de son Créateur. Moment d'humilité et d'exaucement des vœux.",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'jalsa',
    name: "8. L'Assise entre les deux prosternations (Al-Jalsah)",
    arabicTitle: "الجلوس بين السجدتين",
    postureDescription: "Dire « Allāhu Akbar » en se relevant pour s'asseoir calmement sur le pied gauche, le pied droit dressé, mains posées sur les cuisses.",
    recitationArabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَارْزُقْنِي",
    recitationPhonetic: "Rabbi ighfir lī, Rabbi ighfir lī, war-hamnī, wahdinī, war-zuqnī.",
    recitationTranslation: "Seigneur, pardonne-moi, Seigneur, pardonne-moi, fais-moi miséricorde, guide-moi et accorde-moi ma subsistance.",
    repetition: "1 à 2 fois",
    tips: "Ne jamais se précipiter vers la seconde prosternation sans avoir marqué une pause assise paisible.",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'sujud_2',
    name: "9. La Deuxième Prosternation (As-Sujūd)",
    arabicTitle: "السجود الثاني",
    postureDescription: "Dire « Allāhu Akbar » et répéter exactement la même prosternation que la première avec les 7 membres au sol.",
    recitationArabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    recitationPhonetic: "Subhāna Rabbiya al-A'lā",
    recitationTranslation: "Gloire et pureté à mon Seigneur le Très-Haut.",
    repetition: "3 fois",
    tips: "Termine une unité de prière (Rak'at). On se relève ensuite pour la suivante ou on reste assis pour le Tashahhud.",
    applicableRakats: [1, 2, 3, 4]
  },
  {
    id: 'tashahhud',
    name: "10. Le Tachahoud & Prière sur le Prophète (Salawāt)",
    arabicTitle: "التشهد والصلاة الإبراهيمية",
    postureDescription: "Assis calmement, main gauche à plat sur la cuisse gauche, main droite fermée en levant l'index en signe d'Unicité :",
    recitationArabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ...",
    recitationPhonetic: "At-tahiyyātu lillāhi was-salawātu wat-tayyibāt, as-salāmu 'alayka ayyuhā an-Nabiyyu wa rahmatullāhi wa barakātuh, as-salāmu 'alaynā wa 'alā 'ibādillāhi as-sālihīn. Ash-hadu an lā ilāha illā Allāh, wa ash-hadu anna Muhammadan 'abduhu wa rasūluh. Allāhumma salli 'alā Muhammadin wa 'alā āli Muhammad...",
    recitationTranslation: "Les salutations sont pour Allah, ainsi que les prières et les bonnes œuvres. Que le salut soit sur toi, ô Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Que le salut soit sur nous et sur les vertueux serviteurs d'Allah...",
    repetition: "À la 2ème Rakat (Tachahoud intermédiaire) et à la dernière Rakat (complet avec Salawat)",
    tips: "Fixer son index droit levé qui témoigne de l'Unicité suprême d'Allah.",
    applicableRakats: [2, 4]
  },
  {
    id: 'taslim',
    name: "11. La Salutation finale de sortie (At-Taslīm)",
    arabicTitle: "التسليم",
    postureDescription: "Tourner le visage vers la droite jusqu'à voir l'épaule droite en disant la salutation, puis tourner le visage vers la gauche en répétant :",
    recitationArabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    recitationPhonetic: "As-Salāmu 'alaykum wa Rahmatullāh",
    recitationTranslation: "Que la paix et la miséricorde d'Allah soient sur vous.",
    repetition: "À droite puis à gauche",
    tips: "Marque la conclusion officielle de la prière. Le cœur quitte la présence rituelle comblé de sérénité.",
    applicableRakats: [2, 3, 4]
  }
];
