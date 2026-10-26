/**
 * Prayer Times and Qibla Direction Utility
 * Calculates solar prayer times with standard astronomical conventions
 * and computes exact Qibla azimuth from any latitude and longitude,
 * including browser GPS geolocation support.
 */

export interface CityLocation {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: number; // UTC offset in hours
  isGps?: boolean;
}

export const POPULAR_CITIES: CityLocation[] = [
  // France
  { name: 'Paris', country: 'France', latitude: 48.8566, longitude: 2.3522, timezone: 1 },
  { name: 'Marseille', country: 'France', latitude: 43.2965, longitude: 5.3698, timezone: 1 },
  { name: 'Lyon', country: 'France', latitude: 45.7640, longitude: 4.8357, timezone: 1 },
  { name: 'Toulouse', country: 'France', latitude: 43.6047, longitude: 1.4442, timezone: 1 },
  { name: 'Lille', country: 'France', latitude: 50.6292, longitude: 3.0573, timezone: 1 },
  { name: 'Strasbourg', country: 'France', latitude: 48.5734, longitude: 7.7521, timezone: 1 },
  { name: 'Bordeaux', country: 'France', latitude: 44.8378, longitude: -0.5792, timezone: 1 },

  // Lieux Saints
  { name: 'La Mecque (Makkah)', country: 'Arabie Saoudite', latitude: 21.4225, longitude: 39.8262, timezone: 3 },
  { name: 'Médine (Madinah)', country: 'Arabie Saoudite', latitude: 24.5247, longitude: 39.5692, timezone: 3 },
  { name: 'Al-Qods (Jérusalem)', country: 'Palestine', latitude: 31.7683, longitude: 35.2137, timezone: 2 },

  // Maghreb
  { name: 'Alger', country: 'Algérie', latitude: 36.7538, longitude: 3.0588, timezone: 1 },
  { name: 'Oran', country: 'Algérie', latitude: 35.6987, longitude: -0.6349, timezone: 1 },
  { name: 'Constantine', country: 'Algérie', latitude: 36.3650, longitude: 6.6147, timezone: 1 },
  { name: 'Casablanca', country: 'Maroc', latitude: 33.5731, longitude: -7.5898, timezone: 1 },
  { name: 'Rabat', country: 'Maroc', latitude: 34.0209, longitude: -6.8416, timezone: 1 },
  { name: 'Marrakech', country: 'Maroc', latitude: 31.6295, longitude: -7.9811, timezone: 1 },
  { name: 'Tunis', country: 'Tunisie', latitude: 36.8065, longitude: 10.1815, timezone: 1 },
  { name: 'Sfax', country: 'Tunisie', latitude: 34.7406, longitude: 10.7603, timezone: 1 },

  // Autres pays francophones et monde
  { name: 'Bruxelles', country: 'Belgique', latitude: 50.8503, longitude: 4.3517, timezone: 1 },
  { name: 'Genève', country: 'Suisse', latitude: 46.2044, longitude: 6.1432, timezone: 1 },
  { name: 'Dakar', country: 'Sénégal', latitude: 14.7167, longitude: -17.4677, timezone: 0 },
  { name: 'Montréal', country: 'Canada', latitude: 45.5017, longitude: -73.5673, timezone: -5 },
  { name: 'Abidjan', country: "Côte d'Ivoire", latitude: 5.3600, longitude: -4.0083, timezone: 0 }
];

// Coordinates of the Kaaba in Mecca
const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

export function calculateQiblaDirection(userLat: number, userLng: number): number {
  const phiK = (KAABA_LAT * Math.PI) / 180;
  const lambdaK = (KAABA_LNG * Math.PI) / 180;
  const phi = (userLat * Math.PI) / 180;
  const lambda = (userLng * Math.PI) / 180;

  const y = Math.sin(lambdaK - lambda);
  const x = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda);

  const qiblaRad = Math.atan2(y, x);
  const qiblaDeg = (qiblaRad * 180) / Math.PI;

  return (qiblaDeg + 360) % 360;
}

export interface DayPrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

/**
 * Solar prayer times based on coordinates, date and timezone
 */
export function getPrayerTimes(city: CityLocation, date: Date = new Date()): DayPrayerTimes {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Solar declination approximation
  const declination = 23.45 * Math.sin(((360 / 365) * (dayOfYear - 81) * Math.PI) / 180);
  const decRad = (declination * Math.PI) / 180;
  const latRad = (city.latitude * Math.PI) / 180;

  // Equation of time (minutes)
  const b = ((360 / 365) * (dayOfYear - 81) * Math.PI) / 180;
  const eqTime = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);

  // Solar noon in local hours
  const timeOffset = city.timezone !== undefined ? city.timezone : -date.getTimezoneOffset() / 60;
  const solarNoonUTC = 12 - (city.longitude / 15) - (eqTime / 60);
  const solarNoonLocal = solarNoonUTC + timeOffset;

  const getHourAngle = (alphaDeg: number) => {
    const alphaRad = (alphaDeg * Math.PI) / 180;
    const cosH = (Math.sin(alphaRad) - Math.sin(latRad) * Math.sin(decRad)) / (Math.cos(latRad) * Math.cos(decRad));
    if (cosH > 1) return 0;
    if (cosH < -1) return Math.PI;
    return Math.acos(cosH);
  };

  // Sunrise / Sunset: alpha = -0.833°
  const hSunrise = getHourAngle(-0.833);
  const sunriseDuration = (hSunrise * 180) / (Math.PI * 15);

  // Fajr: 18° below horizon
  const hFajr = getHourAngle(-18);
  const fajrDuration = (hFajr * 180) / (Math.PI * 15);

  // Isha: 17° below horizon
  const hIsha = getHourAngle(-17);
  const ishaDuration = (hIsha * 180) / (Math.PI * 15);

  // Asr: standard shadow length
  const noonSunAngle = 90 - city.latitude + declination;
  const noonSunAngleRad = (noonSunAngle * Math.PI) / 180;
  const minShadow = 1 / Math.tan(noonSunAngleRad);
  const asrSunAngle = Math.atan(1 / (1 + minShadow));
  const hAsr = getHourAngle((asrSunAngle * 180) / Math.PI);
  const asrDuration = (hAsr * 180) / (Math.PI * 15);

  const formatHours = (hoursVal: number): string => {
    let normalized = (hoursVal + 24) % 24;
    const h = Math.floor(normalized);
    const m = Math.floor((normalized - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  const fajrTime = solarNoonLocal - fajrDuration;
  const sunriseTime = solarNoonLocal - sunriseDuration;
  const dhuhrTime = solarNoonLocal + (4 / 60);
  const asrTime = solarNoonLocal + asrDuration;
  const maghribTime = solarNoonLocal + sunriseDuration + (3 / 60);
  const ishaTime = solarNoonLocal + ishaDuration;

  return {
    fajr: formatHours(fajrTime),
    sunrise: formatHours(sunriseTime),
    dhuhr: formatHours(dhuhrTime),
    asr: formatHours(asrTime),
    maghrib: formatHours(maghribTime),
    isha: formatHours(ishaTime),
  };
}

export function getNextPrayer(times: DayPrayerTimes, now: Date = new Date()): { name: string; time: string; remainingMinutes: number } {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const toMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const schedule = [
    { name: 'Fajr', time: times.fajr, minutes: toMinutes(times.fajr) },
    { name: 'Dhuhr', time: times.dhuhr, minutes: toMinutes(times.dhuhr) },
    { name: 'Asr', time: times.asr, minutes: toMinutes(times.asr) },
    { name: 'Maghrib', time: times.maghrib, minutes: toMinutes(times.maghrib) },
    { name: 'Isha', time: times.isha, minutes: toMinutes(times.isha) },
  ];

  for (const prayer of schedule) {
    if (prayer.minutes > currentMinutes) {
      return {
        name: prayer.name,
        time: prayer.time,
        remainingMinutes: prayer.minutes - currentMinutes,
      };
    }
  }

  // After Isha, next is Fajr tomorrow
  const fajrMinsTomorrow = toMinutes(times.fajr) + 24 * 60;
  return {
    name: 'Fajr (demain)',
    time: times.fajr,
    remainingMinutes: fajrMinsTomorrow - currentMinutes,
  };
}

/**
 * Request real user GPS position via browser Geolocation API
 */
export async function getBrowserLocation(): Promise<CityLocation> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("La géolocalisation n'est pas supportée par votre navigateur."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const tzOffset = -new Date().getTimezoneOffset() / 60;

        resolve({
          name: 'Ma Position GPS',
          country: `Coord. (${lat.toFixed(2)}°, ${lng.toFixed(2)}°)`,
          latitude: lat,
          longitude: lng,
          timezone: tzOffset,
          isGps: true,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  });
}
