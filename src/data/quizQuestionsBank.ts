import { QuizQuestion } from '../types';

export const COMPREHENSIVE_QUIZ_BANK: QuizQuestion[] = [
  // ==========================================
  // NIVEAU 1 : DÉBUTANT (FACILE) - 35 QUESTIONS
  // ==========================================
  {
    id: 'beg_quran_1',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien de sourates compte le Saint Coran au total ?",
    options: ["114 sourates", "110 sourates", "120 sourates", "99 sourates"],
    correctIndex: 0,
    explanation: "Le Saint Coran comprend exactement 114 sourates, de la première sourate Al-Fatiha (L'Ouverture) jusqu'à la 114ème sourate An-Nas (Les Hommes).",
    source: "Structure coranique"
  },
  {
    id: 'beg_quran_2',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Par l'intermédiaire de quel ange le Coran a-t-il été révélé au Prophète Muhammad ﷺ ?",
    options: ["L'ange Mika'il (Michel)", "L'ange Israfil", "L'ange Jibril (Gabriel)", "L'ange Malik"],
    correctIndex: 2,
    explanation: "C'est l'archange Jibril (Gabriel), l'Esprit digne de confiance, qui a transmis la parole divine directement au Prophète Muhammad ﷺ.",
    source: "Coran (26:192-194)"
  },
  {
    id: 'beg_quran_3',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quelle est la toute première sourate dans l'ordre du Coran ?",
    options: ["Al-Baqarah", "Al-Fatiha", "Al-Ikhlas", "An-Nas"],
    correctIndex: 1,
    explanation: "La sourate Al-Fatiha (L'Ouverture) est la première sourate du Coran et la Mère du Livre.",
    source: "Coran, Sourate 1"
  },
  {
    id: 'beg_quran_4',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quelle est la sourate la plus courte du Noble Coran ?",
    options: ["Al-Ikhlas", "Al-Kawthar", "An-Nasr", "Al-Asr"],
    correctIndex: 1,
    explanation: "La sourate Al-Kawthar (L'Abondance, sourate 108) est la plus brève, ne comptant que 3 courts versets et 10 mots.",
    source: "Coran, Sourate 108"
  },
  {
    id: 'beg_quran_5',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quelle sourate équivaut au tiers du Coran par son contenu théologique selon le Prophète ﷺ ?",
    options: ["Al-Fatiha", "Al-Ikhlas", "Al-Falaq", "Ayat Al-Kursi"],
    correctIndex: 1,
    explanation: "La sourate Al-Ikhlas (Le Monothéisme pur) équivaut au tiers du Coran car elle est entièrement consacrée à l'Unicité exclusive d'Allah.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'beg_quran_6',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "En quelle langue le Noble Coran a-t-il été révélé ?",
    options: ["En hébreu", "En araméen", "En langue arabe claire", "En persan"],
    correctIndex: 2,
    explanation: "Le Coran a été révélé en langue arabe pure et éloquente (Lisanan 'Arabiyyan Mubinan).",
    source: "Coran (12:2)"
  },
  {
    id: 'beg_quran_7',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quel est le premier mot révélé au Prophète Muhammad ﷺ dans la grotte de Hira ?",
    options: ["Qoul (Dis)", "Iqra (Lis !)", "Al-Hamd (Louange)", "Bismillah"],
    correctIndex: 1,
    explanation: "Le premier ordre divin révélé par l'archange Jibril fut « Iqra ! » (Lis !) au début de la sourate Al-'Alaq.",
    source: "Coran (96:1)"
  },
  {
    id: 'beg_prayer_1',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien de prières obligatoires un musulman accomplit-il chaque jour ?",
    options: ["3 prières", "5 prières", "7 prières", "2 prières"],
    correctIndex: 1,
    explanation: "L'Islam prescrit cinq prières quotidiennes : Fajr, Dhuhr, Asr, Maghrib et Isha.",
    source: "Hadith de l'Ascension nocturne (Al-Mi'raj)"
  },
  {
    id: 'beg_prayer_2',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien d'unités (Rak'at) comporte la prière de l'Aube (Al-Fajr) ?",
    options: ["2 unités", "3 unités", "4 unités", "1 unité"],
    correctIndex: 0,
    explanation: "La prière obligatoire du Fajr comporte 2 unités accomplies à voix haute.",
    source: "Fiqh de la Salat"
  },
  {
    id: 'beg_prayer_3',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien d'unités (Rak'at) compte la prière du coucher du soleil (Al-Maghrib) ?",
    options: ["2 unités", "3 unités", "4 unités", "5 unités"],
    correctIndex: 1,
    explanation: "La prière du Maghrib est la seule prière obligatoire composée de 3 unités.",
    source: "Fiqh de la Salat"
  },
  {
    id: 'beg_prayer_4',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que dit-on pour marquer le début sacré de la prière (Takbirat Al-Ihram) ?",
    options: ["SubhanAllah", "Alhamdulillah", "Allahu Akbar", "La ilaha illa Allah"],
    correctIndex: 2,
    explanation: "On lève les mains et on prononce solennellement « Allahu Akbar » (Allah est le Plus Grand).",
    source: "Fiqh de la Salat"
  },
  {
    id: 'beg_prayer_5',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que récite-t-on trois fois lors de la prosternation au sol (Sujud) ?",
    options: ["Subhana Rabbiya al-A'la", "Subhana Rabbiya al-'Adhim", "Rabbana wa laka al-hamd", "Astaghfirullah"],
    correctIndex: 0,
    explanation: "Dans le Sujud, on glorifie le Très-Haut en disant « Subhana Rabbiya al-A'la » (Gloire à mon Seigneur le Très-Haut).",
    source: "Hadith Muslim"
  },
  {
    id: 'beg_prayer_6',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que récite-t-on lors de l'inclinaison (Ruku') ?",
    options: ["Subhana Rabbiya al-'Adhim", "Subhana Rabbiya al-A'la", "Sami' Allahu liman hamidah", "Allahu Akbar"],
    correctIndex: 0,
    explanation: "Lors de l'inclinaison, on glorifie l'Immense en disant « Subhana Rabbiya al-'Adhim ».",
    source: "Hadith Abu Dawud"
  },
  {
    id: 'beg_prayer_7',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Vers quelle direction doit-on obligatoirement s'orienter pour prier ?",
    options: ["Vers Jérusalem", "Vers la Kaaba à La Mecque (la Qibla)", "Vers le lever du soleil", "Vers Médine"],
    correctIndex: 1,
    explanation: "La Qibla est orientée vers la sainte Kaaba située à La Mecque.",
    source: "Coran (2:144)"
  },
  {
    id: 'beg_prayer_8',
    category: 'prayer',
    type: 'order-steps',
    difficulty: 'facile',
    question: "Remettez dans l'ordre les 4 gestes fondamentaux d'une unité de prière (Rak'at) :",
    orderItems: [
      { id: 'm1', text: "Réciter la Fatiha debout (Qiyam)", correctPos: 1 },
      { id: 'm2', text: "L'inclinaison (Ruku')", correctPos: 2 },
      { id: 'm3', text: "Le redressement debout (I'tidal)", correctPos: 3 },
      { id: 'm4', text: "La prosternation au sol (Sujud)", correctPos: 4 }
    ],
    explanation: "L'ordre strict est : récitation debout -> inclinaison -> redressement -> prosternation.",
    source: "Hadith de la prière"
  },
  {
    id: 'beg_wudu_1',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Par quelle formule commence-t-on les ablutions (Al-Wudu) ?",
    options: ["Alhamdulillah", "Bismillah (Au nom d'Allah)", "Allahu Akbar", "SubhanAllah"],
    correctIndex: 1,
    explanation: "Il est de tradition prophétique de commencer ses ablutions en mentionnant le Nom d'Allah par 'Bismillah'.",
    source: "Sunnah prophétique"
  },
  {
    id: 'beg_wudu_2',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien de fois est-il recommandé de laver chaque membre lors des ablutions ?",
    options: ["1 fois obligatoirement, 3 fois selon la Sunnah", "5 fois", "7 fois", "10 fois"],
    correctIndex: 0,
    explanation: "Laver une fois chaque membre est obligatoire, mais répéter 3 fois est la Sunnah préférée du Messager ﷺ.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'beg_pillars_1',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien de piliers fondamentaux compte l'Islam ?",
    options: ["4 piliers", "5 piliers", "6 piliers", "7 piliers"],
    correctIndex: 1,
    explanation: "L'Islam est bâti sur 5 piliers : Chahada, Salat, Zakat, Jeûne de Ramadan et le Pèlerinage (Hajj).",
    source: "Hadith célèbre de Jibril"
  },
  {
    id: 'beg_pillars_2',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quel est le premier pilier de l'Islam ?",
    options: ["La Prière", "L'Attestation de Foi (La Chahada)", "Le Ramadan", "La Zakat"],
    correctIndex: 1,
    explanation: "La Chahada (témoigner qu'il n'y a de divinité qu'Allah et que Muhammad est Son messager) est la porte d'entrée en Islam.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'beg_pillars_3',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Durant quel mois lunaire les musulmans accomplissent-ils le jeûne obligatoire ?",
    options: ["Le mois de Muharram", "Le mois de Ramadan", "Le mois de Rajab", "Le mois de Shawwal"],
    correctIndex: 1,
    explanation: "Le jeûne obligatoire prescrit dans le Coran a lieu durant le 9ème mois de l'hégire, le mois béni de Ramadan.",
    source: "Coran (2:185)"
  },
  {
    id: 'beg_pillars_4',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Dans quelle ville sainte se déroule le grand pèlerinage du Hajj ?",
    options: ["À Médine", "À La Mecque", "À Jérusalem", "Au Caire"],
    correctIndex: 1,
    explanation: "Le pèlerinage du Hajj se déroule exclusivement dans et autour de la ville sainte de La Mecque (Kaaba, Mina, Arafat, Muzdalifah).",
    source: "Coran (3:97)"
  },
  {
    id: 'beg_pillars_5',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Combien d'articles composent la Foi en Islam (les piliers de l'Iman) ?",
    options: ["5 articles", "6 articles", "7 articles", "3 articles"],
    correctIndex: 1,
    explanation: "Les 6 piliers de la foi sont : la foi en Allah, en Ses anges, en Ses livres, en Ses prophètes, au Jour Dernier et au Destin (bon ou mauvais).",
    source: "Hadith de Jibril (Muslim)"
  },
  {
    id: 'beg_pillars_6',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que signifie le mot 'Islam' à la racine ?",
    options: ["La soumission paisible à Dieu et la paix", "La guerre sainte", "La méditation solitaire", "La tradition ancestrale"],
    correctIndex: 0,
    explanation: "Le mot Islam dérive de la racine s-l-m exprimant la paix (Salam), la pureté et la soumission consentante à la volonté du Créateur.",
    source: "Linguistique arabe"
  },
  {
    id: 'beg_prophets_1',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Qui est le premier être humain et premier prophète créé par Allah ?",
    options: ["Le Prophète Noé (Nuh)", "Le Prophète Adam", "Le Prophète Abraham (Ibrahim)", "Le Prophète Moïse (Moussa)"],
    correctIndex: 1,
    explanation: "Adam (sur lui la paix) est le père de l'humanité et le premier des prophètes créés par Allah.",
    source: "Coran (2:30-34)"
  },
  {
    id: 'beg_prophets_2',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Qui est le dernier des prophètes et messagers (le Sceau des Prophètes) ?",
    options: ["Le Prophète Jésus ('Issa)", "Le Prophète Muhammad ﷺ", "Le Prophète Jean (Yahya)", "Le Prophète David (Daoud)"],
    correctIndex: 1,
    explanation: "Muhammad ﷺ est le dernier prophète envoyé pour l'humanité entière, scellant la prophétie.",
    source: "Coran (33:40)"
  },
  {
    id: 'beg_prophets_3',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quel prophète a construit l'Arche pour sauver les croyants du Déluge ?",
    options: ["Le Prophète Houd", "Le Prophète Noé (Nūh)", "Le Prophète Salih", "Le Prophète Lot"],
    correctIndex: 1,
    explanation: "Le Prophète Nuh (Noé) a construit l'Arche sur ordre divin pour préserver les croyants et les couples d'animaux.",
    source: "Coran, Sourate Houd"
  },
  {
    id: 'beg_prophets_4',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quel prophète est surnommé 'Khalil Allah' (l'Ami intime d'Allah) et père des croyants ?",
    options: ["Le Prophète Moïse", "Le Prophète Ibrahim (Abraham)", "Le Prophète Joseph (Youssef)", "Le Prophète Salomon (Souleyman)"],
    correctIndex: 1,
    explanation: "Le Prophète Ibrahim est qualifié de Khaliloullah (l'Ami privilégié d'Allah) dans le Coran.",
    source: "Coran (4:125)"
  },
  {
    id: 'beg_prophets_5',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Dans quelle ville le Prophète Muhammad ﷺ est-il né ?",
    options: ["À Médine", "À La Mecque", "À Jérusalem", "À Ta'if"],
    correctIndex: 1,
    explanation: "Le Prophète Muhammad ﷺ est né à La Mecque en l'an 570 de l'ère chrétienne (l'année de l'Éléphant).",
    source: "Histoire prophétique (Sîrah)"
  },
  {
    id: 'beg_general_1',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quelle est la salutation de paix traditionnelle des musulmans ?",
    options: ["Bonjour", "As-Salāmu 'Alaykum (Que la paix soit sur vous)", "Marhaban", "Ahlan wa Sahlan"],
    correctIndex: 1,
    explanation: "La salutation islamique enseignée par le Prophète ﷺ est « As-Salāmu 'Alaykum wa Rahmatullāhi wa Barakātuh ».",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'beg_general_2',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que dit un musulman après avoir terminé un repas ou reçu un bienfait ?",
    options: ["Astaghfirullah", "Al-Hamdulillāh (Louange à Allah)", "Allahu Akbar", "SubhanAllah"],
    correctIndex: 1,
    explanation: "Dire 'Al-Hamdulillāh' exprime la reconnaissance et la gratitude envers le Dispensateur de tout bien.",
    source: "Sunnah prophétique"
  },
  {
    id: 'beg_general_3',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que signifie la formule 'In shā' Allāh' ?",
    options: ["Si Allah le veut", "Grâce à Allah", "Pardonne-moi Allah", "Allah est grand"],
    correctIndex: 0,
    explanation: "« In shā' Allāh » signifie 'Si Allah le veut', rappelant que tout projet futur dépend de la volonté divine.",
    source: "Coran (18:23-24)"
  },
  {
    id: 'beg_general_4',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Quel jour de la semaine est considéré comme le jour de fête hebdomadaire en Islam où a lieu la prière en assemblée ?",
    options: ["Le Samedi", "Le Dimanche", "Le Vendredi (Yawm Al-Jumu'ah)", "Le Lundi"],
    correctIndex: 2,
    explanation: "Le vendredi est le maître des jours de la semaine, honoré par la prière communautaire de la Jumu'ah.",
    source: "Hadith Muslim"
  },
  {
    id: 'beg_general_5',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Qu'est-ce que la Kaaba ?",
    options: [
      "Le tombeau du Prophète",
      "La Maison sacrée d'Allah vers laquelle les musulmans prient",
      "Une montagne sacrée",
      "Un palais historique"
    ],
    correctIndex: 1,
    explanation: "La Kaaba est la Maison sacrée bâtie par Ibrahim et son fils Ismaïl, symbole de l'Unicité divine.",
    source: "Coran (2:127)"
  },
  {
    id: 'beg_general_6',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Avec quelle main est-il de tradition prophétique de manger et de boire ?",
    options: ["La main gauche", "La main droite", "Les deux mains indifféremment", "Cela n'a pas d'importance"],
    correctIndex: 1,
    explanation: "Le Prophète ﷺ a recommandé de manger avec la main droite et de mentionner le nom d'Allah.",
    source: "Hadith Muslim"
  },
  {
    id: 'beg_general_7',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'facile',
    question: "Que demande un croyant lorsqu'il prononce 'Astaghfirullah' ?",
    options: ["La richesse", "Le pardon d'Allah pour ses péchés", "La santé", "Le succès matériel"],
    correctIndex: 1,
    explanation: "« Astaghfirullah » signifie 'J'implore le pardon d'Allah', formule de repentance et de purification.",
    source: "Sunnah prophétique"
  },

  // ===============================================
  // NIVEAU 2 : INTERMÉDIAIRE (MOYEN) - 35 QUESTIONS
  // ===============================================
  {
    id: 'med_quran_1',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Sur combien d'années s'est étendue la révélation du Coran ?",
    options: ["10 ans", "23 ans", "40 ans", "15 ans"],
    correctIndex: 1,
    explanation: "La révélation a duré environ 23 années : 13 ans à La Mecque et 10 ans à Médine.",
    source: "Histoire du Coran"
  },
  {
    id: 'med_quran_2',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle est la seule sourate du Coran qui ne commence pas par la 'Basmalah' ?",
    options: ["Sourate At-Tawbah (Le Repentir)", "Sourate Al-Kahf", "Sourate Maryam", "Sourate Ya-Sin"],
    correctIndex: 0,
    explanation: "La sourate At-Tawbah (sourate 9) ne comporte pas la Basmalah car elle débute par un décret de rupture envers les transgresseurs de pactes.",
    source: "Tafsir coranique"
  },
  {
    id: 'med_quran_3',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle est la sourate la plus longue du Saint Coran ?",
    options: ["Sourate Al-Imran", "Sourate Al-Baqarah (La Vache)", "Sourate An-Nisa", "Sourate Al-Ma'idah"],
    correctIndex: 1,
    explanation: "Sourate Al-Baqarah est la plus longue avec 286 versets et près de deux Juz et demi.",
    source: "Coran, Sourate 2"
  },
  {
    id: 'med_quran_4',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel verset est qualifié par le Prophète ﷺ de 'plus éminent verset du Coran' ?",
    options: ["Ayat An-Nour (Le Verset de la Lumière)", "Ayat Al-Kursi (Le Verset du Trône)", "Le dernier verset d'Al-Baqarah", "Le 1er verset d'Al-Fatiha"],
    correctIndex: 1,
    explanation: "Ayat Al-Kursi (Sourate 2, verset 255) expose de façon inégalée la souveraineté, la vie éternelle et la science infinie d'Allah.",
    source: "Hadith Muslim"
  },
  {
    id: 'med_quran_5',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Combien de parties (Juz) compte le Coran pour faciliter sa récitation mensuelle ?",
    options: ["20 Juz", "30 Juz", "40 Juz", "60 Juz"],
    correctIndex: 1,
    explanation: "Le Coran est divisé en 30 Juz d'égale longueur (et chaque Juz en 2 Hizb, soit 60 Hizb au total).",
    source: "Sciences du Coran"
  },
  {
    id: 'med_quran_6',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle sourate est recommandée à la lecture chaque vendredi pour illuminer la semaine du croyant ?",
    options: ["Sourate Ya-Sin", "Sourate Al-Kahf (La Caverne)", "Sourate Al-Mulk", "Sourate Al-Waqi'ah"],
    correctIndex: 1,
    explanation: "Le Prophète ﷺ a enseigné que celui qui lit la sourate Al-Kahf le vendredi bénéficie d'une lumière jusqu'au vendredi suivant.",
    source: "Hadith Al-Hakim & Al-Bayhaqi"
  },
  {
    id: 'med_quran_7',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle est la principale distinction thématique des sourates Mecquoises (Makkiyyah) ?",
    options: [
      "Les traités de paix et les lois successorales",
      "L'Unicité divine (Tawhid), la Résurrection et la purification du cœur",
      "L'organisation de l'armée et du trésor public",
      "Les détails précis du jeûne et du pèlerinage"
    ],
    correctIndex: 1,
    explanation: "Les sourates révélées avant l'Hégire à La Mecque posent les fondations de la foi, la certitude du Jour Dernier et la morale.",
    source: "Sciences du Coran ('Ulum Al-Qur'an)"
  },
  {
    id: 'med_prayer_1',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Combien d'appuis corporels (membres) doivent obligatoirement toucher le sol lors de la prosternation (Sujud) ?",
    options: ["5 membres", "6 membres", "7 membres", "8 membres"],
    correctIndex: 2,
    explanation: "Le Prophète ﷺ a dit : « Il m'a été ordonné de me prosterner sur 7 membres : le front et le nez, les deux paumes, les deux genoux et les orteils des deux pieds. »",
    source: "Hadith Al-Bukhari & Muslim"
  },
  {
    id: 'med_prayer_2',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelles sont les prières accomplies à voix haute (Salat Al-Jahr) pour l'imam ou le fidèle seul ?",
    options: ["Dhuhr et Asr", "Fajr, Maghrib et Isha", "Uniquement la prière de l'Isha", "Toutes les 5 prières"],
    correctIndex: 1,
    explanation: "Fajr (les 2 rakat), Maghrib (les 2 premières rakat) et Isha (les 2 premières rakat) se récitent à voix haute.",
    source: "Fiqh de la Salat"
  },
  {
    id: 'med_prayer_3',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Que doit faire un fidèle s'il a oublié s'il a prié 3 ou 4 unités dans une prière à 4 rakat ?",
    options: [
      "Tout recommencer depuis le début",
      "Se baser sur la certitude (donc 3 rakat), compléter la 4ème, puis faire deux prosternations de distraction (Sujud As-Sahw)",
      "Arrêter la prière et attendre la suivante",
      "Considérer qu'il a fait 4 et saluer"
    ],
    correctIndex: 1,
    explanation: "La règle juridique prophétique est de repousser le doute et de bâtir sur la certitude (le nombre minimal), puis d'effectuer le Sujud As-Sahw.",
    source: "Hadith Muslim"
  },
  {
    id: 'med_prayer_4',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel nom porte la prière nocturne facultative accomplie en groupe durant les nuits de Ramadan ?",
    options: ["Salat Al-Istikhara", "Salat At-Tarawih", "Salat Al-Kousouf", "Salat Al-Janaza"],
    correctIndex: 1,
    explanation: "La prière de Tarawih est la prière nocturne spécifique qui embellit les nuits du mois béni de Ramadan.",
    source: "Fiqh de la Salat"
  },
  {
    id: 'med_prayer_5',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Laquelle des actions suivantes annule les ablutions ?",
    options: ["Manger des fruits ou boire de l'eau", "Le sommeil profond allongé", "Sourire ou rire discrètement", "Se couper les ongles"],
    correctIndex: 1,
    explanation: "Le sommeil lourd et allongé qui fait perdre la sensation de son corps annule le Wudu selon l'unanimité des savants.",
    source: "Jurisprudence des ablutions"
  },
  {
    id: 'med_prayer_6',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Comment s'appelle l'ablution sèche de substitution avec de la terre pure en cas d'absence d'eau ou de maladie empêchant son contact ?",
    options: ["Al-Ghusl", "At-Tayammum", "Al-Istinja", "Al-Wudu"],
    correctIndex: 1,
    explanation: "Le Tayammum est la purification sèche légiférée par Allah en cas d'empêchement médical ou de pénurie d'eau.",
    source: "Coran (4:43)"
  },
  {
    id: 'med_prayer_7',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel est le nom de la prière de consultation accomplie pour solliciter la guidance divine avant un choix important ?",
    options: ["Salat Al-Hajah", "Salat Al-Istikhara", "Salat At-Tawbah", "Salat Al-Khawf"],
    correctIndex: 1,
    explanation: "Salat Al-Istikhara est la prière prophétique de consultation par laquelle on remet son choix entre les Mains sages d'Allah.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'med_pillars_1',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel est le taux légal usuel de la Zakat Al-Maal prélevé sur l'épargne stagnante au-delà du seuil (Nisab) après une année hégirienne ?",
    options: ["10%", "5%", "2,5% (soit 1/40ème)", "1%"],
    correctIndex: 2,
    explanation: "Le taux obligatoire de la Zakat sur l'argent et l'or est de 2,5% après possession du Nisab pendant une année complète.",
    source: "Règles de la Zakat"
  },
  {
    id: 'med_pillars_2',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel jour du mois de Dhoul Hijja a lieu la station sur le Mont Arafat, sommet sans lequel le Hajj n'est pas valide ?",
    options: ["Le 1er jour", "Le 8ème jour (Tarwiyah)", "Le 9ème jour de Dhoul Hijja", "Le 10ème jour (Aïd)"],
    correctIndex: 2,
    explanation: "Le Prophète ﷺ a proclamé : « Le Hajj, c'est Arafat ! » La station a lieu le 9 Dhoul Hijja.",
    source: "Hadith At-Tirmidhi"
  },
  {
    id: 'med_pillars_3',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Combien de tours rituels (Tawaf) accomplit-on autour de la Kaaba lors du pèlerinage ?",
    options: ["3 tours", "5 tours", "7 tours complets", "10 tours"],
    correctIndex: 2,
    explanation: "Le Tawaf autour de la Kaaba, tout comme le Sa'y entre Safa et Marwa, est composé de 7 tours complets.",
    source: "Rites du Hajj"
  },
  {
    id: 'med_pillars_4',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle aumône spécifique doit être versée avant la prière de l'Aïd Al-Fitr pour purifier le jeûne de Ramadan ?",
    options: ["Zakat Al-Maal", "Zakat Al-Fitr", "La Sadaqah continue", "Le Waqf"],
    correctIndex: 1,
    explanation: "Zakat Al-Fitr est obligatoire pour chaque membre du foyer afin que les personnes démunies puissent fêter l'Aïd dignement.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'med_pillars_5',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Que sont les 'Anges scribes honorables' (Kiraman Katibin) chargés de faire ?",
    options: [
      "Transporter le Trône",
      "Consigner scrupuleusement les bonnes et mauvaises actions de chaque être humain",
      "Faire souffler les vents",
      "Garder les portes de l'Enfer"
    ],
    correctIndex: 1,
    explanation: "Deux anges accompagnent chaque être humain : l'un à droite consigne les bonnes œuvres, l'autre à gauche consigne les péchés.",
    source: "Coran (82:10-12)"
  },
  {
    id: 'med_pillars_6',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel ange sera chargé de souffler dans la Trompe (As-Sour) pour annoncer la Résurrection finale ?",
    options: ["L'ange Mika'il", "L'ange Israfil", "L'ange Ridwan", "L'ange Malik"],
    correctIndex: 1,
    explanation: "L'ange Israfil est chargé de souffler dans le Cor sacré lors du cataclysme de l'Heure puis de la résurrection.",
    source: "Hadith At-Tirmidhi"
  },
  {
    id: 'med_pillars_7',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Comment s'appelle le Livre saint révélé au Prophète Daoud (David) sur lui la paix ?",
    options: ["La Thora (Tawrat)", "L'Évangile (Injeel)", "Les Psaumes (Zabur)", "Les Feuillets d'Ibrahim"],
    correctIndex: 2,
    explanation: "Le Coran mentionne expressément : « Et Nous avons donné à David le Zabour (les Psaumes). »",
    source: "Coran (17:55)"
  },
  {
    id: 'med_prophets_1',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel prophète a parlé dès le berceau pour défendre la pureté de sa mère et annoncer son statut de serviteur d'Allah ?",
    options: ["Le Prophète Yahya (Jean)", "Le Prophète 'Issa (Jésus)", "Le Prophète Moussa (Moïse)", "Le Prophète Youssef (Joseph)"],
    correctIndex: 1,
    explanation: "Le Prophète 'Issa fils de Maryam a parlé au berceau en disant : « Je suis en vérité le serviteur d'Allah. Il m'a donné le Livre et m'a désigné prophète. »",
    source: "Coran (19:30)"
  },
  {
    id: 'med_prophets_2',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel prophète a été avalé par un grand poisson (la baleine) après avoir quitté son peuple dans la précipitation ?",
    options: ["Le Prophète Ayyub (Job)", "Le Prophète Younous (Jonas)", "Le Prophète Zacharie", "Le Prophète Élie (Ilyas)"],
    correctIndex: 1,
    explanation: "Younous a invoqué Allah dans les ténèbres du ventre du poisson avec l'invocation mémorable : « Lā ilāha illā Anta, Subhānak, innī kuntu mina az-zālimīn ».",
    source: "Coran (21:87)"
  },
  {
    id: 'med_prophets_3',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel prophète est resté célèbre pour son immense patience (As-Sabr) face à une longue maladie et à la perte de ses biens ?",
    options: ["Le Prophète Ayyub (Job)", "Le Prophète Yacoub (Jacob)", "Le Prophète Chou'ayb", "Le Prophète Haroun"],
    correctIndex: 0,
    explanation: "Le Prophète Ayyub est le modèle absolu de la patience inébranlable et de la confiance en Allah dans l'adversité.",
    source: "Coran (21:83-84)"
  },
  {
    id: 'med_prophets_4',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "À quel prophète Allah a-t-Il soumis le vent et enseigné le langage des animaux et des oiseaux ?",
    options: ["Le Prophète David (Daoud)", "Le Prophète Salomon (Souleyman)", "Le Prophète Joseph", "Le Prophète Moïse"],
    correctIndex: 1,
    explanation: "Souleyman (Salomon) a reçu un royaume sans pareil et comprenait le langage des fourmis et de la huppe.",
    source: "Coran (27:16-19)"
  },
  {
    id: 'med_prophets_5',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Qui fut la première personne à embrasser l'Islam et à soutenir le Prophète Muhammad ﷺ lors de la première révélation ?",
    options: ["Abou Bakr As-Siddiq", "Son épouse Khadijah bint Khuwaylid", "Ali ibn Abi Talib", "Zayd ibn Harithah"],
    correctIndex: 1,
    explanation: "Khadijah (qu'Allah l'agrée) fut la première croyante, rassurant le Prophète à son retour tremblant de la grotte de Hira.",
    source: "Sîrah prophétique"
  },
  {
    id: 'med_prophets_6',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "En quelle année de l'ère chrétienne a eu lieu l'Hégire (migration du Prophète de La Mecque vers Médine), point de départ du calendrier musulman ?",
    options: ["En 610", "En 622", "En 632", "En 570"],
    correctIndex: 1,
    explanation: "L'Hégire a eu lieu en l'an 622, marquant la naissance de la communauté et l'an 1 du calendrier hégirien.",
    source: "Histoire islamique"
  },
  {
    id: 'med_general_1',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle nuit sacrée durant les dix dernières nuits de Ramadan est qualifiée dans le Coran de 'meilleure que mille mois' ?",
    options: ["La nuit de la mi-Cha'ban", "La Nuit du Destin (Laylat Al-Qadr)", "La nuit du doute", "La nuit de l'Ascension"],
    correctIndex: 1,
    explanation: "Laylat Al-Qadr (la Nuit du Destin) vaut plus que 83 années et 4 mois d'adoration continue.",
    source: "Coran, Sourate Al-Qadr (97:3)"
  },
  {
    id: 'med_general_2',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quelle invocation le Prophète ﷺ a-t-il enseignée pour clôturer le Tasbih après chaque prière (33x SubhanAllah, 33x Alhamdulillah, 33x Allahu Akbar) ?",
    options: [
      "Astaghfirullah wa atubu ilayh",
      "Lā ilāha illā Allāhu wahdahu lā sharīka lah, lahu al-mulku wa lahu al-hamd, wa huwa 'alā kulli shay'in qadīr",
      "Rabbana atina fid-dunya hasanah",
      "Subhana Rabbika Rabbi al-'izzati 'amma yasifun"
    ],
    correctIndex: 1,
    explanation: "Cette formule scelle le centenaire des invocations post-prière et pardonne les péchés même nombreux comme l'écume des mers.",
    source: "Hadith Muslim"
  },
  {
    id: 'med_general_3',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel calife bien-guidé a entrepris la compilation officielle et l'unification des exemplaires écrits du Coran (le Mushaf d'Othman) ?",
    options: ["Le Calife Abou Bakr As-Siddiq", "Le Calife Omar ibn Al-Khattab", "Le Calife Othman ibn Affan", "Le Calife Ali ibn Abi Talib"],
    correctIndex: 2,
    explanation: "Othman ibn Affan a fait recopier et envoyer les exemplaires unifiés du Coran dans les métropoles musulmanes pour préserver la récitation.",
    source: "Histoire du Coran"
  },
  {
    id: 'med_general_4',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Que signifie l'éthique de la 'Sadaqah Jariyah' (aumône continue) en Islam ?",
    options: [
      "Une aumône dont la récompense spirituelle perdure auprès d'Allah même après la mort de la personne (ex: puits d'eau, école, arbre planté)",
      "Une aumône que l'on verse chaque semaine",
      "Une aumône obligatoire imposée par l'État",
      "Une aumône donnée uniquement en secret"
    ],
    correctIndex: 0,
    explanation: "« Quand le fils d'Adam meurt, ses actions s'arrêtent sauf trois : une aumône continue, une science utile ou un enfant pieux qui prie pour lui. »",
    source: "Hadith Muslim"
  },
  {
    id: 'med_general_5',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'moyen',
    question: "Quel compagnon du Prophète ﷺ fut le tout premier muezzin de l'Islam réputé pour sa voix magnifique et sa foi inébranlable ?",
    options: ["Salman Al-Farsi", "Bilal ibn Rabah", "Abou Dhar Al-Ghifari", "Ammar ibn Yassir"],
    correctIndex: 1,
    explanation: "Bilal (qu'Allah l'agrée), affranchi par Abou Bakr après avoir enduré les tortures sous le cri de « Ahad ! Ahad ! », fut choisi comme premier muezzin.",
    source: "Sîrah prophétique"
  },

  // ============================================
  // NIVEAU 3 : AVANCÉ (EXPERT) - 35 QUESTIONS
  // ============================================
  {
    id: 'adv_quran_1',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Dans les sciences du Tajweed, combien existe-t-il de lettres pour la règle de l'Izhār Halqi (prononciation claire du Nūn Sakinah sans nasalisation) ?",
    options: ["4 lettres", "6 lettres de la gorge (أ، هـ، ع، ح، غ، خ)", "8 lettres", "15 lettres"],
    correctIndex: 1,
    explanation: "Les 6 lettres de l'Izhar sont les gutturales issues de la gorge : Hamza, Haa, 'Ayn, Haa, Ghayn et Khaa.",
    source: "Traité Al-Jazariyyah"
  },
  {
    id: 'adv_quran_2',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle est la règle de Tajweed appliquée lorsque le Nūn Sakinah ou Tanwīn est suivi de la lettre Bā' (ب) ?",
    options: ["L'Idgham (assimilation)", "L'Iqlāb (transformation du son en Mīm avec ghunnah)", "L'Ikhfā (dissimulation)", "La Qalqalah"],
    correctIndex: 1,
    explanation: "L'Iqlab transforme le Nūn en un Mīm nasal doux lorsqu'il rencontre la lettre Bā' (comme dans « Mim-ba'd » au lieu de « Min ba'd »).",
    source: "Règles du Tajweed"
  },
  {
    id: 'adv_quran_3',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Combien de prosternations de récitation (Sujūd At-Tilāwah) compte le texte coranique ?",
    options: ["10 prosternations", "14 ou 15 prosternations selon les écoles", "7 prosternations", "30 prosternations"],
    correctIndex: 1,
    explanation: "Le Coran compte 14 à 15 versets où il est fortement recommandé de se prosterner en les récitant ou en les écoutant.",
    source: "Sciences coraniques"
  },
  {
    id: 'adv_quran_4',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Dans quelle sourate trouve-t-on deux fois la mention de la formule complète 'Bismillah ar-Rahman ar-Rahim' ?",
    options: ["Sourate Al-Baqarah", "Sourate An-Naml (Les Fourmis, verset 30)", "Sourate Maryam", "Sourate Al-Isra"],
    correctIndex: 1,
    explanation: "Sourate An-Naml comporte la Basmalah au début, ainsi qu'au verset 30 dans la lettre du prophète Souleyman à la reine de Saba.",
    source: "Coran (27:30)"
  },
  {
    id: 'adv_quran_5',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle sourate est surnommée 'Le Cœur du Coran' (Qalb Al-Qur'an) dans la tradition musulmane ?",
    options: ["Sourate Ar-Rahman", "Sourate Ya-Sin", "Sourate Al-Fatiha", "Sourate Al-Hadid"],
    correctIndex: 1,
    explanation: "La sourate Ya-Sin est traditionnellement surnommée le Cœur du Coran en raison de sa profondeur spirituelle et de son rappel du Jour du Jugement.",
    source: "Hadith At-Tirmidhi"
  },
  {
    id: 'adv_quran_6',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Combien de lettres arabes font partie de la règle de l'Ikhfā Haqīqī (l'atténuation nasale du Nūn Sakinah) ?",
    options: ["6 lettres", "10 lettres", "15 lettres", "12 lettres"],
    correctIndex: 2,
    explanation: "L'Ikhfā compte 15 lettres récapitulées dans les initiales du célèbre poème : « Sif dhā thanā kam jāda shakhsun... ».",
    source: "Tuhfat Al-Atfal"
  },
  {
    id: 'adv_quran_7',
    category: 'quran',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel compagnon illustre a été désigné par Abou Bakr et Othman pour diriger le comité de compilation du Coran ?",
    options: ["Zayd ibn Thabit (qu'Allah l'agrée)", "Abdullah ibn Mas'oud", "Ubayy ibn Ka'b", "Mu'adh ibn Jabal"],
    correctIndex: 0,
    explanation: "Zayd ibn Thabit, jeune scribe du Prophète doté d'une rigueur absolue et d'une mémoire sans faille, a dirigé la recension du Mushaf.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'adv_prayer_1',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle est la différence fondamentale entre un Pilier (Rukn) de la prière et une Obligation (Wajib) selon l'école hanbalite ?",
    options: [
      "Il n'y a aucune différence, les deux termes sont synonymes",
      "L'omission d'un Pilier rend la prière invalide s'il n'est pas rattrapé, tandis que l'oubli involontaire d'un Wajib est compensé par le Sujud As-Sahw",
      "Le Pilier est facultatif et le Wajib est obligatoire",
      "Les Piliers s'appliquent seulement aux hommes"
    ],
    correctIndex: 1,
    explanation: "Un pilier (comme la Fatiha ou le Ruku) ne peut être effacé par la seule prosternation d'oubli : il faut obligatoirement l'accomplir.",
    source: "Usul Al-Fiqh"
  },
  {
    id: 'adv_prayer_2',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Que désigne la 'Quiétude' (At-Tuma'nīnah) qui est un pilier indispensable de la prière ?",
    options: [
      "Prier dans le noir absolu",
      "Marquer un arrêt serein dans chaque position (inclinaison, redressement, prosternation) suffisant pour que chaque membre prenne sa place",
      "Prier les yeux totalement fermés",
      "Ne pas entendre le bruit de la rue"
    ],
    correctIndex: 1,
    explanation: "La Tuma'ninah est un pilier de la prière. Le Prophète ﷺ ordonna à l'homme qui priait avec précipitation de recommencer car sa prière n'était pas comptée.",
    source: "Hadith du mauvais prieur"
  },
  {
    id: 'adv_prayer_3',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Combien d'unités de prières surérogatoires régulières (Sunan Rawātib) sont particulièrement recommandées au fil de la journée pour construire une demeure au Paradis ?",
    options: ["8 unités", "10 unités", "12 unités par jour", "16 unités"],
    correctIndex: 2,
    explanation: "Les 12 rakat Rawatib : 2 avant Fajr, 4 avant et 2 après Dhuhr, 2 après Maghrib et 2 après Isha.",
    source: "Hadith Muslim"
  },
  {
    id: 'adv_prayer_4',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Comment s'appelle l'invocation récitée debout lors de la dernière unité de la prière du Witr ?",
    options: ["Du'a Al-Istiftah", "Du'a Al-Qunūt", "Du'a Al-Karb", "Du'a As-Safar"],
    correctIndex: 1,
    explanation: "Le Du'a Al-Qunūt est l'invocation d'humilité et de demande d'aide formulée lors du Witr ou en période d'épreuve (Nawazil).",
    source: "Sunan At-Tirmidhi"
  },
  {
    id: 'adv_prayer_5',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "En voyage, quelles prières est-il permis de raccourcir à 2 unités (Qasr) ?",
    options: ["Toutes les prières sans exception", "Les prières de 4 unités : Dhuhr, Asr et Isha", "Fajr et Maghrib", "Uniquement la prière de l'Isha"],
    correctIndex: 1,
    explanation: "Le raccourcissement du voyageur (Qasr) ne concerne que les prières de 4 rakat (Dhuhr, Asr, Isha) qui passent à 2 rakat.",
    source: "Coran (4:101)"
  },
  {
    id: 'adv_prayer_6',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Que prescrit la Sunnah si un retardataire arrive à la mosquée pendant que l'imam est déjà en inclinaison (Ruku') ?",
    options: [
      "Il doit attendre que l'imam se relève pour commencer",
      "S'il prononce le Takbir d'entrée debout puis attrape l'inclinaison avec l'imam avant son redressement, l'unité de prière (Rak'at) lui est comptabilisée",
      "L'unité est forcément perdue",
      "Il doit faire le Sujud directement"
    ],
    correctIndex: 1,
    explanation: "Rejoindre l'imam en état d'inclinaison valide la rakat selon le hadith : « Celui qui rattrape le Ruku' a rattrapé la Rak'at. »",
    source: "Hadith Abu Dawud"
  },
  {
    id: 'adv_prayer_7',
    category: 'prayer',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel nom porte la prière accomplie lors d'une éclipse solaire ou lunaire ?",
    options: ["Salat Al-Istisqa", "Salat Al-Kousoūf / Al-Khouzūf", "Salat Al-Gha'ib", "Salat Al-Awwabin"],
    correctIndex: 1,
    explanation: "Salat Al-Kousouf est la prière exceptionnelle accomplie avec de longues inclinaisons et récitations lors des éclipses célestes.",
    source: "Hadith Al-Bukhari"
  },
  {
    id: 'adv_pillars_1',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelles sont les trois branches traditionnelles de l'Unicité divine (Tawhid) selon l'analyse des savants sunnites ?",
    options: [
      "Tawhid Ar-Rububiyyah, Tawhid Al-Uluhiyyah et Tawhid Al-Asma wa As-Sifat",
      "Tawhid du passé, du présent et du futur",
      "Tawhid des anges, des hommes et de la nature",
      "Tawhid de la parole, du cœur et de l'esprit"
    ],
    correctIndex: 0,
    explanation: "L'Unicité dans la Seigneurie (Créateur unique), l'Unicité dans l'Adoration exclusive et l'Unicité dans les Noms et Attributs divins.",
    source: "Aqida Ahl As-Sunnah"
  },
  {
    id: 'adv_pillars_2',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Combien de catégories de bénéficiaires de la Zakat sont explicitement fixées dans le Coran (Sourate At-Tawbah, verset 60) ?",
    options: ["5 catégories", "8 catégories précises", "10 catégories", "Toute personne qui en fait la demande"],
    correctIndex: 1,
    explanation: "Les 8 catégories sont : les pauvres, les indigents, les collecteurs, ceux dont les cœurs sont à rallier, l'affranchissement, les endettés, la cause d'Allah et le voyageur démuni.",
    source: "Coran (9:60)"
  },
  {
    id: 'adv_pillars_3',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quels sont les quatre degrés de la croyance au Destin (Al-Qadr) en théologie islamique ?",
    options: [
      "La Science ('Ilm), l'Écriture (Kitabah), la Volonté (Mashi'ah) et la Création (Khalq)",
      "Le Bien, le Mal, le Doute et la Foi",
      "Le Passé, le Présent, le Futur et l'Éternité",
      "La Naissance, la Vie, la Mort et le Tombeau"
    ],
    correctIndex: 0,
    explanation: "La foi au destin implique de croire en la prescience éternelle d'Allah, Son inscription dans la Table Préservée, Sa volonté souveraine et Sa création de toute chose.",
    source: "Théologie islamique (Aqida)"
  },
  {
    id: 'adv_pillars_4',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Que signifie le concept d'Ihsaan (l'Excellence spirituelle) tel que décrit dans le célèbre Hadith de Jibril ?",
    options: [
      "Donner la totalité de ses biens en aumône",
      "Adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, certes Lui te voit",
      "Prier la nuit entière sans jamais dormir",
      "Jeûner tous les jours de l'année"
    ],
    correctIndex: 1,
    explanation: "L'Ihsaan est le plus haut degré spirituel : vivre avec la conscience permanente de la présence et du regard bienveillant d'Allah.",
    source: "Hadith Muslim"
  },
  {
    id: 'adv_pillars_5',
    category: 'pillars',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle est la règle juridique pour une personne incapable définitivement de jeûner en raison d'une maladie incurable ou d'un grand âge ?",
    options: [
      "Elle n'a aucune compensation à verser",
      "Elle verse une compensation nourricière (Fidyah) en nourrissant un pauvre pour chaque jour non jeûné",
      "Elle doit accomplir un pèlerinage supplémentaire",
      "Elle doit faire prier quelqu'un à sa place"
    ],
    correctIndex: 1,
    explanation: "La Fidyah consiste à nourrir un nécessiteux pour chaque jour manqué, conformément au verset 184 de la sourate Al-Baqarah.",
    source: "Coran (2:184)"
  },
  {
    id: 'adv_prophets_1',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quels sont les 5 messagers doués d'une constance et d'une fermeté suprêmes (Ouloul 'Azm mina ar-Rousoul) ?",
    options: [
      "Nuh (Noé), Ibrahim (Abraham), Moussa (Moïse), 'Issa (Jésus) et Muhammad ﷺ",
      "Adam, Idriss, Houd, Salih et Chou'ayb",
      "Youssef, Yacoub, Ishaq, Ismaïl et Daoud",
      "Zakariya, Yahya, Younous, Ayyub et Souleyman"
    ],
    correctIndex: 0,
    explanation: "Les 5 messagers de la fermeté ont enduré des épreuves colossales et sont cités ensemble dans les sourates Al-Ahzab et Ash-Shura.",
    source: "Coran (46:35)"
  },
  {
    id: 'adv_prophets_2',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel prophète a conversé directement avec Allah sans intermédiaire sur le Mont Sinaï, recevant le titre de 'Kalīmullāh' ?",
    options: ["Le Prophète Moïse (Moussa)", "Le Prophète Abraham", "Le Prophète Jésus", "Le Prophète Haroun"],
    correctIndex: 0,
    explanation: "Moussa a reçu la parole directe d'Allah sur la montagne sacrée de Tour Sinaï : « Et Allah a parlé à Moïse de vive voix. »",
    source: "Coran (4:164)"
  },
  {
    id: 'adv_prophets_3',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel miracle prophétique a sauvé le Prophète Ibrahim lorsqu'il fut jeté dans un gigantesque brasier ardent par son peuple idolâtre ?",
    options: [
      "Une pluie torrentielle a éteint le feu",
      "Allah a ordonné au feu : « Ô feu, sois pour Abraham une fraîcheur et une paix »",
      "Un ange l'a emporté dans les cieux",
      "La terre s'est ouverte sous le bûcher"
    ],
    correctIndex: 1,
    explanation: "Le feu a perdu sa nature brûlante par décret du Créateur des lois physiques : « Qulnā yā nāru kūnī bardan wa salāman 'alā Ibrāhīm ».",
    source: "Coran (21:69)"
  },
  {
    id: 'adv_prophets_4',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel compagnon et cousin du Prophète ﷺ a dormi dans le lit du Prophète la nuit de l'Hégire au péril de sa vie pour déjouer les assassins ?",
    options: ["Ali ibn Abi Talib (qu'Allah l'agrée)", "Ja'far ibn Abi Talib", "Hamza ibn Abdil-Muttalib", "Abbas ibn Abdil-Muttalib"],
    correctIndex: 0,
    explanation: "Ali s'est allongé sous le manteau du Prophète pour faire diversion et permettre à Muhammad ﷺ et Abou Bakr de quitter la ville discrètement.",
    source: "Sîrah prophétique"
  },
  {
    id: 'adv_prophets_5',
    category: 'prophets',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel traité de paix signé en l'an 6 de l'Hégire est qualifié dans le Coran de 'Victoire éclatante' (Fathan Mubina) ?",
    options: ["Le Traité d'Al-Hudaybiyyah", "Le Pacte de Médine", "Le Serment de la Ridwan", "Le Traité de Ta'if"],
    correctIndex: 0,
    explanation: "Le traité d'Al-Hudaybiyyah a permis la diffusion pacifique de l'Islam à travers toute la péninsule arabique et a ouvert la voie à la libération de La Mecque.",
    source: "Coran, Sourate Al-Fath (48:1)"
  },
  {
    id: 'adv_general_1',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel recueil de Hadiths est considéré à l'unanimité des savants sunnites comme l'ouvrage le plus authentique après le Livre d'Allah ?",
    options: [
      "Le Sahih d'Al-Bukhari",
      "Le Muwatta de l'Imam Malik",
      "Le Musnad de l'Imam Ahmad",
      "Les Sunan d'At-Tirmidhi"
    ],
    correctIndex: 0,
    explanation: "Le Sahih Al-Bukhari rassemble des traditions prophétiques vérifiées selon la méthodologie critique la plus rigoureuse de l'histoire.",
    source: "Sciences du Hadith"
  },
  {
    id: 'adv_general_2',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Qu'est-ce qu'un 'Hadith Qoudsi' ?",
    options: [
      "Un hadith récité obligatoirement dans la prière",
      "Une parole divine rapportée par le Prophète ﷺ avec ses propres mots, distincte du texte littéral du Coran",
      "Un hadith prononcé exclusivement à Jérusalem (Al-Qods)",
      "Un hadith sans chaîne de transmission"
    ],
    correctIndex: 1,
    explanation: "Dans le Hadith Qoudsi, le Prophète ﷺ rapporte les propos de son Seigneur (« Allah a dit : ... ») sans qu'il ne fasse partie du texte liturgique du Coran.",
    source: "Sciences du Hadith"
  },
  {
    id: 'adv_general_3',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Combien d'années a duré le Califat des 4 Califes bien-guidés (Abou Bakr, Omar, Othman et Ali) conformément à la prophétie prophétique ?",
    options: ["10 ans", "30 années", "50 ans", "100 ans"],
    correctIndex: 1,
    explanation: "Le Prophète ﷺ a annoncé : « Le califat après moi durera 30 ans, puis ce sera une royauté. »",
    source: "Hadith At-Tirmidhi & Abu Dawud"
  },
  {
    id: 'adv_general_4',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel est le sens juridique du terme 'Maqāsid Ash-Sharī'ah' (les Finalités suprêmes de la législation islamique) ?",
    options: [
      "L'application littérale sans réflexion",
      "La préservation des 5 nécessités vitales humaines : la Religion, la Vie, la Raison, la Lignée/Honneur et les Biens",
      "La liste des peines légales",
      "Les horaires des prières de l'année"
    ],
    correctIndex: 1,
    explanation: "L'Imam Ash-Shatibi a théorisé que toute la sagesse de la loi divine vise à protéger ces 5 piliers existentiels de la dignité humaine.",
    source: "Al-Muwafaqat d'Ash-Shatibi"
  },
  {
    id: 'adv_general_5',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle femme exemplaire est la seule femme mentionnée nommément par son prénom dans tout le Saint Coran, ayant même une sourate complète à son nom ?",
    options: ["Assiya l'épouse de Pharaon", "Maryam (Marie, mère de Jésus)", "Khadijah", "Fatima la fille du Prophète"],
    correctIndex: 1,
    explanation: "Maryam (la Vierge Marie) est la seule femme citée par son nom dans le Coran, honorée comme la meilleure des femmes de l'humanité.",
    source: "Coran, Sourates 3 et 19"
  },
  {
    id: 'adv_general_6',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quel est le nom de la montagne sur laquelle s'est immobilisée l'Arche du Prophète Noé après la décrue du Déluge selon le texte coranique ?",
    options: ["Le Mont Arafat", "Le Mont Al-Joudi", "Le Mont Sinaï", "Le Mont Ouhoud"],
    correctIndex: 1,
    explanation: "Le Coran stipule : « Et l'Arche s'est posée sur le mont Joudi, et il fut dit : Que disparaissent les gens injustes ! »",
    source: "Coran, Sourate Houd (11:44)"
  },
  {
    id: 'adv_general_7',
    category: 'general',
    type: 'multiple-choice',
    difficulty: 'avance',
    question: "Quelle vertu le Prophète Muhammad ﷺ a-t-il déclarée être sa mission primordiale sur terre : « Je n'ai été envoyé que pour... » ?",
    options: [
      "« ...amasser des trésors pour ma communauté. »",
      "« ...parfaire les nobles caractères et la moralité (Makarim Al-Akhlaq). »",
      "« ...conquérir les terres de l'Orient. »",
      "« ...écrire des poèmes. »"
    ],
    correctIndex: 1,
    explanation: "« Innamā bu'ithtu li-utammima makārima al-akhlāq » : La mission de l'Islam est de purifier et d'élever la noblesse de comportement de l'être humain.",
    source: "Hadith Al-Bukhari (Al-Adab Al-Mufrad)"
  }
];
