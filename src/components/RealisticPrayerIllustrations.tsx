import React from 'react';

/**
 * High-fidelity, respectful anatomical illustrations of the Islamic Prayer postures.
 * Designed with realistic human proportions, draping robes, prayer rug details,
 * and clear alignment annotations for proper performance (anti-stick figures).
 */

interface PostureIllustrationProps {
  postureId: string;
  className?: string;
}

export const RealisticPrayerIllustration: React.FC<PostureIllustrationProps> = ({ postureId, className = "w-full h-64" }) => {
  switch (postureId) {
    // ----------------------------------------------------
    // 1. TAKBIRAT AL-IHRAM
    // ----------------------------------------------------
    case 'takbir':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGlow" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
            <linearGradient id="thobeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="0.7" stopColor="#f1f5f9" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="rugGrad" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#064e3b" />
              <stop offset="0.5" stopColor="#047857" />
              <stop offset="1" stopColor="#064e3b" />
            </linearGradient>
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Background Stage */}
          <rect width="400" height="360" rx="16" fill="url(#bgGlow)" />
          {/* Mosque arch outline in background */}
          <path d="M 120 300 L 120 120 Q 200 40 280 120 L 280 300" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />

          {/* Prayer Rug */}
          <g filter="url(#softShadow)">
            <path d="M 70 330 L 120 270 L 280 270 L 330 330 Z" fill="url(#rugGrad)" />
            {/* Mihrab arch on rug */}
            <path d="M 150 275 Q 200 295 250 275" stroke="#d97706" strokeWidth="2" fill="none" />
            <line x1="70" y1="330" x2="330" y2="330" stroke="#f59e0b" strokeWidth="2" />
            {/* Fringe */}
            <path d="M 68 333 L 332 333" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="2 3" />
          </g>

          {/* Adult Male Figure - Standing Takbir */}
          <g filter="url(#softShadow)">
            {/* Feet on rug */}
            <path d="M 175 285 Q 170 295 180 298 L 195 298 Q 198 290 195 285 Z" fill="url(#skinGrad)" />
            <path d="M 205 285 Q 202 295 212 298 L 227 298 Q 230 290 227 285 Z" fill="url(#skinGrad)" />

            {/* Thobe Body (Flowing white garment) */}
            <path d="M 160 120 Q 150 180 145 285 L 255 285 Q 250 180 240 120 Z" fill="url(#thobeGrad)" />
            {/* Robe pleats / folds for realism */}
            <path d="M 180 140 Q 175 220 170 285" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 220 140 Q 225 220 230 285" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 200 130 L 200 285" stroke="#94a3b8" strokeWidth="1.2" opacity="0.4" />

            {/* Neck */}
            <path d="M 190 100 L 190 125 L 210 125 L 210 100 Z" fill="url(#skinGrad)" />
            <path d="M 185 120 Q 200 128 215 120" stroke="#047857" strokeWidth="2" fill="none" />

            {/* Head (tilted humbly down toward prostration point) */}
            <ellipse cx="200" cy="85" rx="18" ry="22" fill="url(#skinGrad)" />
            {/* Kufi / Prayer Cap */}
            <path d="M 182 82 Q 200 62 218 82 Q 215 70 200 65 Q 185 70 182 82 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            {/* Beard contour */}
            <path d="M 185 88 Q 200 105 215 88 Q 210 100 200 104 Q 190 100 185 88 Z" fill="#334155" />
            {/* Eyes looking down */}
            <line x1="192" y1="84" x2="198" y2="86" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="202" y1="86" x2="208" y2="84" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

            {/* Arms raised to ear level (Takbir) */}
            {/* Left Arm & Sleeve */}
            <path d="M 160 125 Q 130 110 135 75" stroke="url(#thobeGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
            {/* Left Hand open to Qibla */}
            <g transform="translate(135, 65)">
              <path d="M -5 10 Q -5 -10 5 -10 Q 15 -10 15 10 Q 10 20 -5 10 Z" fill="url(#skinGrad)" />
              {/* Fingers */}
              <line x1="0" y1="-8" x2="0" y2="5" stroke="#b45309" strokeWidth="0.8" />
              <line x1="4" y1="-10" x2="4" y2="5" stroke="#b45309" strokeWidth="0.8" />
              <line x1="8" y1="-8" x2="8" y2="5" stroke="#b45309" strokeWidth="0.8" />
            </g>

            {/* Right Arm & Sleeve */}
            <path d="M 240 125 Q 270 110 265 75" stroke="url(#thobeGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
            {/* Right Hand open to Qibla */}
            <g transform="translate(265, 65)">
              <path d="M -5 10 Q -5 -10 5 -10 Q 15 -10 15 10 Q 10 20 -5 10 Z" fill="url(#skinGrad)" />
              <line x1="0" y1="-8" x2="0" y2="5" stroke="#b45309" strokeWidth="0.8" />
              <line x1="4" y1="-10" x2="4" y2="5" stroke="#b45309" strokeWidth="0.8" />
              <line x1="8" y1="-8" x2="8" y2="5" stroke="#b45309" strokeWidth="0.8" />
            </g>
          </g>

          {/* Educational Callouts */}
          <g>
            <circle cx="110" cy="70" r="3" fill="#047857" />
            <line x1="110" y1="70" x2="70" y2="70" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="65" y="74" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">Mains à hauteur des oreilles</text>

            <circle cx="200" cy="110" r="3" fill="#047857" />
            <line x1="200" y1="110" x2="330" y2="110" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="335" y="114" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Regard vers la prosternation</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 2. QIYAM (Standing with hands on chest)
    // ----------------------------------------------------
    case 'istiftah':
    case 'qiyam_fatiha':
    case 'qiyam_surah':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGlowQ" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeQ" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="0.7" stopColor="#f1f5f9" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinQ" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgGlowQ)" />

          {/* Prayer Rug */}
          <path d="M 70 330 L 120 270 L 280 270 L 330 330 Z" fill="#064e3b" />
          <path d="M 150 275 Q 200 295 250 275" stroke="#d97706" strokeWidth="2" fill="none" />
          <line x1="70" y1="330" x2="330" y2="330" stroke="#f59e0b" strokeWidth="2" />

          {/* Standing Figure */}
          <g>
            {/* Feet */}
            <path d="M 175 285 Q 170 295 180 298 L 195 298 Q 198 290 195 285 Z" fill="url(#skinQ)" />
            <path d="M 205 285 Q 202 295 212 298 L 227 298 Q 230 290 227 285 Z" fill="url(#skinQ)" />

            {/* Thobe Lower Body */}
            <path d="M 160 120 Q 150 180 145 285 L 255 285 Q 250 180 240 120 Z" fill="url(#thobeQ)" />
            <path d="M 180 150 Q 175 220 170 285" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
            <path d="M 220 150 Q 225 220 230 285" stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />

            {/* Neck & Head */}
            <path d="M 190 95 L 190 120 L 210 120 L 210 95 Z" fill="url(#skinQ)" />
            <ellipse cx="200" cy="80" rx="18" ry="22" fill="url(#skinQ)" />
            {/* White Cap */}
            <path d="M 182 77 Q 200 58 218 77 Q 215 65 200 62 Q 185 65 182 77 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            {/* Beard */}
            <path d="M 185 83 Q 200 100 215 83 Q 210 96 200 99 Q 190 96 185 83 Z" fill="#334155" />
            {/* Eyes looking down */}
            <line x1="193" y1="78" x2="198" y2="80" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="202" y1="80" x2="207" y2="78" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

            {/* Arms crossed on Chest (Right hand over Left wrist) */}
            <path d="M 160 120 Q 145 145 180 155 L 220 155 Q 255 145 240 120" stroke="url(#thobeQ)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Left Hand under */}
            <rect x="180" y="148" width="22" height="12" rx="4" fill="url(#skinQ)" />
            {/* Right Hand firmly clasping left wrist */}
            <rect x="195" y="145" width="24" height="15" rx="5" fill="url(#skinQ)" />
            <line x1="202" y1="148" x2="216" y2="148" stroke="#b45309" strokeWidth="0.8" />
            <line x1="202" y1="152" x2="216" y2="152" stroke="#b45309" strokeWidth="0.8" />
          </g>

          {/* Key Alignment Guide */}
          <g>
            <circle cx="210" cy="150" r="3" fill="#047857" />
            <line x1="210" y1="150" x2="330" y2="150" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="335" y="154" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Main droite sur poignet gauche</text>

            <circle cx="200" cy="300" r="3" fill="#047857" />
            <line x1="200" y1="300" x2="80" y2="300" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="75" y="304" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">Pieds parallèles espacés</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 3. RUKU' (Bowing perfectly flat back)
    // ----------------------------------------------------
    case 'ruku':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgRuku" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeRuku" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinRuku" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgRuku)" />

          {/* Rug */}
          <path d="M 50 330 L 100 270 L 320 270 L 370 330 Z" fill="#064e3b" />
          <line x1="50" y1="330" x2="370" y2="330" stroke="#f59e0b" strokeWidth="2" />

          {/* Worshiper Bowing - Profile View showing 90-degree angle */}
          <g>
            {/* Legs standing straight */}
            <path d="M 270 170 L 270 290 Q 275 295 290 295" stroke="url(#thobeRuku)" strokeWidth="32" strokeLinecap="round" />
            {/* Foot */}
            <path d="M 275 290 L 305 290 Q 310 295 305 300 L 270 300 Z" fill="url(#skinRuku)" />

            {/* Torso & Back perfectly flat horizontal line */}
            <path d="M 130 170 L 270 170" stroke="url(#thobeRuku)" strokeWidth="36" strokeLinecap="round" />
            {/* Level line indicator */}
            <line x1="100" y1="152" x2="290" y2="152" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Neck & Head in line with back */}
            <path d="M 125 170 L 105 170" stroke="url(#skinRuku)" strokeWidth="18" strokeLinecap="round" />
            <circle cx="95" cy="170" r="18" fill="url(#skinRuku)" />
            {/* Cap */}
            <path d="M 90 152 Q 105 152 112 165 L 85 165 Z" fill="#ffffff" />
            {/* Beard */}
            <path d="M 85 175 Q 85 185 95 188 Q 102 188 102 178 Z" fill="#334155" />

            {/* Arms holding knees firmly */}
            <path d="M 150 170 L 225 240" stroke="url(#thobeRuku)" strokeWidth="18" strokeLinecap="round" />
            {/* Hands grasping knee */}
            <circle cx="230" cy="245" r="14" fill="url(#skinRuku)" />
            {/* Fingers spread on knee */}
            <path d="M 225 240 Q 235 255 245 245" stroke="#b45309" strokeWidth="1.5" fill="none" />
          </g>

          {/* Precision Annotations */}
          <g>
            <circle cx="200" cy="152" r="3" fill="#047857" />
            <line x1="200" y1="152" x2="200" y2="90" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="200" y="80" fill="#065f46" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Dos droit & parfaitement à l'horizontale</text>

            <circle cx="240" cy="245" r="3" fill="#047857" />
            <line x1="240" y1="245" x2="330" y2="245" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="335" y="249" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Mains agrippant les genoux (doigts écartés)</text>

            <circle cx="95" cy="195" r="3" fill="#047857" />
            <line x1="95" y1="195" x2="95" y2="245" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="95" y="260" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Tête dans l'axe de la colonne</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 4. I'TIDAL (Standing straight from bowing)
    // ----------------------------------------------------
    case 'itidal':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgItidal" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeItidal" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinItidal" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgItidal)" />
          <path d="M 70 330 L 120 270 L 280 270 L 330 330 Z" fill="#064e3b" />
          <line x1="70" y1="330" x2="330" y2="330" stroke="#f59e0b" strokeWidth="2" />

          {/* Standing erect in peace */}
          <g>
            <path d="M 175 285 Q 170 295 180 298 L 195 298 Q 198 290 195 285 Z" fill="url(#skinItidal)" />
            <path d="M 205 285 Q 202 295 212 298 L 227 298 Q 230 290 227 285 Z" fill="url(#skinItidal)" />

            <path d="M 160 120 Q 150 180 145 285 L 255 285 Q 250 180 240 120 Z" fill="url(#thobeItidal)" />
            <path d="M 190 95 L 190 120 L 210 120 L 210 95 Z" fill="url(#skinItidal)" />
            <ellipse cx="200" cy="80" rx="18" ry="22" fill="url(#skinItidal)" />
            <path d="M 182 77 Q 200 58 218 77 Q 215 65 200 62 Q 185 65 182 77 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M 185 83 Q 200 100 215 83 Q 210 96 200 99 Q 190 96 185 83 Z" fill="#334155" />

            {/* Arms resting naturally or slightly forward */}
            <path d="M 160 125 L 150 200" stroke="url(#thobeItidal)" strokeWidth="16" strokeLinecap="round" />
            <circle cx="150" cy="210" r="7" fill="url(#skinItidal)" />
            <path d="M 240 125 L 250 200" stroke="url(#thobeItidal)" strokeWidth="16" strokeLinecap="round" />
            <circle cx="250" cy="210" r="7" fill="url(#skinItidal)" />
          </g>

          <g>
            <circle cx="200" cy="130" r="3" fill="#047857" />
            <line x1="200" y1="130" x2="330" y2="130" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="335" y="134" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Redressement complet & apaisé</text>

            <circle cx="200" cy="80" r="3" fill="#047857" />
            <line x1="200" y1="80" x2="70" y2="80" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="65" y="84" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">Chaque vertèbre reprend sa place</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 5. SUJUD (Prostration on the 7 limb points)
    // ----------------------------------------------------
    case 'sujud_1':
    case 'sujud_2':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgSujud" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeSujud" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinSujud" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgSujud)" />

          {/* Prayer Rug */}
          <path d="M 40 310 L 80 250 L 340 250 L 380 310 Z" fill="#064e3b" />
          <line x1="40" y1="310" x2="380" y2="310" stroke="#f59e0b" strokeWidth="2" />
          <line x1="30" y1="285" x2="370" y2="285" stroke="#047857" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

          {/* Realistic Anatomical Sujud Posture */}
          <g>
            {/* Feet: upright, toes bent forward on the ground toward Qibla */}
            <g transform="translate(320, 260)">
              {/* Heel & sole upright */}
              <path d="M 0 10 L 10 -15 Q 18 -15 20 -5 L 15 25 L 0 25 Z" fill="url(#skinSujud)" />
              {/* Toes flexed forward on mat */}
              <ellipse cx="5" cy="24" rx="8" ry="4" fill="url(#skinSujud)" />
              <circle cx="5" cy="24" r="3" fill="#047857" />
            </g>

            {/* Lower legs to Knees on the ground */}
            <path d="M 320 270 L 240 280" stroke="url(#thobeSujud)" strokeWidth="26" strokeLinecap="round" />
            {/* Knee on the ground */}
            <circle cx="235" cy="280" r="14" fill="url(#skinSujud)" />
            <circle cx="235" cy="280" r="3" fill="#047857" />

            {/* Thighs elevated at ~90 degrees angle from ground */}
            <path d="M 235 275 L 210 200" stroke="url(#thobeSujud)" strokeWidth="36" strokeLinecap="round" />

            {/* Torso & Back arched gracefully forward */}
            <path d="M 210 195 Q 165 190 120 240" stroke="url(#thobeSujud)" strokeWidth="38" strokeLinecap="round" />

            {/* Arms: hands flat on floor beside head, ELBOWS ELEVATED off the ground */}
            <path d="M 135 235 Q 115 195 100 245" stroke="url(#thobeSujud)" strokeWidth="16" strokeLinecap="round" fill="none" />
            {/* Hand flat on rug */}
            <ellipse cx="98" cy="275" rx="14" ry="6" fill="url(#skinSujud)" />
            <circle cx="98" cy="275" r="3" fill="#047857" />

            {/* Head & Forehead + Nose firmly touching the ground */}
            <circle cx="80" cy="265" r="16" fill="url(#skinSujud)" />
            {/* White Cap */}
            <path d="M 80 250 Q 95 250 95 265 L 75 260 Z" fill="#ffffff" />
            {/* Forehead contact point */}
            <circle cx="70" cy="278" r="4" fill="#dc2626" />
          </g>

          {/* Crucial 7-Points Callouts */}
          <g>
            <circle cx="70" cy="278" r="5" stroke="#dc2626" strokeWidth="1.5" fill="none" />
            <line x1="70" y1="278" x2="30" y2="240" stroke="#dc2626" strokeWidth="1" />
            <text x="25" y="235" fill="#991b1b" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">1 & 2. Front et Nez au sol</text>

            <line x1="98" y1="275" x2="60" y2="330" stroke="#047857" strokeWidth="1" />
            <text x="55" y="342" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">3 & 4. Les deux paumes à plat</text>

            <line x1="235" y1="280" x2="220" y2="330" stroke="#047857" strokeWidth="1" />
            <text x="220" y="342" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">5 & 6. Les deux genoux</text>

            <line x1="325" y1="284" x2="350" y2="330" stroke="#047857" strokeWidth="1" />
            <text x="355" y="342" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">7. Orteils pliés vers la Qibla</text>

            {/* Elevated elbows banner */}
            <rect x="100" y="70" width="200" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
            <text x="200" y="86" fill="#166534" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">✓ Coudes décollés du sol</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 6. JALSAH & TASHAHHUD (Sitting on knees with pointing finger)
    // ----------------------------------------------------
    case 'jalsa':
    case 'tashahhud':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgJalsa" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeJalsa" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinJalsa" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgJalsa)" />
          <path d="M 60 330 L 100 260 L 320 260 L 360 330 Z" fill="#064e3b" />
          <line x1="60" y1="330" x2="360" y2="330" stroke="#f59e0b" strokeWidth="2" />

          {/* Worshiper sitting in Tashahhud / Jalsah */}
          <g>
            {/* Left foot flat under buttocks (Iftirash), Right foot upright */}
            <ellipse cx="270" cy="285" rx="35" ry="12" fill="url(#skinJalsa)" />
            {/* Right toes upright */}
            <path d="M 285 260 L 295 285 Q 295 292 285 292" stroke="url(#skinJalsa)" strokeWidth="12" strokeLinecap="round" />

            {/* Folded legs and draped robe */}
            <path d="M 170 290 Q 220 295 290 280 L 260 230 Q 190 230 170 290 Z" fill="url(#thobeJalsa)" />

            {/* Upright Torso */}
            <path d="M 180 140 L 240 140 L 250 250 L 175 250 Z" fill="url(#thobeJalsa)" />
            <path d="M 205 140 L 205 240" stroke="#94a3b8" strokeWidth="1.5" opacity="0.4" />

            {/* Head & Neck looking humbly down at the index finger */}
            <path d="M 200 115 L 200 140 L 220 140 L 220 115 Z" fill="url(#skinJalsa)" />
            <ellipse cx="210" cy="100" rx="18" ry="22" fill="url(#skinJalsa)" />
            <path d="M 192 97 Q 210 78 228 97 Q 225 85 210 82 Q 195 85 192 97 Z" fill="#ffffff" />
            <path d="M 195 103 Q 210 120 225 103 Q 220 116 210 119 Q 200 116 195 103 Z" fill="#334155" />

            {/* Left Arm: resting flat on left knee */}
            <path d="M 180 145 L 155 220" stroke="url(#thobeJalsa)" strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="155" cy="225" rx="12" ry="6" fill="url(#skinJalsa)" />

            {/* Right Arm: resting on right thigh with INDEX FINGER POINTED toward Qibla */}
            <path d="M 235 145 L 205 215" stroke="url(#thobeJalsa)" strokeWidth="16" strokeLinecap="round" />
            {/* Clenched fist with pointing index finger */}
            <g transform="translate(195, 215)">
              <circle cx="8" cy="8" r="8" fill="url(#skinJalsa)" />
              {/* Pointing Index Finger */}
              <line x1="8" y1="4" x2="-14" y2="-8" stroke="url(#skinJalsa)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="-14" cy="-8" r="3" fill="#d97706" />
            </g>
          </g>

          {/* Educational Callouts */}
          <g>
            <circle cx="180" cy="207" r="4" fill="#d97706" />
            <line x1="180" y1="207" x2="80" y2="180" stroke="#d97706" strokeWidth="1" />
            <text x="75" y="175" fill="#b45309" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">Index droit levé (Attestation de Tawhīd)</text>

            <circle cx="210" cy="100" r="3" fill="#047857" />
            <line x1="210" y1="100" x2="330" y2="100" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="335" y="104" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Regard fixé sur l'index levé</text>

            <circle cx="280" cy="285" r="3" fill="#047857" />
            <line x1="280" y1="285" x2="340" y2="285" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
            <text x="345" y="289" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Assise sur le pied gauche, pied droit dressé</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 7. TASLIM (Turning head to the right shoulder)
    // ----------------------------------------------------
    case 'taslim':
      return (
        <svg viewBox="0 0 400 360" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgTaslim" x1="200" y1="0" x2="200" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="thobeTaslim" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="skinTaslim" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f3c99f" />
              <stop offset="1" stopColor="#d49b6a" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" rx="16" fill="url(#bgTaslim)" />
          <path d="M 60 330 L 100 260 L 320 260 L 360 330 Z" fill="#064e3b" />
          <line x1="60" y1="330" x2="360" y2="330" stroke="#f59e0b" strokeWidth="2" />

          {/* Worshiper sitting and turning noble head to the right */}
          <g>
            <ellipse cx="270" cy="285" rx="35" ry="12" fill="url(#skinTaslim)" />
            <path d="M 170 290 Q 220 295 290 280 L 260 230 Q 190 230 170 290 Z" fill="url(#thobeTaslim)" />
            <path d="M 180 140 L 240 140 L 250 250 L 175 250 Z" fill="url(#thobeTaslim)" />

            {/* Hands resting on thighs */}
            <path d="M 180 145 L 160 220" stroke="url(#thobeTaslim)" strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="160" cy="225" rx="10" ry="6" fill="url(#skinTaslim)" />
            <path d="M 235 145 L 210 220" stroke="url(#thobeTaslim)" strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="210" cy="225" rx="10" ry="6" fill="url(#skinTaslim)" />

            {/* Head rotated fully to the right shoulder */}
            <path d="M 205 115 L 215 140" stroke="url(#skinTaslim)" strokeWidth="16" strokeLinecap="round" />
            {/* Profile of turned head */}
            <ellipse cx="232" cy="100" rx="16" ry="20" fill="url(#skinTaslim)" />
            <path d="M 220 90 Q 235 80 245 95 L 225 100 Z" fill="#ffffff" />
            <path d="M 230 108 Q 242 115 244 104" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            {/* Eye looking toward shoulder */}
            <circle cx="238" cy="98" r="1.8" fill="#1e293b" />
          </g>

          <g>
            <path d="M 205 75 Q 235 60 250 85" stroke="#047857" strokeWidth="2" strokeDasharray="3 3" fill="none" markerEnd="url(#arrow)" />
            <text x="260" y="80" fill="#065f46" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">Tourner le visage à droite (puis à gauche)</text>

            <rect x="80" y="30" width="240" height="26" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
            <text x="200" y="47" fill="#166534" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">« As-Salāmu 'alaykum wa Rahmatullāh »</text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
