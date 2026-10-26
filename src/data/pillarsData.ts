import { Pillar, ImanArticle } from '../types';

export const ISLAM_PILLARS: Pillar[] = [
  {
    id: 'shahada',
    number: 1,
    title: "La Profession de Foi",
    arabicTitle: "الشهادتان",
    transliteration: "Ash-Shahadataan",
    summary: "Le témoignage qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est Son serviteur et messager.",
    details: [
      "Première partie (Lā ilāha illā Allāh) : Négation totale de toute divinité fausse, puis affirmation exclusive de l'adoration sincère pour Allah Seul.",
      "Deuxième partie (Muhammadun Rasūlullāh) : Reconnaissance de Muhammad ﷺ comme dernier prophète, le suivre avec amour, obéir à ses enseignements et délaisser ce qu'il a interdit.",
      "C'est la porte d'entrée dans l'Islam et le fondement de toutes les bonnes actions."
    ],
    wisdom: "Libérer le cœur humain de la soumission aux créatures pour le rattacher uniquement au Créateur infini.",
    dalil: {
      text: "« Sache donc qu'en vérité, il n'y a point de divinité à part Allah et implore le pardon pour ton péché... »",
      source: "Coran, Sourate Muhammad (47:19)"
    },
    color: "from-emerald-700 to-emerald-900"
  },
  {
    id: 'salat',
    number: 2,
    title: "La Prière Quotidienne",
    arabicTitle: "الصلاة",
    transliteration: "As-Salāt",
    summary: "Les cinq prières rituelles obligatoires accomplies chaque jour pour maintenir le lien intime avec le Créateur.",
    details: [
      "Pilier central et colonne vertébrale de la religion (le pilier sur lequel repose l'édifice).",
      "Rythme les moments clés de la journée : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher du soleil) et Isha (nuit).",
      "Purifie l'esprit, préserve des turpitudes et apporte la quiétude intérieure (Sakina)."
    ],
    wisdom: "Un rendez-vous d'humilité et de gratitude récurrent qui arrache l'humain au tumulte matériel et rappelle l'essentiel.",
    dalil: {
      text: "« En vérité la prière préserve de la turpitude et du blâmable. Le rappel d'Allah est certes ce qu'il y a de plus grand. »",
      source: "Coran, Sourate Al-Ankabut (29:45)"
    },
    color: "from-amber-700 to-amber-900"
  },
  {
    id: 'zakat',
    number: 3,
    title: "L'Aumône Légale Purificatrice",
    arabicTitle: "الزكاة",
    transliteration: "Az-Zakāt",
    summary: "Un pourcentage annuel précis (généralement 2,5%) prélevé sur l'épargne stagnante au-delà du seuil pour les personnes dans le besoin.",
    details: [
      "Obligation financière pour tout croyant possédant le Nisāb (seuil minimal) resté en sa possession pendant une année lunaire complète.",
      "Destinée à 8 catégories définies dans le Coran, en priorité les pauvres, les nécessiteux et les endettés.",
      "Le mot 'Zakat' signifie à la fois 'purification' et 'fructification' des biens."
    ],
    wisdom: "Éradiquer l'avarice, bâtir une fraternité économique équitable et purifier la richesse de toute souillure.",
    dalil: {
      text: "« Prélève de leurs biens une aumône par laquelle tu les purifies et les bénis... »",
      source: "Coran, Sourate At-Tawbah (9:103)"
    },
    color: "from-teal-700 to-teal-900"
  },
  {
    id: 'sawm',
    number: 4,
    title: "Le Jeûne du Mois de Ramadan",
    arabicTitle: "الصيام",
    transliteration: "As-Siyām",
    summary: "L'abstinence de nourriture, boisson et désirs de l'aube au coucher du soleil durant le 9ème mois lunaire.",
    details: [
      "Exercice spirituel obligatoire pour tout musulman pubère, sain d'esprit et en capacité physique.",
      "Accompagné d'un effort accru dans la charité, la lecture du Coran, et la maîtrise de la parole et de la colère.",
      "Des dispenses et rattrapages existent pour les malades, voyageurs, femmes enceintes ou allaitantes."
    ],
    wisdom: "Développer la piété (Taqwa), éprouver la compassion envers ceux qui souffrent de la faim et dompter l'égo (Nafs).",
    dalil: {
      text: "« Ô les croyants ! On vous a prescrit le jeûne comme on l'a prescrit à ceux d'avant vous, ainsi atteindrez-vous la piété. »",
      source: "Coran, Sourate Al-Baqarah (2:183)"
    },
    color: "from-indigo-700 to-indigo-900"
  },
  {
    id: 'hajj',
    number: 5,
    title: "Le Grand Pèlerinage à La Mecque",
    arabicTitle: "الحج",
    transliteration: "Al-Hajj",
    summary: "Le voyage spirituel accompli au moins une fois dans la vie pour qui en a les moyens physiques et financiers.",
    details: [
      "Se déroule durant le 12ème mois du calendrier hégirien (Dhoul Hijja).",
      "Rassemble des millions de fidèles de tous horizons, vêtus du même habit blanc sans couture (Ihram).",
      "Comprend des rites ancestraux liés au Prophète Ibrahim (Abraham) et Muhammad ﷺ (Tawaf, Sa'y, station au mont Arafat)."
    ],
    wisdom: "Célébrer l'égalité absolue de tous les êtres humains devant Allah, sans distinction de race, de rang social ou de richesse.",
    dalil: {
      text: "« Et c'est un devoir envers Allah pour les gens qui en ont les moyens d'accomplir le pèlerinage de la Maison. »",
      source: "Coran, Sourate Al-Imran (3:97)"
    },
    color: "from-stone-700 to-stone-900"
  }
];

export const IMAN_ARTICLES: ImanArticle[] = [
  {
    id: 'allah',
    number: 1,
    title: "La Foi en Allah",
    arabicTitle: "الإيمان بالله",
    explanation: "Croire en Son Existence, en Sa Seigneurie suprême (Rububiyya), en Son Unicité dans l'adoration (Uluhiyya) et en la perfection de Ses Noms et Attributs (Asma wa Sifat).",
    keyPoints: [
      "Il est le Créateur incréé de tout l'univers.",
      "Rien ne Lui ressemble et Il est Celui qui entend et voit tout."
    ]
  },
  {
    id: 'angels',
    number: 2,
    title: "La Foi aux Anges",
    arabicTitle: "الإيمان بالملائكة",
    explanation: "Créatures de pure lumière, dénuées de libre-arbitre pour désobéir, obéissant parfaitement aux commandements divins.",
    keyPoints: [
      "Jibril (Gabriel) chargé de transmettre la révélation.",
      "Mika'il (Michel) chargé de la pluie et de la subsistance.",
      "Les scribes honorables qui consignent les actes."
    ]
  },
  {
    id: 'books',
    number: 3,
    title: "La Foi aux Livres Célestes",
    arabicTitle: "الإيمان بالكتب السماوية",
    explanation: "Croire en toutes les écritures révélées par Dieu à Ses prophètes dans leur teneur originelle.",
    keyPoints: [
      "Les Feuillets d'Ibrahim, la Thora (Tawrat) à Moussa, les Psaumes (Zabur) à Daoud, l'Évangile (Injeel) à Issa.",
      "Le Saint Coran, Livre ultime, scellant et préservé de toute altération."
    ]
  },
  {
    id: 'prophets',
    number: 4,
    title: "La Foi aux Prophètes et Messagers",
    arabicTitle: "الإيمان بالرسل",
    explanation: "Reconnaître tous les envoyés de Dieu, d'Adam à Muhammad ﷺ, en passant par Noé, Abraham, Moïse et Jésus.",
    keyPoints: [
      "Tous ont prêché le même message fondamental : l'adoration d'un Dieu unique.",
      "Le Prophète Muhammad ﷺ est le sceau des prophètes pour l'humanité entière."
    ]
  },
  {
    id: 'last_day',
    number: 5,
    title: "La Foi au Jour Dernier",
    arabicTitle: "الإيمان باليوم الآخر",
    explanation: "La certitude de la fin du monde terrestre, de la résurrection des corps, du jugement de justice et de la vie éternelle.",
    keyPoints: [
      "La balance des actes (Mizan) et le compte des mérites et fautes.",
      "Le Paradis (Jannah) et l'Enfer (Jahannam)."
    ]
  },
  {
    id: 'destiny',
    number: 6,
    title: "La Foi au Destin (Al-Qadr)",
    arabicTitle: "الإيمان بالقدر",
    explanation: "Croire que rien n'arrive dans l'univers sans la prescience, l'écriture, la volonté et la création d'Allah, dans le bien comme dans le mal.",
    keyPoints: [
      "Les 4 étapes : La science éternelle, l'écriture dans la Table Préservée, la volonté souveraine, et la création.",
      "N'annule en rien la responsabilité morale et le choix de l'être humain."
    ]
  }
];
