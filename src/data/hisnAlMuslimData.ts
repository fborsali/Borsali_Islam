export interface HisnCategory {
  id: 'matin_soir' | 'apres_priere' | 'sommeil_reveil' | 'maison_mosquee' | 'repas_voyage' | 'detresse_guérison' | 'douas_coraniques';
  title: string;
  arabicTitle: string;
  description: string;
  iconName: string;
}

export interface HisnDua {
  id: string;
  categoryId: HisnCategory['id'];
  title: string;
  arabic: string;
  phonetic: string;
  translation: string;
  targetCount: number;
  source: string;
  virtue: string;
}

export const HISN_CATEGORIES: HisnCategory[] = [
  {
    id: 'matin_soir',
    title: 'Matin & Soir',
    arabicTitle: 'أذكار الصباح والمساء',
    description: 'Bouclier spirituel quotidien à réciter après Fajr et après Asr.',
    iconName: 'Sun'
  },
  {
    id: 'apres_priere',
    title: 'Après la Prière',
    arabicTitle: 'أذكار بعد السلام من الصلاة',
    description: 'Invocations prophétiques authentiques juste après le Taslīm.',
    iconName: 'Sparkles'
  },
  {
    id: 'sommeil_reveil',
    title: 'Sommeil & Réveil',
    arabicTitle: 'أذكار النوم والاستيقاظ',
    description: 'Se placer sous la garde d’Allah avant de dormir et Le louer au réveil.',
    iconName: 'Moon'
  },
  {
    id: 'maison_mosquee',
    title: 'Maison & Mosquée',
    arabicTitle: 'أذكار المنزل والمسجد',
    description: 'Invocations en entrant et sortant du foyer ou de la mosquée.',
    iconName: 'Home'
  },
  {
    id: 'repas_voyage',
    title: 'Repas & Voyage',
    arabicTitle: 'أذكار الطعام والسفر',
    description: 'Bénir sa subsistance et sécuriser ses déplacements.',
    iconName: 'Compass'
  },
  {
    id: 'detresse_guérison',
    title: 'Épreuves & Guérison',
    arabicTitle: 'أدعية الكرب والمرض',
    description: 'Remèdes du cœur face à l’angoisse, la tristesse, la dette et la maladie.',
    iconName: 'Heart'
  },
  {
    id: 'douas_coraniques',
    title: 'Douas Coraniques (Rabbanā)',
    arabicTitle: 'أدعية قرآنية جامعة',
    description: 'Les plus belles implorations révélées dans le Noble Coran.',
    iconName: 'BookOpen'
  }
];

export const HISN_DUAS: HisnDua[] = [
  // MATIN & SOIR
  {
    id: 'sayyid_istighfar',
    categoryId: 'matin_soir',
    title: "Le Maître de la demande de pardon (Sayyid Al-Istighfār)",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    phonetic: "Allāhumma Anta Rabbī lā ilāha illā Ant, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mā istaṭa't, a'ūdhu bika min sharri mā ṣana't, abū'u laka bini'matika 'alayya wa abū'u laka bidhanbī faghfir lī, fa-innahu lā yaghfiru adh-dhunūba illā Ant.",
    translation: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité digne d'adoration que Toi. Tu m'as créé et je suis Ton serviteur. Je me tiens sur Ton pacte et Ta promesse autant que je le puis. Je cherche refuge auprès de Toi contre le mal que j'ai commis. Je reconnais Tes bienfaits sur moi et je reconnais mon péché : pardonne-moi donc, car nul ne pardonne les péchés si ce n'est Toi.",
    targetCount: 1,
    source: "Sahih Al-Bukhari (6306)",
    virtue: "Celui qui la dit le jour avec certitude et meurt avant le soir fait partie des gens du Paradis ; et celui qui la dit la nuit avec certitude et meurt avant le matin fait partie des gens du Paradis."
  },
  {
    id: 'ayat_kursi_adhkar',
    categoryId: 'matin_soir',
    title: "Le Verset du Trône (Āyat Al-Kursī)",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    phonetic: "Allāhu lā ilāha illā Huwa Al-Ḥayyu Al-Qayyūm, lā ta'khudhuhū sinatun wa lā nawm, lahu mā fī as-samāwāti wa mā fī al-arḍ, man dhā alladhī yashfa'u 'indahū illā bi-idhnih, ya'lamu mā bayna aydīhim wa mā khalfahum wa lā yuḥīṭūna bishay'in min 'ilmihī illā bimā shā', wasi'a kursiyyuhu as-samāwāti wa al-arḍ, wa lā ya'ūduhū ḥifẓuhumā wa Huwa Al-'Aliyyu Al-'Aẓīm.",
    translation: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre...",
    targetCount: 1,
    source: "Sourate Al-Baqarah (2:255)",
    virtue: "Celui qui le récite le matin est protégé des djinns jusqu'au soir, et celui qui le récite le soir est protégé jusqu'au matin."
  },
  {
    id: 'bismillah_la_yadurru',
    categoryId: 'matin_soir',
    title: "Protection absolue contre tout mal soudain",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    phonetic: "Bismillāhi alladhī lā yaḍurru ma'a ismihī shay'un fī al-arḍi wa lā fī as-samā'i wa Huwa As-Samī'u Al-'Alīm.",
    translation: "Au nom d'Allah, avec le Nom Duquel rien sur terre ni dans le ciel ne peut nuire, et Il est l'Audient, l'Omniscient.",
    targetCount: 3,
    source: "Abu Dawud (5088) & At-Tirmidhi (3388)",
    virtue: "Récitée 3 fois le matin et 3 fois le soir, aucune calamité soudaine ne touchera le croyant."
  },
  {
    id: 'raditu_billahi',
    categoryId: 'matin_soir',
    title: "Agrément d'Allah, de l'Islam et du Prophète ﷺ",
    arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    phonetic: "Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣallā Allāhu 'alayhi wa sallama nabiyyā.",
    translation: "J'agrée Allah comme Seigneur, l'Islam comme religion et Muhammad ﷺ comme Prophète.",
    targetCount: 3,
    source: "Musnad Ahmad & Abu Dawud (5072)",
    virtue: "Il est du devoir d'Allah de satisfaire au Jour de la Résurrection celui qui prononce ces paroles 3 fois matin et soir."
  },
  {
    id: 'hasbiyallahu',
    categoryId: 'matin_soir',
    title: "Allah me suffit (Contre les soucis de ce monde et de l'au-delà)",
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    phonetic: "Ḥasbiya Allāhu lā ilāha illā Huwa 'alayhi tawakkaltu wa Huwa Rabbu al-'Arshi al-'Aẓīm.",
    translation: "Allah me suffit ! Il n'y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense.",
    targetCount: 7,
    source: "Coran (9:129) & Abu Dawud (5081)",
    virtue: "Celui qui la dit 7 fois matin et soir, Allah lui suffira contre tout ce qui le préoccupe dans ce bas-monde et dans l'au-delà."
  },
  {
    id: 'subhanallahi_wa_bihamdihi_100',
    categoryId: 'matin_soir',
    title: "Gloire et Louange à Allah (100 fois)",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    phonetic: "SubḥānAllāhi wa biḥamdih.",
    translation: "Gloire et pureté à Allah, et à Lui la louange.",
    targetCount: 100,
    source: "Sahih Muslim (2691)",
    virtue: "Ses péchés lui sont pardonnés même s'ils sont aussi nombreux que l'écume de la mer."
  },

  // APRES LA PRIERE
  {
    id: 'astaghfirullah_salat',
    categoryId: 'apres_priere',
    title: "Demande de pardon et invocation de la Paix (As-Salām)",
    arabic: "أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    phonetic: "Astaghfirullāh (3 fois). Allāhumma Anta as-Salāmu wa minka as-salām, tabārakta yā Dhā al-Jalāli wa al-Ikrām.",
    translation: "Je demande pardon à Allah (3 fois). Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, ô Détenteur de la Majesté et de la Générosité.",
    targetCount: 1,
    source: "Sahih Muslim (591)",
    virtue: "Première parole prononcée par le Messager d'Allah ﷺ dès qu'il terminait la prière obligatoire."
  },
  {
    id: 'allahumma_a_inni',
    categoryId: 'apres_priere',
    title: "Demande d'aide pour l'invocation, la gratitude et l'adoration",
    arabic: "اللَّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ",
    phonetic: "Allāhumma a'innī 'alā dhikrika, wa shukrika, wa ḥusni 'ibādatik.",
    translation: "Ô Allah, aide-moi à T'invoquer, à Te remercier et à T'adorer de la meilleure manière.",
    targetCount: 1,
    source: "Abu Dawud (1522) — Recommandation à Mu'adh ibn Jabal",
    virtue: "Le Prophète ﷺ prit la main de Mu'adh et lui dit : « Ô Mu'adh, par Allah je t'aime ! Ne manque jamais de dire à la fin de chaque prière... »"
  },
  {
    id: 'tasbih_33_post_salat',
    categoryId: 'apres_priere',
    title: "Le Tasbīh complet (SubhānAllāh, Al-Hamdulillāh, Allāhu Akbar)",
    arabic: "سُبْحَانَ اللَّهِ (33) وَالْحَمْدُ لِلَّهِ (33) وَاللَّهُ أَكْبَرُ (33)",
    phonetic: "SubḥānAllāh (33) · Al-Ḥamdulillāh (33) · Allāhu Akbar (33)",
    translation: "Gloire à Allah (33 fois), Louange à Allah (33 fois), Allah est le Plus Grand (33 fois).",
    targetCount: 33,
    source: "Sahih Muslim (597)",
    virtue: "Suivi de la 100ème parole de clôture (Lā ilāha illā Allāh...), il efface les fautes fussent-elles comme l'écume de la mer."
  },

  // SOMMEIL & REVEIL
  {
    id: 'bismika_allahumma_amutu',
    categoryId: 'sommeil_reveil',
    title: "En se mettant au lit (Avant de dormir)",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    phonetic: "Bismika Allāhumma amūtu wa aḥyā.",
    translation: "C'est en Ton nom, ô Allah, que je meurs (m'endors) et que je vis (me réveille).",
    targetCount: 1,
    source: "Sahih Al-Bukhari (6324)",
    virtue: "Rappelle que le sommeil est la petite mort et place l'âme entre les Mains d'Allah durant la nuit."
  },
  {
    id: 'alhamdulillah_ahyanana',
    categoryId: 'sommeil_reveil',
    title: "En ouvrant les yeux au réveil",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    phonetic: "Al-ḥamdu lillāhi alladhī aḥyānā ba'da mā amātanā wa ilayhi an-nushūr.",
    translation: "Louange à Allah qui nous a redonné la vie après nous avoir fait mourir (dormir), et c'est vers Lui que se fera la Résurrection.",
    targetCount: 1,
    source: "Sahih Al-Bukhari (6312)",
    virtue: "Commence la journée par la gratitude pour le don renouvelé de la vie."
  },

  // MAISON & MOSQUEE
  {
    id: 'sortie_maison',
    categoryId: 'maison_mosquee',
    title: "En sortant de chez soi",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    phonetic: "Bismillāh, tawakkaltu 'alā Allāh, wa lā ḥawla wa lā quwwata illā billāh.",
    translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force ni de puissance que par Allah.",
    targetCount: 1,
    source: "Abu Dawud (5095) & At-Tirmidhi (3426)",
    virtue: "Les anges disent alors au croyant : « Tu es guidé, tu es pris en charge et tu es protégé », et les démons s'écartent de lui."
  },
  {
    id: 'entree_mosquee',
    categoryId: 'maison_mosquee',
    title: "En entrant à la mosquée (du pied droit)",
    arabic: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    phonetic: "Bismillāh, waṣ-ṣalātu was-salāmu 'alā Rasūlillāh, Allāhumma iftaḥ lī abwāba raḥmatik.",
    translation: "Au nom d'Allah, que la prière et le salut soient sur le Messager d'Allah. Ô Allah, ouvre-moi les portes de Ta miséricorde.",
    targetCount: 1,
    source: "Sahih Muslim (713)",
    virtue: "Prépare le cœur au recueillement dans la maison d'Allah."
  },

  // REPAS & VOYAGE
  {
    id: 'apres_repas',
    categoryId: 'repas_voyage',
    title: "Après avoir terminé son repas",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    phonetic: "Al-ḥamdu lillāhi alladhī aṭ'amanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.",
    translation: "Louange à Allah qui m'a nourri de ceci et me l'a accordé sans aucune force ni puissance de ma part.",
    targetCount: 1,
    source: "Abu Dawud (4023) & At-Tirmidhi (3458)",
    virtue: "Celui qui prononce cette louange après avoir mangé voit ses péchés antérieurs pardonnés."
  },
  {
    id: 'dua_voyage',
    categoryId: 'repas_voyage',
    title: "Invocation du voyage (En prenant la route)",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ",
    phonetic: "Subḥāna alladhī sakhkhara lanā hādhā wa mā kunnā lahū muqrinīn, wa innā ilā Rabbinā lamunqalibūn.",
    translation: "Gloire à Celui qui a mis ceci à notre service alors que nous n'étions pas capables de les dominer. Et c'est vers notre Seigneur que nous devons retourner.",
    targetCount: 1,
    source: "Coran (43:13-14) & Sahih Muslim (1342)",
    virtue: "Place le voyageur et sa monture/véhicule sous la sauvegarde divine."
  },

  // DETRESSE & GUERISON
  {
    id: 'dua_yunus',
    categoryId: 'detresse_guérison',
    title: "Invocation du Prophète Yūnus (Jonas) dans la détresse",
    arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    phonetic: "Lā ilāha illā Anta subḥānaka innī kuntu mina aẓ-ẓālimīn.",
    translation: "Il n'y a de divinité que Toi ! Gloire et pureté à Toi ! J'ai vraiment été du nombre des injustes.",
    targetCount: 3,
    source: "Coran (21:87) & At-Tirmidhi (3505)",
    virtue: "Aucun musulman n'invoque Allah par ces paroles au sujet d'une affaire sans qu'Allah ne l'exauce et ne dissipe son angoisse."
  },
  {
    id: 'dua_guerison',
    categoryId: 'detresse_guérison',
    title: "Invocation pour la guérison d'un malade",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    phonetic: "Allāhumma Rabba an-nāsi adhhibi al-ba's, ishfi Anta ash-Shāfī, lā shifā'a illā shifā'uk, shifā'an lā yughādiru saqamā.",
    translation: "Ô Allah, Seigneur des hommes, fais disparaître le mal. Guéris, car Tu es le Guérisseur ; il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie.",
    targetCount: 3,
    source: "Sahih Al-Bukhari (5675) & Muslim (2191)",
    virtue: "Invocation par laquelle le Prophète ﷺ visitait et bénissait les personnes souffrantes."
  },

  // DOUAS CORANIQUES
  {
    id: 'rabbana_atina',
    categoryId: 'douas_coraniques',
    title: "Le bien ici-bas et dans l'au-delà (Rabbanā ātinā)",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    phonetic: "Rabbanā ātinā fī ad-dunyā ḥasanatan wa fī al-ākhirati ḥasanatan wa qinā 'adhāba an-nār.",
    translation: "Seigneur ! Accorde-nous belle part ici-bas, et belle part aussi dans l'au-delà ; et protège-nous du châtiment du Feu !",
    targetCount: 3,
    source: "Sourate Al-Baqarah (2:201)",
    virtue: "L'invocation que le Prophète ﷺ récitait le plus fréquemment, car elle réunit tout le bien des deux mondes."
  },
  {
    id: 'rabbana_la_tuzigh',
    categoryId: 'douas_coraniques',
    title: "La fermeté du cœur dans la foi",
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ",
    phonetic: "Rabbanā lā tuzigh qulūbanā ba'da idh hadaytanā wa hab lanā min ladunka raḥmah, innaka Anta Al-Wahhāb.",
    translation: "Seigneur ! Ne laisse pas dévier nos cœurs après que Tu nous as guidés ; et accorde-nous Ta miséricorde. C'est Toi, certes, le Grand Donateur !",
    targetCount: 3,
    source: "Sourate Āl 'Imrān (3:8)",
    virtue: "Imploration des enracinés dans la science pour préserver la guidée jusqu'au dernier souffle."
  },
  {
    id: 'rabbi_irhamhuma',
    categoryId: 'douas_coraniques',
    title: "Miséricorde pour les parents",
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    phonetic: "Rabbi irḥamhumā kamā rabbayānī ṣaghīrā.",
    translation: "Ô mon Seigneur, fais-leur à tous deux miséricorde comme ils m'ont élevé tout petit.",
    targetCount: 3,
    source: "Sourate Al-Isrā' (17:24)",
    virtue: "Acte de piété filiale (Birr Al-Wālidayn) dont la récompense profite aux parents vivants comme défunts."
  }
];
