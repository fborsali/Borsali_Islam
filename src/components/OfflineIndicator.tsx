import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-950/95 border border-amber-700/60 px-4 py-3 text-xs font-medium text-amber-100 shadow-xl backdrop-blur-md">
      <WifiOff className="h-4 w-4 text-amber-400 shrink-0" />
      <span>
        Mode Hors-Ligne actif — Les modules sauvegardés (Piliers, Prière, Citadelle, Quiz) restent accessibles.
      </span>
    </div>
  );
};
