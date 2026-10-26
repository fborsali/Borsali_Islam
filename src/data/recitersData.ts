export interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  role: string;
  city: string;
  isMecca: boolean;
  category: 'mecca' | 'algeria' | 'reference';
  country: string;
  flag: string;
  rewaya: 'Hafs \'an \'Asim' | 'Warsh \'an Nafi\'';
  avatarBg: string;
  getAudioUrl: (surahNumber: number) => string;
}

export const RECITERS: Reciter[] = [
  // --- Grands Imams de La Mecque (Al-Haram Al-Makki) ---
  {
    id: 'sudais',
    name: 'Sheikh Abdur-Rahman As-Sudais',
    arabicName: 'الشيخ عبد الرحمن السديس',
    role: 'Grand Imam du Masjid Al-Haram',
    city: 'La Mecque (Makkah)',
    isMecca: true,
    category: 'mecca',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    rewaya: 'Hafs \'an \'Asim',
    avatarBg: 'from-amber-700 to-amber-900',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/abdulrahman-sudais/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },
  {
    id: 'maher',
    name: 'Sheikh Maher Al-Muaiqly',
    arabicName: 'الشيخ ماهر المعيقلي',
    role: 'Imam emblématique du Haram Al-Makki',
    city: 'La Mecque (Makkah)',
    isMecca: true,
    category: 'mecca',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    rewaya: 'Hafs \'an \'Asim',
    avatarBg: 'from-emerald-700 to-emerald-900',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/maher-muaiqly/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },
  {
    id: 'shuraim',
    name: 'Sheikh Saud Ash-Shuraim',
    arabicName: 'الشيخ سعود الشريم',
    role: 'Ancien Imam et Khatib de La Mecque',
    city: 'La Mecque (Makkah)',
    isMecca: true,
    category: 'mecca',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    rewaya: 'Hafs \'an \'Asim',
    avatarBg: 'from-teal-700 to-teal-900',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/saud-shuraim/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },

  // --- Récitateurs Algériens Connus (Lecture Warsh 'an Nafi') ---
  {
    id: 'yacine_djazairi',
    name: 'Cheikh Yacine Al-Djazairi',
    arabicName: 'القارئ ياسين الجزائري',
    role: 'Référence algérienne par excellence (114 Sourates)',
    city: 'Alger',
    isMecca: false,
    category: 'algeria',
    country: 'Algérie',
    flag: '🇩🇿',
    rewaya: 'Warsh \'an Nafi\'',
    avatarBg: 'from-emerald-800 to-teal-950',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/yassen-jazairi/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },
  {
    id: 'abdelaziz_suhaim',
    name: 'Cheikh Abdelaziz Suhaim (Sahim)',
    arabicName: 'الشيخ عبد العزيز سحيم',
    role: 'Virtuose algérien à la voix bouleversante',
    city: 'M\'Sila / Alger',
    isMecca: false,
    category: 'algeria',
    country: 'Algérie',
    flag: '🇩🇿',
    rewaya: 'Warsh \'an Nafi\'',
    avatarBg: 'from-green-700 to-emerald-900',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/abdelaziz-sheim/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },
  {
    id: 'rachid_belalia',
    name: 'Cheikh Rachid Belaalia',
    arabicName: 'الشيخ رشيد بلعالية',
    role: 'Éminent Qari algérien (Coran complet en Warsh)',
    city: 'Alger',
    isMecca: false,
    category: 'algeria',
    country: 'Algérie',
    flag: '🇩🇿',
    rewaya: 'Warsh \'an Nafi\'',
    avatarBg: 'from-teal-800 to-emerald-950',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/rachid-belalia/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },

  // --- Voix Célèbres du Monde Musulman & Récitations Émouvantes ---
  {
    id: 'khaled_aljalil',
    name: 'Sheikh Khaled Al-Jalil',
    arabicName: 'الشيخ خالد الجليل',
    role: 'Imam de la Mosquée Roi Khalid (Riyad) - Récitation très émouvante',
    city: 'Riyad',
    isMecca: false,
    category: 'reference',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    rewaya: 'Hafs \'an \'Asim',
    avatarBg: 'from-indigo-800 to-purple-950',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/khalid-jalil/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  },
  {
    id: 'alafasy',
    name: 'Sheikh Mishary Rashid Alafasy',
    arabicName: 'الشيخ مشاري راشد العفاسي',
    role: 'Récitateur international de référence',
    city: 'Koweït',
    isMecca: false,
    category: 'reference',
    country: 'Koweït',
    flag: '🇰🇼',
    rewaya: 'Hafs \'an \'Asim',
    avatarBg: 'from-stone-700 to-stone-900',
    getAudioUrl: (surahNumber: number) =>
      `https://cdn.mp3quran.net/audio/mishary-alafasy/r1/${surahNumber.toString().padStart(3, '0')}.mp3`
  }
];
