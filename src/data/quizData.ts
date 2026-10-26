import { QuizQuestion } from '../types';
import { COMPREHENSIVE_QUIZ_BANK } from './quizQuestionsBank';

// Ordering exercises for hands-on practice
export const ORDERING_EXERCISES: QuizQuestion[] = [
  {
    id: 'ord_wudu_1',
    category: 'prayer',
    type: 'order-steps',
    difficulty: 'facile',
    question: "Remettez dans l'ordre chronologique les étapes fondamentales des ablutions (Al-Wudū') :",
    orderItems: [
      { id: 'w1', text: "Laver les mains jusqu'aux poignets", correctPos: 1 },
      { id: 'w2', text: "Rincer la bouche et le nez", correctPos: 2 },
      { id: 'w3', text: "Laver le visage entier", correctPos: 3 },
      { id: 'w4', text: "Laver les avant-bras jusqu'aux coudes", correctPos: 4 },
      { id: 'w5', text: "Essuyer la tête et les oreilles", correctPos: 5 },
      { id: 'w6', text: "Laver les pieds jusqu'aux chevilles", correctPos: 6 }
    ],
    explanation: "L'ordre des ablutions (Tartīb) est établi directement par la sourate Al-Ma'idah (5:6) et la Sunnah prophétique.",
    source: "Coran (5:6)"
  },
  {
    id: 'ord_prayer_1',
    category: 'prayer',
    type: 'order-steps',
    difficulty: 'moyen',
    question: "Remettez dans l'ordre les mouvements successifs d'une unité de prière (Rak'at) :",
    orderItems: [
      { id: 'p1', text: "Takbirat Al-Ihram (Allahu Akbar)", correctPos: 1 },
      { id: 'p2', text: "Station debout (Qiyam) avec Fatiha", correctPos: 2 },
      { id: 'p3', text: "L'inclinaison (Ruku')", correctPos: 3 },
      { id: 'p4', text: "Le redressement debout (I'tidal)", correctPos: 4 },
      { id: 'p5', text: "La 1ère prosternation au sol (Sujud)", correctPos: 5 },
      { id: 'p6', text: "L'assise entre les prosternations (Jalsah)", correctPos: 6 },
      { id: 'p7', text: "La 2nde prosternation (Sujud)", correctPos: 7 }
    ],
    explanation: "Une Rak'at s'articule rigoureusement ainsi : Takbir d'entrée -> Récitation debout -> Inclinaison -> Redressement -> Prosternation 1 -> Assise intermédiaire -> Prosternation 2.",
    source: "Hadith Al-Musī'u Salātahu"
  },
  {
    id: 'ord_pillars_1',
    category: 'pillars',
    type: 'order-steps',
    difficulty: 'facile',
    question: "Remettez dans l'ordre traditionnel les 5 Piliers de l'Islam selon le Hadith prophétique :",
    orderItems: [
      { id: 'pil1', text: "L'Attestation de Foi (La Chahada)", correctPos: 1 },
      { id: 'pil2', text: "L'accomplissement de la Prière (As-Salāt)", correctPos: 2 },
      { id: 'pil3', text: "L'Aumône légale (Az-Zakāt)", correctPos: 3 },
      { id: 'pil4', text: "Le Jeûne du mois de Ramadan (As-Siyām)", correctPos: 4 },
      { id: 'pil5', text: "Le Pèlerinage à La Mecque (Al-Hajj)", correctPos: 5 }
    ],
    explanation: "« L'Islam est bâti sur cinq piliers : le témoignage qu'il n'y a d'autre divinité qu'Allah et que Muhammad est Son messager, l'accomplissement de la prière, le versement de la Zakat, le jeûne de Ramadan et le pèlerinage à la Maison sacrée. » (Al-Bukhari & Muslim)",
    source: "Hadith d'Ibn Omar"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...ORDERING_EXERCISES,
  ...COMPREHENSIVE_QUIZ_BANK
];
