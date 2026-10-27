import React, { useState } from 'react';
import {
  Smartphone,
  Download,
  Share,
  PlusSquare,
  MoreVertical,
  CheckCircle2,
  X,
  Copy,
  Check,
  Sparkles,
  WifiOff,
  Zap,
  ShieldCheck,
} from 'lucide-react';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  onTriggerNativeInstall: () => Promise<boolean>;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  isInstallable,
  isInstalled,
  isIOS,
  isAndroid,
  onTriggerNativeInstall,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios'>(
    isIOS ? 'ios' : 'android'
  );
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [installing, setInstalling] = useState(false);

  if (!isOpen) return null;

  const appUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://ais-pre-xbg4kenlgdtz6tw47sc2mx-522415795972.europe-west2.run.app';

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&color=064e3b&bgcolor=ffffff&data=${encodeURIComponent(
    appUrl
  )}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeInstall = async () => {
    setInstalling(true);
    try {
      const accepted = await onTriggerNativeInstall();
      if (accepted) {
        onClose();
      }
    } finally {
      setInstalling(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-800/90 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 font-arabic text-3xl font-bold shadow-lg shrink-0">
              من
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-1">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Application Mobile (PWA)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Installer Al-Manara sur votre téléphone
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5">
                Accédez au Coran, aux horaires de prière et aux invocations directement depuis votre écran d'accueil.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 dark:text-stone-200">
          {/* Status if already installed */}
          {isInstalled && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-sm">
                <p className="font-bold">Al-Manara est déjà installée sur cet appareil !</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Vous pouvez la lancer à tout moment depuis l'écran d'accueil de votre téléphone.
                </p>
              </div>
            </div>
          )}

          {/* Direct One-Click Install Button (When Chrome/Android supports beforeinstallprompt) */}
          {isInstallable && !isInstalled && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Installation directe disponible</span>
                </div>
                <h3 className="text-base font-bold">
                  Installez l'application en un seul clic
                </h3>
                <p className="text-xs text-emerald-100">
                  Sans passer par le Play Store ni l'App Store — léger, rapide et sécurisé.
                </p>
              </div>
              <button
                onClick={handleNativeInstall}
                disabled={installing}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{installing ? 'Installation...' : "Installer maintenant"}</span>
              </button>
            </div>
          )}

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700 flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                  Plein Écran Rapide
                </h4>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5">
                  S'ouvre comme une vraie application native avec son icône dédiée.
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700 flex items-start gap-3">
              <WifiOff className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                  Mode Hors-Ligne
                </h4>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5">
                  Révisez la prière, la Citadelle, les 99 Noms et les quiz même sans internet.
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white">
                  100% Gratuit & Sans Pub
                </h4>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5">
                  Sadaqa Jariya dédiée par Fethi Borsali, respectueuse de votre vie privée.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Selector Tabs (Android vs iPhone/iPad) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                Guide d'installation selon votre téléphone :
              </h3>
              {(isAndroid || isIOS) && (
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Appareil détecté : {isIOS ? 'iPhone / iPad' : 'Android'}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-4">
              <button
                onClick={() => setSelectedPlatform('android')}
                className={`py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedPlatform === 'android'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Android (Samsung, Xiaomi...)</span>
              </button>
              <button
                onClick={() => setSelectedPlatform('ios')}
                className={`py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedPlatform === 'ios'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>iPhone & iPad (Safari)</span>
              </button>
            </div>

            {selectedPlatform === 'android' ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-stone-800/80 border border-emerald-200/80 dark:border-stone-700 space-y-3">
                <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                  <span>Comment installer sur Android (Chrome) :</span>
                </h4>
                <ol className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      Ouvrez <strong>Al-Manara</strong> dans le navigateur <strong>Google Chrome</strong> sur votre téléphone Android.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span>Appuyez sur le menu</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-stone-300 text-stone-800 font-semibold text-xs">
                        <MoreVertical className="w-3.5 h-3.5 mr-0.5" /> (3 petits points)
                      </span>
                      <span>en haut à droite de Chrome.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span>Sélectionnez</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-800 text-white font-semibold text-xs">
                        <Download className="w-3.5 h-3.5" /> Installer l'application
                      </span>
                      <span>ou <strong>« Ajouter à l'écran d'accueil »</strong>.</span>
                    </div>
                  </li>
                </ol>
              </div>
            ) : (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-stone-800/80 border border-emerald-200/80 dark:border-stone-700 space-y-3">
                <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                  <span>Comment installer sur iPhone / iPad (Safari) :</span>
                </h4>
                <ol className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      Ouvrez <strong>Al-Manara</strong> dans le navigateur <strong>Safari</strong> de votre iPhone ou iPad.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span>Appuyez sur le bouton <strong>Partager</strong></span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-stone-300 text-stone-800 font-semibold text-xs">
                        <Share className="w-3.5 h-3.5 text-blue-600" /> Partager
                      </span>
                      <span>situé en bas de l'écran.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span>Faites défiler vers le bas et appuyez sur</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-800 text-white font-semibold text-xs">
                        <PlusSquare className="w-3.5 h-3.5" /> Sur l'écran d'accueil
                      </span>
                      <span>puis validez avec <strong>« Ajouter »</strong> en haut à droite.</span>
                    </div>
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* QR Code & Direct Link Section for Desktop Users scanning with their Phone */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center gap-5">
            <div className="bg-white p-2.5 rounded-2xl border border-stone-200 shadow-sm shrink-0">
              <img
                src={qrCodeUrl}
                alt="QR Code pour ouvrir Al-Manara sur téléphone"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                loading="lazy"
              />
            </div>
            <div className="space-y-2.5 text-center sm:text-left flex-1">
              <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                Vous êtes sur ordinateur ? Scannez avec votre téléphone
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Ouvrez l'appareil photo de votre téléphone et pointez-le vers ce QR Code, ou copiez le lien ci-dessous pour l'ouvrir directement sur votre mobile :
              </p>
              <div className="flex items-center gap-2 max-w-md mx-auto sm:mx-0">
                <input
                  type="text"
                  readOnly
                  value={appUrl}
                  className="flex-1 text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg px-3 py-2 text-stone-700 dark:text-stone-300 font-mono truncate focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-300" />
                      <span>Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 dark:bg-stone-900/90 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <span className="text-[11px] text-stone-500">
            Al-Manara PWA • Compatible Android & iOS
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
