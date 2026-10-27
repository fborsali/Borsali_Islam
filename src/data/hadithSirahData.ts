export interface NawawiHadith {
  number: number;
  title: string;
  arabicTitle: string;
  arabic: string;
  phonetic: string;
  translation: string;
  narrator: string;
  source: string;
  theme: 'Intention & Foi' | 'Pratique & Éthique' | 'Fraternité & Cœur';
  lessons: string[];
}

export interface SirahMilestone {
  id: string;
  yearCE: string;
  yearHijri: string;
  era: 'Période Mecquoise' | 'Période Médinoise';
  title: string;
  arabicTitle: string;
  location: string;
  summary: string;
  details: string;
  lesson: string;
}

export interface HijriMonthInfo {
  number: number;
  name: string;
  arabicName: string;
  isSacred: boolean;
  meaning: string;
  events: string[];
}

export const NAWAWI_HADITHS: NawawiHadith[] = [
  {
    number: 1,
    title: "Les actes ne valent que par les intentions",
    arabicTitle: "إنما الأعمال بالنيات",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    phonetic: "Innamā al-a'mālu bin-niyyāt, wa innamā likulli imri'in mā nawā...",
    translation: "« Les actes ne valent que par les intentions, et chaque homme n'aura que ce qu'il a eu réellement l'intention de faire. Celui dont l'émigration est pour Allah et Son Messager, son émigration sera comptée pour Allah et Son Messager... »",
    narrator: "'Umar ibn Al-Khaṭṭāb (qu'Allah l'agrée)",
    source: "Sahih Al-Bukhari (1) & Sahih Muslim (1907)",
    theme: 'Intention & Foi',
    lessons: [
      "La sincérité (Al-Ikhlāṣ) est la condition d'acceptation de toute œuvre.",
      "Un acte quotidien permis (dormir, travailler, nourrir sa famille) devient une adoration s'il est accompagné d'une bonne intention.",
      "Les savants considèrent ce hadith comme le tiers ou le quart de toute la science islamique."
    ]
  },
  {
    number: 2,
    title: "Le Hadith de Jibrīl : Islam, Imān et Ihsān",
    arabicTitle: "حديث جبريل : الإسلام والإيمان والإحسان",
    arabic: "قَالَ: فَأَخْبِرْنِي عَنِ الْإِحْسَانِ، قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
    phonetic: "Qāla: Fa-akhbirnī 'ani al-Iḥsān. Qāla: An ta'buda Allāha ka-annaka tarāh, fa-in lam takun tarāhu fa-innahū yarāk.",
    translation: "« Il dit : Informe-moi sur l'Excellence (Al-Ihsān). Le Prophète ﷺ répondit : C'est que tu adores Allah comme si tu Le voyais ; car si toi tu ne Le vois pas, Lui certes te voit. »",
    narrator: "'Umar ibn Al-Khaṭṭāb (qu'Allah l'agrée)",
    source: "Sahih Muslim (8)",
    theme: 'Intention & Foi',
    lessons: [
      "La religion s'articule autour de trois degrés : l'Islam (pratique extérieure), l'Imān (foi intérieure) et l'Ihsān (excellence spirituelle).",
      "L'Ihsān consiste à vivre dans la conscience constante de la présence bienveillante d'Allah (Al-Murāqabah)."
    ]
  },
  {
    number: 6,
    title: "Le licite est clair et le cœur est le roi des membres",
    arabicTitle: "الحلال بين والحرام بين وصلاح القلب",
    arabic: "أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ",
    phonetic: "Alā wa inna fī al-jasadi muḍghatan idhā ṣalaḥat ṣalaḥa al-jasadu kulluh, wa idhā fasadat fasada al-jasadu kulluh, alā wa hiya al-qalb.",
    translation: "« Certes, il y a dans le corps un morceau de chair : s'il est sain, tout le corps est sain ; et s'il est corrompu, tout le corps est corrompu. N'est-ce pas que c'est le cœur ! »",
    narrator: "An-Nu'mān ibn Bashīr (qu'Allah les agrée)",
    source: "Sahih Al-Bukhari (52) & Sahih Muslim (1599)",
    theme: 'Intention & Foi',
    lessons: [
      "S'écarter des choses douteuses protège la foi et l'honneur du croyant.",
      "La purification du cœur (Tazkiyat An-Nafs) est la clé de la droiture des actes."
    ]
  },
  {
    number: 7,
    title: "La religion, c'est le bon conseil et la sincérité (An-Nasīhah)",
    arabicTitle: "الدين النصيحة",
    arabic: "الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ",
    phonetic: "Ad-dīnu an-naṣīḥah. Qulnā: Liman? Qāla: Lillāhi wa li-Kitābihī wa li-Rasūlihī wa li-a'immati al-muslimīna wa 'āmmatihim.",
    translation: "« La religion, c'est la loyauté sincère (et le bon conseil). Nous demandâmes : Envers qui ? Il répondit : Envers Allah, Son Livre, Son Messager, les guides des musulmans et l'ensemble d'entre eux. »",
    narrator: "Tamīm Ad-Dārī (qu'Allah l'agrée)",
    source: "Sahih Muslim (55)",
    theme: 'Fraternité & Cœur',
    lessons: [
      "An-Nasīhah signifie vouloir sincèrement le bien pour autrui sans ostentation ni mépris.",
      "La loyauté envers le Livre d'Allah implique de le lire, le comprendre et agir selon ses préceptes."
    ]
  },
  {
    number: 12,
    title: "La beauté de l'Islam d'une personne : délaisser ce qui ne la regarde pas",
    arabicTitle: "من حسن إسلام المرء تركه ما لا يعنيه",
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    phonetic: "Min ḥusni islāmi al-mar'i tarkuhū mā lā ya'nīh.",
    translation: "« Fait partie du bel Islam d'une personne le fait de délaisser ce qui ne la concerne pas. »",
    narrator: "Abū Hurayrah (qu'Allah l'agrée)",
    source: "At-Tirmidhi (2317) & Ibn Mājah (3976)",
    theme: 'Pratique & Éthique',
    lessons: [
      "Préserver sa langue et son temps des futilités, des polémiques stériles et de l'indiscrétion.",
      "Concentrer son énergie sur ce qui est utile dans ce monde et dans l'au-delà."
    ]
  },
  {
    number: 13,
    title: "Aimer pour son frère ce que l'on aime pour soi-même",
    arabicTitle: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    phonetic: "Lā yu'minu aḥadukum ḥattā yuḥibba li-akhīhi mā yuḥibbu linafsih.",
    translation: "« Aucun de vous n'aura une foi complète tant qu'il n'aimera pas pour son frère ce qu'il aime pour lui-même. »",
    narrator: "Anas ibn Mālik (qu'Allah l'agrée)",
    source: "Sahih Al-Bukhari (13) & Sahih Muslim (45)",
    theme: 'Fraternité & Cœur',
    lessons: [
      "La vraie fraternité purifie le cœur de l'envie (Al-Hasad) et de l'égoïsme.",
      "Souhaiter le bien, la guidée et la réussite à autrui élève le degré de la foi."
    ]
  },
  {
    number: 15,
    title: "La noblesse de la parole, l'hospitalité et le bon voisinage",
    arabicTitle: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    phonetic: "Man kāna yu'minu billāhi wal-yawmi al-ākhiri fal-yaqul khayran aw li-yaṣmut...",
    translation: "« Que celui qui croit en Allah et au Jour Dernier dise du bien ou qu'il garde le silence ; que celui qui croit en Allah et au Jour Dernier honore son voisin ; et que celui qui croit en Allah et au Jour Dernier honore son invité. »",
    narrator: "Abū Hurayrah (qu'Allah l'agrée)",
    source: "Sahih Al-Bukhari (6018) & Sahih Muslim (47)",
    theme: 'Pratique & Éthique',
    lessons: [
      "La maîtrise de la parole est une preuve directe de la foi au Jour Dernier.",
      "La bienveillance envers les voisins et la générosité envers les hôtes font partie intégrante de la foi."
    ]
  },
  {
    number: 16,
    title: "Ne te mets pas en colère (Lā taghḍab)",
    arabicTitle: "لا تغضب",
    arabic: "أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي، قَالَ: لَا تَغْضَبْ. فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ",
    phonetic: "Anna rajulan qāla lin-Nabiyyi ﷺ: Awṣinī. Qāla: Lā taghḍab. Fa-raddada mirāran, qāla: Lā taghḍab.",
    translation: "« Un homme dit au Prophète ﷺ : Conseille-moi ! Il lui répondit : Ne te mets pas en colère. L'homme répéta sa demande plusieurs fois, et à chaque fois il lui dit : Ne te mets pas en colère. »",
    narrator: "Abū Hurayrah (qu'Allah l'agrée)",
    source: "Sahih Al-Bukhari (6116)",
    theme: 'Pratique & Éthique',
    lessons: [
      "La vraie force ne réside pas dans le combat physique, mais dans la maîtrise de soi au moment de la colère.",
      "Remèdes prophétiques à la colère : chercher refuge auprès d'Allah, garder le silence, s'asseoir ou faire ses ablutions."
    ]
  },
  {
    number: 18,
    title: "La piété (Taqwā), la bonne action et le noble caractère",
    arabicTitle: "اتق الله حيثما كنت وأتبع السيئة الحسنة",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    phonetic: "Ittaqi Allāha ḥaythumā kunt, wa atbi'i as-sayyi'ata al-ḥasanata tamḥuhā, wa khāliqi an-nāsa bikhuluqin ḥasan.",
    translation: "« Crains pieusement Allah où que tu sois, fais suivre la mauvaise action par une bonne action qui l'effacera, et comporte-toi envers les gens avec un noble caractère. »",
    narrator: "Abū Dharr & Mu'ādh ibn Jabal (qu'Allah les agrée)",
    source: "At-Tirmidhi (1987)",
    theme: 'Pratique & Éthique',
    lessons: [
      "Ce hadith réunit les trois droits : le droit d'Allah (la Taqwā en secret comme en public), le droit de l'âme (réparer ses fautes par le bien) et le droit des créatures (le bon comportement)."
    ]
  },
  {
    number: 19,
    title: "Préserve Allah et Il te préservera (Conseil à Ibn 'Abbās)",
    arabicTitle: "احفظ الله يحفظك",
    arabic: "يَا غُلَامُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ",
    phonetic: "Yā ghulāmu innī u'allimuka kalimāt: Iḥfaẓi Allāha yaḥfaẓk, iḥfaẓi Allāha tajidhu tujāhak, idhā sa'alta fas'ali Allāh, wa idhā ista'anta fasta'in billāh...",
    translation: "« Ô jeune garçon, je vais t'enseigner quelques paroles : Préserve les commandements d'Allah et Il te préservera. Préserve Allah et tu Le trouveras devant toi. Lorsque tu demandes, demande à Allah ; et lorsque tu cherches de l'aide, cherche l'aide d'Allah. »",
    narrator: "'Abdullāh ibn 'Abbās (qu'Allah les agrée)",
    source: "At-Tirmidhi (2516)",
    theme: 'Intention & Foi',
    lessons: [
      "S'attacher exclusivement à Allah libère le cœur de la peur des créatures.",
      "Ce qu'Allah a décrété pour nous ne peut nous manquer, et ce qui ne nous était pas destiné ne peut nous atteindre."
    ]
  },
  {
    number: 22,
    title: "La voie directe vers le Paradis",
    arabicTitle: "أرأيت إذا صليت المكتوبات وصمت رمضان",
    arabic: "أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ",
    phonetic: "Ara'ayta idhā ṣallaytu al-maktūbāt, wa ṣumtu Ramaḍān, wa aḥlaltu al-ḥalāl, wa ḥarramtu al-ḥarām... a-adkhulu al-Jannah? Qāla: Na'am.",
    translation: "« Un homme demanda : Vois-tu si j'accomplis les prières prescrites, jeûne le mois de Ramadan, considère licite ce qui est licite et illicite ce qui est interdit, sans rien y ajouter, entrerai-je au Paradis ? Le Prophète ﷺ répondit : Oui. »",
    narrator: "Jābir ibn 'Abdillāh (qu'Allah les agrée)",
    source: "Sahih Muslim (15)",
    theme: 'Pratique & Éthique',
    lessons: [
      "La facilité et la clarté de l'Islam : l'accomplissement fidèle des piliers obligatoires et le respect des limites d'Allah ouvrent les portes du Paradis."
    ]
  },
  {
    number: 23,
    title: "La pureté est la moitié de la foi",
    arabicTitle: "الطهور شطر الإيمان",
    arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ",
    phonetic: "Aṭ-ṭuhūru shaṭru al-īmān, wal-ḥamdu lillāhi tamla'u al-mīzān...",
    translation: "« La pureté est la moitié de la foi. La louange à Allah (Al-Hamdulillāh) remplit la Balance. Gloire à Allah et Louange à Allah remplissent l'espace entre les cieux et la terre. La prière est une lumière, l'aumône est une preuve, la patience est une clarté, et le Coran est un argument en ta faveur ou contre toi. »",
    narrator: "Abū Mālik Al-Ash'arī (qu'Allah l'agrée)",
    source: "Sahih Muslim (223)",
    theme: 'Pratique & Éthique',
    lessons: [
      "Allie la pureté du corps (Wudū') et la pureté de l'âme (Dhikr et prière).",
      "La prière éclaire le visage, le cœur et la tombe du croyant."
    ]
  },
  {
    number: 34,
    title: "Corriger le mal avec sagesse selon sa capacité",
    arabicTitle: "من رأى منكم منكرا فليغيره",
    arabic: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ",
    phonetic: "Man ra'ā minkum munkaran fal-yughayyirhu biyadih, fa-in lam yastaṭi' fa-bilisānih, fa-in lam yastaṭi' fa-biqalbih...",
    translation: "« Que celui d'entre vous qui voit un mal le change de sa main ; s'il ne le peut pas, que ce soit par sa langue ; et s'il ne le peut pas, que ce soit par son cœur (en le réprouvant), et c'est là le minimum de la foi. »",
    narrator: "Abū Sa'īd Al-Khudrī (qu'Allah l'agrée)",
    source: "Sahih Muslim (49)",
    theme: 'Fraternité & Cœur',
    lessons: [
      "La responsabilité morale s'exerce selon la capacité, l'autorité légitime et la sagesse, sans jamais causer un mal plus grand."
    ]
  },
  {
    number: 42,
    title: "L'immensité du pardon d'Allah (Hadith Qudsī)",
    arabicTitle: "يا ابن آدم إنك ما دعوتني ورجوتني غفرت لك",
    arabic: "قَالَ اللَّهُ تَعَالَى: يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ وَلَا أُبَالِي",
    phonetic: "Qāla Allāhu Ta'ālā: Yā ibna Ādama innaka mā da'awtanī wa rajawtanī ghafartu laka 'alā mā kāna fīka wa lā ubālī...",
    translation: "« Allah le Très-Haut a dit : Ô fils d'Adam, tant que tu M'invoques et places ton espoir en Moi, Je te pardonne quoi que tu aies fait, et Je ne M'en soucie pas. Ô fils d'Adam, si tes péchés atteignaient les nuages du ciel et qu'ensuite tu Me demandais pardon, Je te pardonnerais... »",
    narrator: "Anas ibn Mālik (qu'Allah l'agrée)",
    source: "At-Tirmidhi (3540)",
    theme: 'Intention & Foi',
    lessons: [
      "Ne jamais désespérer de la miséricorde d'Allah, quelle que soit l'ampleur des fautes passées.",
      "Le Tawhīd (ne rien associer à Allah) et le repentir sincère effacent toutes les fautes."
    ]
  }
];

export const SIRAH_TIMELINE: SirahMilestone[] = [
  {
    id: 'birth_570',
    yearCE: '570 ap. J.-C.',
    yearHijri: '53 av. Hégire',
    era: 'Période Mecquoise',
    title: "Naissance du Prophète ﷺ (L'Année de l'Éléphant)",
    arabicTitle: "مولد النبي ﷺ عام الفيل",
    location: 'La Mecque',
    summary: "Naissance de Muhammad ibn 'Abdillāh ﷺ à La Mecque le lundi de Rabī' Al-Awwal, l'année où Allah protégea la Kaaba de l'armée d'Abraha.",
    details: "Orphelin de père ('Abdullāh) avant sa naissance, il fut confié à la nourrice Halīmah As-Sa'diyyah dans le désert des Banū Sa'd, puis perdit sa mère Āminah à l'âge de 6 ans et fut recueilli par son grand-père 'Abdul-Muṭṭalib puis son oncle Abū Ṭālib.",
    lesson: "Allah façonna Son Messager à travers l'épreuve de l'orphelinat pour qu'il devienne le plus compatissant des hommes envers les faibles et les orphelins."
  },
  {
    id: 'amin_595',
    yearCE: '595 ap. J.-C.',
    yearHijri: '28 av. Hégire',
    era: 'Période Mecquoise',
    title: "Le Véridique et Digne de Confiance (As-Sādiq Al-Amīn) & Mariage avec Khadījah",
    arabicTitle: "الصادق الأمين والزواج بخديجة رضي الله عنها",
    location: 'La Mecque',
    summary: "Reconnu dans toute La Mecque pour sa droiture morale absolue, il épouse Khadījah bint Khuwaylid à l'âge de 25 ans.",
    details: "Avant même la Révélation, il participa au Pacte des Vertueux (Hilf Al-Fuḍūl) pour défendre les opprimés à La Mecque et arbitra avec sagesse la pose de la Pierre Noire lors de la reconstruction de la Kaaba.",
    lesson: "La noblesse de caractère, l'honnêteté commerciale et la fidélité conjugale sont le socle de la vie du croyant."
  },
  {
    id: 'revelation_610',
    yearCE: '610 ap. J.-C.',
    yearHijri: '13 av. Hégire',
    era: 'Période Mecquoise',
    title: "La Première Révélation dans la Grotte de Hirā' (Iqra')",
    arabicTitle: "نزول الوحي في غار حراء",
    location: 'Mont An-Nūr (La Mecque)',
    summary: "Durant le mois de Ramadan, l'Archange Jibrīl (Gabriel) descend avec les cinq premiers versets de la Sourate Al-'Alaq : « Lis, au nom de ton Seigneur qui a créé ! »",
    details: "À l'âge de 40 ans, alors qu'il méditait dans la grotte de Hirā', il reçut la mission prophétique. Khadījah fut la première à croire en lui et à le réconforter : « Par Allah, Allah ne t'abandonnera jamais, car tu maintiens les liens de parenté, tu portes le fardeau du faible et tu secours les démunis. »",
    lesson: "Le premier commandement de l'Islam est la lecture, la science et la connaissance au nom d'Allah."
  },
  {
    id: 'isra_miraj_620',
    yearCE: '620 ap. J.-C.',
    yearHijri: '2 av. Hégire',
    era: 'Période Mecquoise',
    title: "Le Voyage Nocturne et l'Ascension Céleste (Al-Isrā' wal-Mi'rāj)",
    arabicTitle: "الإسراء والمعراج وفرض الصلاة",
    location: 'De La Mecque à Jérusalem (Al-Quds) puis aux Cieux',
    summary: "Après « l'Année de la Tristesse » (décès de Khadījah et d'Abū Ṭālib), Allah honore Son Prophète ﷺ par le voyage nocturne jusqu'à la Mosquée Al-Aqsā et l'ascension à travers les sept cieux.",
    details: "Il y dirigea tous les Prophètes en prière, démontrant l'unité du message monothéiste, puis reçut directement d'Allah la prescription des 5 prières quotidiennes.",
    lesson: "Après la plus grande épreuve vient l'ouverture divine, et la prière (Salāt) est l'ascension spirituelle quotidienne du croyant."
  },
  {
    id: 'hijrah_622',
    yearCE: '622 ap. J.-C.',
    yearHijri: 'An 1 de l’Hégire',
    era: 'Période Médinoise',
    title: "L'Hégire vers Médine (Al-Madīnah Al-Munawwarah)",
    arabicTitle: "الهجرة النبوية الشريفة إلى المدينة",
    location: 'De La Mecque à Médine',
    summary: "Émigration historique du Prophète ﷺ accompagné d'Abū Bakr As-Siddīq vers Yathrib, qui devient Médine, la Ville Illuminée. Point de départ du calendrier islamique.",
    details: "Dès son arrivée, le Prophète ﷺ bâtit la Mosquée de Qubā' puis la Mosquée Prophétique, institua le pacte de fraternité entre les Émigrés (Muhājirūn) et les Auxiliaires (Ansār), et rédigea la Constitution de Médine garantissant la paix civile.",
    lesson: "La mosquée, la fraternité sincère et la justice sociale sont les piliers d'une communauté harmonieuse."
  },
  {
    id: 'hudaybiyyah_628',
    yearCE: '628 ap. J.-C.',
    yearHijri: 'An 6 de l’Hégire',
    era: 'Période Médinoise',
    title: "Le Pacte d'Al-Hudaybiyyah : La Victoire Pacifique",
    arabicTitle: "صلح الحديبية (الفتح المبين)",
    location: 'Al-Hudaybiyyah (près de La Mecque)',
    summary: "Traité de paix de 10 ans que le Coran qualifie de « Victoire Éclatante » (Fatḥan Mubīnā - Sourate Al-Fath).",
    details: "En privilégiant la paix et la clairvoyance à long terme malgré les provocations, ce traité permit la diffusion pacifique du message de l'Islam dans toute la péninsule arabique.",
    lesson: "La patience stratégique, le respect des engagements et la recherche de la paix portent des fruits immenses."
  },
  {
    id: 'fath_makkah_630',
    yearCE: '630 ap. J.-C.',
    yearHijri: 'An 8 de l’Hégire',
    era: 'Période Médinoise',
    title: "L'Ouverture de La Mecque & Le Grand Pardon",
    arabicTitle: "فتح مكة والعفو العام",
    location: 'La Mecque',
    summary: "Le Prophète ﷺ entre à La Mecque la tête baissée par humilité devant Allah, purifie la Kaaba des idoles et accorde l'amnistie générale à ses anciens persécuteurs.",
    details: "Aux Mecquois qui l'avaient combattu et chassé pendant vingt ans, il adressa les paroles du Prophète Yūsuf : « Aucun reproche contre vous aujourd'hui ! Qu'Allah vous pardonne, C'est Lui le Plus Miséricordieux des miséricordieux. Allez, vous êtes libres ! »",
    lesson: "Le pardon au moment de la victoire est le sommet de la grandeur morale prophétique."
  },
  {
    id: 'farewell_632',
    yearCE: '632 ap. J.-C.',
    yearHijri: 'An 10-11 de l’Hégire',
    era: 'Période Médinoise',
    title: "Le Pèlerinage d'Adieu & Le Parachèvement de la Religion",
    arabicTitle: "حجة الوداع وخطبة عرفة",
    location: 'Mont Arafat & Médine',
    summary: "Devant plus de 100 000 compagnons sur le Mont 'Arafah, le Prophète ﷺ prononce son Sermon d'Adieu universel avant de rejoindre le Compagnon Suprême à Médine.",
    details: "Il y proclama le caractère sacré de la vie humaine, des biens et de l'honneur, les droits des femmes, l'abolition de l'usure et de tout racisme : « Aucun Arabe n'a de supériorité sur un non-Arabe, ni un Blanc sur un Noir, si ce n'est par la piété (Taqwā). »",
    lesson: "S'attacher fermement aux deux héritages laissés par le Prophète ﷺ : le Livre d'Allah et sa Sunnah authentique."
  }
];

export const HIJRI_MONTHS: HijriMonthInfo[] = [
  { number: 1, name: "Al-Muḥarram", arabicName: "المُحَرَّم", isSacred: true, meaning: "Le Mois Sacré (1er mois de l'année hégirienne)", events: ["1er Muharram : Nouvel An Hégirien", "10 Muharram : Jour d'Āshūrā' (Jeûne recommandé qui expie l'année écoulée)"] },
  { number: 2, name: "Ṣafar", arabicName: "صَفَر", isSacred: false, meaning: "Deuxième mois lunaire", events: ["Préparation spirituelle et continuité des bonnes œuvres"] },
  { number: 3, name: "Rabī' Al-Awwal", arabicName: "رَبِيع الأَوَّل", isSacred: false, meaning: "Le Premier Printemps", events: ["Mois de la naissance du Prophète ﷺ, de son arrivée à Médine (Hijrah) et de son rappel à Allah"] },
  { number: 4, name: "Rabī' Ath-Thānī", arabicName: "رَبِيع الثَّانِي", isSacred: false, meaning: "Le Second Printemps", events: ["Mois d'étude et de constance"] },
  { number: 5, name: "Jumādā Al-Ūlā", arabicName: "جُمَادَى الأُولَى", isSacred: false, meaning: "Cinquième mois lunaire", events: ["Rappel de la fraternité et de la solidarité"] },
  { number: 6, name: "Jumādā Ath-Thāniyah", arabicName: "جُمَادَى الآخِرَة", isSacred: false, meaning: "Sixième mois lunaire", events: ["Préparation à l'entrée dans la seconde moitié de l'année"] },
  { number: 7, name: "Rajab", arabicName: "رَجَب", isSacred: true, meaning: "Le Mois Vénéré (Mois Sacré)", events: ["L'un des 4 mois sacrés où les bonnes actions sont particulièrement valorisées", "Commémoration d'Al-Isrā' wal-Mi'rāj"] },
  { number: 8, name: "Sha'bān", arabicName: "شَعْبَان", isSacred: false, meaning: "Le Mois de l'Élévation des œuvres", events: ["Mois où les œuvres annuelles sont élevées vers Allah ; le Prophète ﷺ y jeûnait abondamment en prélude au Ramadan"] },
  { number: 9, name: "Ramaḍān", arabicName: "رَمَضَان", isSacred: false, meaning: "Le Mois Béni du Jeûne et de la Révélation du Coran", events: ["4ème Pilier de l'Islam : Jeûne obligatoire", "Prières nocturnes de Tarāwīḥ & Qiyām", "Laylat Al-Qadr (La Nuit du Destin, meilleure que 1000 mois)"] },
  { number: 10, name: "Shawwāl", arabicName: "شَوَّال", isSacred: false, meaning: "Mois de l'Aïd et du renouveau", events: ["1er Shawwāl : Fête de l'Aïd Al-Fiṭr", "Jeûne des 6 jours de Shawwāl (équivaut au jeûne de toute l'année avec Ramadan)"] },
  { number: 11, name: "Dhū Al-Qi'dah", arabicName: "ذُو القَعْدَة", isSacred: true, meaning: "Le Mois de la Trêve (Mois Sacré)", events: ["1er des trois mois consécutifs du Pèlerinage et de la paix sacrée"] },
  { number: 12, name: "Dhū Al-Ḥijjah", arabicName: "ذُو الحِجَّة", isSacred: true, meaning: "Le Mois du Grand Pèlerinage (Mois Sacré)", events: ["Les 10 premiers jours bénis (les meilleurs jours de l'année)", "9 Dhū Al-Ḥijjah : Jour de 'Arafah (Jeûne expiant 2 années pour le non-pèlerin)", "10 Dhū Al-Ḥijjah : Aïd Al-Aḍḥā (Fête du Sacrifice)"] }
];
