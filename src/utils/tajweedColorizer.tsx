import React from 'react';

/**
 * Tajweed & Sacred Name Colorizer for Quranic Uthmani Text.
 * Applies color rules similar to traditional Tajweed Mushafs:
 * - Crimson / Red: The Majestic Name of Allah (Lafz Al-Jalalah: اللَّه / ٱللَّه / لِلَّهِ)
 * - Emerald / Green: Ghunnah (Nūn and Mīm with Shaddah: نّ, مّ)
 * - Sky / Blue: Qalqalah (ق, ط, ب, ج, د with Sukun or end-stop)
 * - Amber / Gold: Madd (Prolongations with Maddah ~ or 4-6 beats)
 */

export interface TajweedLegendItem {
  colorClass: string;
  badgeBg: string;
  label: string;
  arabicName: string;
  description: string;
}

export const TAJWEED_LEGEND: TajweedLegendItem[] = [
  {
    colorClass: 'text-red-700 dark:text-red-600 font-bold',
    badgeBg: 'bg-red-50 text-red-800 border-red-200',
    label: "Nom Majestueux d'Allah",
    arabicName: 'لفظ الجلالة',
    description: 'Le Nom sacré d’Allah et Ses dérivés directs (اللَّه، لِلَّهِ، بِاللَّهِ)'
  },
  {
    colorClass: 'text-emerald-700 dark:text-emerald-600 font-bold',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    label: 'Ghunnah (Nasalisation)',
    arabicName: 'الغُنَّة',
    description: 'Nasalisation de 2 temps sur Nūn (نّ) ou Mīm (مّ) avec Chadda'
  },
  {
    colorClass: 'text-sky-700 dark:text-sky-600 font-bold',
    badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
    label: 'Qalqalah (Rebond sonore)',
    arabicName: 'القلقلة',
    description: 'Rebond vocal sur les 5 lettres (ق - ط - ب - ج - د) avec Soukoun'
  },
  {
    colorClass: 'text-amber-700 dark:text-amber-600 font-bold',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    label: 'Madd (Prolongation)',
    arabicName: 'المَدّ',
    description: 'Allongement de la voyelle longue de 4 à 6 temps (signe ~)'
  }
];

export function renderTajweedColoredText(text: string, enabled: boolean = true): React.ReactNode {
  if (!enabled || !text) {
    return text;
  }

  // Split words while preserving spaces
  const words = text.split(/(\s+)/);

  return (
    <>
      {words.map((word, wordIdx) => {
        if (/^\s+$/.test(word)) {
          return word;
        }

        // Clean diacritics for identification of Allah's Name
        const strippedWord = word.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');

        // 1. Detect Majestic Name of Allah
        if (
          strippedWord === 'الله' ||
          strippedWord === 'اللَّه' ||
          strippedWord === 'ٱلله' ||
          strippedWord === 'لله' ||
          strippedWord === 'بالله' ||
          strippedWord === 'تالله' ||
          strippedWord === 'والله' ||
          strippedWord === 'فالله' ||
          strippedWord === 'ولله' ||
          strippedWord === 'فلله' ||
          word.includes('اللَّه') ||
          word.includes('ٱللَّهِ') ||
          word.includes('ٱللَّهُ') ||
          word.includes('ٱللَّهَ')
        ) {
          return (
            <span key={wordIdx} className="text-red-700 font-bold" title="Nom d'Allah (Lafz Al-Jalalah)">
              {word}
            </span>
          );
        }

        // 2. Character-level parsing for Ghunnah, Qalqalah, and Madd inside words
        const elements: React.ReactNode[] = [];
        let currToken = '';

        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          const nextChar = word[i + 1] || '';

          // A. Madd sign (Maddah ~ / \u0653 or alif with maddah آ)
          if (char === '\u0653' || char === 'آ' || nextChar === '\u0653') {
            if (currToken) {
              elements.push(<span key={`plain-${i}`}>{currToken}</span>);
              currToken = '';
            }
            if (char === 'آ') {
              elements.push(
                <span key={`madd-${i}`} className="text-amber-700 font-bold" title="Madd (Prolongation)">
                  آ
                </span>
              );
            } else if (nextChar === '\u0653') {
              elements.push(
                <span key={`madd-${i}`} className="text-amber-700 font-bold" title="Madd (Prolongation)">
                  {char}{nextChar}
                </span>
              );
              i++; // skip next char
            } else {
              elements.push(
                <span key={`madd-${i}`} className="text-amber-700 font-bold" title="Madd (Prolongation)">
                  {char}
                </span>
              );
            }
            continue;
          }

          // B. Ghunnah: Nūn (ن) or Mīm (م) followed by Shaddah (\u0651)
          if ((char === 'ن' || char === 'م') && nextChar === '\u0651') {
            if (currToken) {
              elements.push(<span key={`plain-${i}`}>{currToken}</span>);
              currToken = '';
            }
            elements.push(
              <span key={`ghunnah-${i}`} className="text-emerald-700 font-bold" title="Ghunnah (Nasalisation)">
                {char}{nextChar}
              </span>
            );
            i++;
            continue;
          }

          // C. Qalqalah: letters ق, ط, ب, ج, د with Sukun (\u0652) or at the end of the word
          const isQalqalahLetter = ['ق', 'ط', 'ب', 'ج', 'د'].includes(char);
          if (isQalqalahLetter && (nextChar === '\u0652' || i === word.length - 1)) {
            if (currToken) {
              elements.push(<span key={`plain-${i}`}>{currToken}</span>);
              currToken = '';
            }
            const qalqalahString = nextChar === '\u0652' ? `${char}${nextChar}` : char;
            elements.push(
              <span key={`qalqalah-${i}`} className="text-sky-700 font-bold" title="Qalqalah (Rebond sonore)">
                {qalqalahString}
              </span>
            );
            if (nextChar === '\u0652') i++;
            continue;
          }

          currToken += char;
        }

        if (currToken) {
          elements.push(<span key={`plain-end`}>{currToken}</span>);
        }

        return <span key={wordIdx}>{elements}</span>;
      })}
    </>
  );
}
