import React from 'react';

/**
 * High-fidelity realistic illustrations for the 8 steps of Islamic Ablutions (Al-Wudū').
 * Anatomical hands, water streams, face, arms, head and feet illustrations (no stick figures).
 */

interface WuduIllustrationProps {
  stepNumber: number;
  className?: string;
}

export const RealisticWuduIllustration: React.FC<WuduIllustrationProps> = ({ stepNumber, className = "w-full h-44" }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-gradient-to-b from-stone-50 to-slate-100 flex items-center justify-center p-2 shadow-xs">
      {/* Step 1: Intention & Bismillah */}
      {stepNumber === 1 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
              <stop stopColor="#ecfdf5" />
              <stop offset="1" stopColor="#d1fae5" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="skinW1" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          <circle cx="150" cy="100" r="75" fill="url(#heartGlow)" />
          {/* Subtle rays */}
          <path d="M 150 20 L 150 40 M 150 160 L 150 180 M 70 100 L 90 100 M 210 100 L 230 100" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

          {/* Realistic hands held together in reverent intention (Du'a position) */}
          <g transform="translate(100, 50)">
            {/* Left Hand */}
            <path d="M 40 100 L 40 45 Q 40 30 50 30 Q 60 30 60 45 L 60 100 Z" fill="url(#skinW1)" />
            <path d="M 28 90 L 28 55 Q 28 40 38 40 Q 45 40 45 55 L 45 90 Z" fill="url(#skinW1)" />
            {/* Right Hand cupped next to it */}
            <path d="M 60 100 L 60 45 Q 60 30 70 30 Q 80 30 80 45 L 80 100 Z" fill="url(#skinW1)" />
            <path d="M 75 90 L 75 55 Q 75 40 85 40 Q 92 40 92 55 L 92 90 Z" fill="url(#skinW1)" />
            {/* Wrist cuffs of white garment */}
            <rect x="25" y="95" width="70" height="15" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          </g>
          {/* Bismillah calligraphy symbol */}
          <text x="150" y="45" fill="#065f46" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Amiri, serif">بِسْمِ اللَّهِ</text>
          <text x="150" y="180" fill="#047857" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Intention sincère dans le cœur</text>
        </svg>
      )}

      {/* Step 2: Washing hands to wrists */}
      {stepNumber === 2 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waterStream" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="skinW2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>

          {/* Faucet & Water flow */}
          <path d="M 150 10 L 150 40 Q 150 50 140 50" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
          <path d="M 136 50 Q 135 110 138 150" stroke="url(#waterStream)" strokeWidth="6" strokeLinecap="round" />
          {/* Water Splashes */}
          <circle cx="130" cy="115" r="3" fill="#38bdf8" />
          <circle cx="145" cy="125" r="2.5" fill="#38bdf8" />
          <circle cx="160" cy="110" r="2" fill="#38bdf8" />

          {/* Two Hands Washing & Rubbing Fingers */}
          <g transform="translate(85, 75)">
            {/* Left Hand rubbing */}
            <path d="M 20 50 Q 10 30 30 15 Q 50 20 60 40 L 70 60 L 30 75 Z" fill="url(#skinW2)" />
            {/* Right Hand interlocking fingers */}
            <path d="M 110 50 Q 120 30 100 15 Q 80 20 70 40 L 60 60 L 100 75 Z" fill="url(#skinW2)" />
            {/* Finger details */}
            <line x1="38" y1="20" x2="65" y2="45" stroke="#b45309" strokeWidth="1.2" />
            <line x1="48" y1="15" x2="75" y2="45" stroke="#b45309" strokeWidth="1.2" />
            <line x1="92" y1="20" x2="65" y2="45" stroke="#b45309" strokeWidth="1.2" />
            {/* Water foam / drops on wrists */}
            <circle cx="25" cy="65" r="3" fill="#38bdf8" opacity="0.7" />
            <circle cx="105" cy="65" r="3" fill="#38bdf8" opacity="0.7" />
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Frotter entre les doigts jusqu'aux poignets (3x)</text>
        </svg>
      )}

      {/* Step 3: Rinsing mouth (Madmadah) */}
      {stepNumber === 3 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW3" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          {/* Adult Face profile - side view */}
          <g transform="translate(60, 20)">
            {/* Forehead and nose */}
            <path d="M 80 20 Q 95 40 100 65 L 120 85 L 95 95 Q 105 110 90 120 L 75 145" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Lips / Mouth */}
            <path d="M 95 105 Q 105 105 100 115" stroke="#e11d48" strokeWidth="2" fill="none" />
            {/* Beard */}
            <path d="M 90 120 Q 110 150 70 160" stroke="#334155" strokeWidth="8" strokeLinecap="round" />

            {/* Right hand cupping water to mouth */}
            <g transform="translate(90, 85)">
              <path d="M 10 30 Q 30 10 50 25 Q 40 50 15 50 Z" fill="url(#skinW3)" />
              {/* Water in palm */}
              <ellipse cx="30" cy="28" rx="14" ry="7" fill="#38bdf8" />
              <path d="M 25 24 Q 15 22 10 25" stroke="#0284c7" strokeWidth="2" fill="none" />
            </g>
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Prendre l'eau en coupe et rincer la bouche (3x)</text>
        </svg>
      )}

      {/* Step 4: Inhaling water in nose (Istinshaq & Istinthar) */}
      {stepNumber === 4 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW4" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          <g transform="translate(60, 20)">
            {/* Face profile */}
            <path d="M 80 20 Q 95 40 100 65 L 122 82 L 95 95 Q 105 110 90 120 L 75 145" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Nostrils */}
            <ellipse cx="108" cy="88" rx="4" ry="2.5" fill="#334155" />

            {/* Hand bringing gentle water to nostrils */}
            <g transform="translate(95, 75)">
              <path d="M 5 25 Q 25 8 45 22 Q 35 45 10 45 Z" fill="url(#skinW4)" />
              <ellipse cx="25" cy="22" rx="10" ry="5" fill="#38bdf8" />
              {/* Droplets entering lightly */}
              <circle cx="12" cy="15" r="2" fill="#0284c7" />
              <circle cx="18" cy="18" r="2" fill="#0284c7" />
            </g>
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Aspirer doucement puis rejeter avec la main gauche (3x)</text>
        </svg>
      )}

      {/* Step 5: Washing face */}
      {stepNumber === 5 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW5" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          {/* Frontal Face View with Both Hands washing */}
          <g transform="translate(75, 20)">
            {/* Face Oval */}
            <ellipse cx="75" cy="75" rx="42" ry="52" fill="url(#skinW5)" />
            {/* Beard contour */}
            <path d="M 40 85 Q 75 135 110 85 Q 100 120 75 125 Q 50 120 40 85 Z" fill="#334155" />
            {/* Eyes closed peacefully under water */}
            <path d="M 55 65 Q 63 70 70 65" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 80 65 Q 87 70 95 65" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Nose & Mouth */}
            <path d="M 75 65 L 75 80 L 80 82" stroke="#d49b6a" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Left Hand washing cheek & ear */}
            <path d="M 20 85 Q 25 50 45 55 L 45 95 Z" fill="url(#skinW5)" opacity="0.95" />
            {/* Right Hand washing cheek & ear */}
            <path d="M 130 85 Q 125 50 105 55 L 105 95 Z" fill="url(#skinW5)" opacity="0.95" />
            {/* Water streams cascading over face */}
            <path d="M 50 40 Q 60 70 55 105" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 100 40 Q 90 70 95 105" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 75 35 L 75 60" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Du haut du front au menton, d'une oreille à l'autre (3x)</text>
        </svg>
      )}

      {/* Step 6: Washing forearms to elbows */}
      {stepNumber === 6 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW6" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          {/* Realistic Right Arm Washing including Elbow */}
          <g transform="translate(60, 40)">
            {/* Right Forearm horizontal */}
            <path d="M 40 60 L 160 55 Q 185 55 185 75 Q 185 95 160 95 L 40 85 Z" fill="url(#skinW6)" />
            {/* Hand & fingers */}
            <path d="M 40 60 L 10 65 Q 0 72 10 80 L 40 85 Z" fill="url(#skinW6)" />
            {/* Highlight on Elbow (critical point) */}
            <circle cx="180" cy="75" r="10" stroke="#dc2626" strokeWidth="2" strokeDasharray="2 2" fill="none" />
            <text x="180" y="115" fill="#dc2626" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Coude inclus !</text>

            {/* Left Hand washing from fingertips up past elbow */}
            <path d="M 100 40 Q 120 45 130 65 L 110 85 Q 90 70 100 40 Z" fill="url(#skinW6)" />
            {/* Water flowing over forearm and dripping from elbow */}
            <path d="M 20 62 Q 90 55 175 65" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <path d="M 180 85 L 180 105" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="180" cy="112" r="2" fill="#0284c7" />
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Des doigts au coude inclus (bras droit puis gauche 3x)</text>
        </svg>
      )}

      {/* Step 7: Wiping head & ears (Mas-h) */}
      {stepNumber === 7 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW7" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          <g transform="translate(80, 20)">
            {/* Head profile side view */}
            <ellipse cx="70" cy="75" rx="35" ry="42" fill="url(#skinW7)" />
            {/* Hair / Head curve */}
            <path d="M 45 50 Q 70 30 95 50 Q 105 75 95 95 L 85 105 Q 60 115 45 100" stroke="#334155" strokeWidth="4" fill="none" />
            {/* Ear */}
            <path d="M 68 70 Q 78 70 76 85 Q 70 92 65 85 Z" fill="#e2b184" stroke="#c28854" strokeWidth="1.5" />

            {/* Hands sweeping from forehead to back of neck and into ears */}
            <path d="M 35 40 Q 65 20 95 38" stroke="#0284c7" strokeWidth="3" strokeDasharray="3 3" fill="none" />
            <polygon points="98,42 90,36 93,45" fill="#0284c7" />
            {/* Wet Hand wiping */}
            <g transform="translate(60, 30)">
              <ellipse cx="10" cy="5" rx="14" ry="7" fill="url(#skinW7)" />
              {/* Droplets */}
              <circle cx="8" cy="1" r="2" fill="#38bdf8" />
              <circle cx="16" cy="3" r="1.5" fill="#38bdf8" />
            </g>
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Passer les mains mouillées sur la tête et oreilles (1x)</text>
        </svg>
      )}

      {/* Step 8: Washing feet to ankles */}
      {stepNumber === 8 && (
        <svg viewBox="0 0 300 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skinW8" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f7d0a6" />
              <stop offset="1" stopColor="#d99962" />
            </linearGradient>
          </defs>
          <g transform="translate(60, 30)">
            {/* Leg down to Ankle */}
            <path d="M 120 10 L 120 70 Q 120 90 105 95 L 45 95 Q 30 95 35 110 L 150 110 Q 155 85 145 60 L 145 10 Z" fill="url(#skinW8)" />
            {/* Ankle bone highlight (Malléole) */}
            <circle cx="130" cy="85" r="7" stroke="#dc2626" strokeWidth="1.5" fill="none" />
            <text x="145" y="80" fill="#dc2626" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Malléole</text>

            {/* Toes */}
            <circle cx="40" cy="105" r="5" fill="url(#skinW8)" />
            <circle cx="48" cy="105" r="4.5" fill="url(#skinW8)" />
            <circle cx="56" cy="105" r="4" fill="url(#skinW8)" />

            {/* Hand washing between toes and heel */}
            <g transform="translate(30, 70)">
              <ellipse cx="25" cy="15" rx="14" ry="8" fill="url(#skinW8)" />
              <line x1="18" y1="20" x2="14" y2="35" stroke="url(#skinW8)" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Water stream washing foot */}
            <path d="M 90 20 Q 95 65 60 100" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="102" r="2.5" fill="#0284c7" />
            <circle cx="120" cy="108" r="2.5" fill="#0284c7" />
          </g>
          <text x="150" y="180" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Laver le pied jusqu'à la cheville incluse (Droit puis Gauche 3x)</text>
        </svg>
      )}
    </div>
  );
};
