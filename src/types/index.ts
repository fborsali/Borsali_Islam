export type ActiveTab = 'overview' | 'pillars' | 'quran' | 'prayer' | 'adhkar' | 'sunnah' | 'quiz';

export interface Pillar {
  id: string;
  number: number;
  title: string;
  arabicTitle: string;
  transliteration: string;
  summary: string;
  details: string[];
  wisdom: string;
  dalil: {
    text: string;
    source: string;
  };
  color: string;
}

export interface ImanArticle {
  id: string;
  number: number;
  title: string;
  arabicTitle: string;
  explanation: string;
  keyPoints: string[];
}

export interface Verse {
  number: number;
  arabic: string;
  transliteration: string;
  translation: string;
  tafsir?: string;
  audioUrl?: string;
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  translationName: string;
  revelationType: 'Mecquoise' | 'Médinoise';
  versesCount: number;
  juzNumber: number;
  intro: string;
  significance: string;
  verses: Verse[];
}

export interface TajweedRule {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  exampleArabic: string;
  examplePhonetic: string;
  explanation: string;
}

export interface WuduStep {
  stepNumber: number;
  title: string;
  arabicTitle: string;
  instruction: string;
  details: string;
  duaArabic?: string;
  duaPhonetic?: string;
  duaTranslation?: string;
  frequency: string;
  iconName: string;
}

export interface PrayerDefinition {
  id: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
  name: string;
  arabicName: string;
  rakats: number;
  sunnahBefore: number;
  sunnahAfter: number;
  recitationType: 'À voix haute (Jahr)' | 'À voix basse (Sirr)' | 'Mixte (2 Jahr + 1 Sirr)' | 'Mixte (2 Jahr + 2 Sirr)';
  timingDesc: string;
  merits: string;
}

export interface PrayerStepDetail {
  id: string;
  name: string;
  arabicTitle: string;
  postureDescription: string;
  recitationArabic: string;
  recitationPhonetic: string;
  recitationTranslation: string;
  repetition?: string;
  tips: string;
  applicableRakats: number[];
}

export interface QuizQuestion {
  id: string;
  category: 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general';
  type: 'multiple-choice' | 'order-steps';
  difficulty: 'facile' | 'moyen' | 'avance';
  question: string;
  options?: string[];
  correctIndex?: number;
  // For ordering questions
  orderItems?: { id: string; text: string; correctPos: number }[];
  explanation: string;
  source?: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  category: string;
  date: string;
}

export interface DhikrItem {
  id: string;
  title: string;
  arabic: string;
  phonetic: string;
  translation: string;
  targetCount: number;
  virtue: string;
}
