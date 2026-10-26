/**
 * Exclusive Audio Manager for Quranic recitations and prayer guides.
 * Supports complete Surah streaming, seeking, time updates, and reciter switching.
 * Guarantees a single-channel playback invariant: never overlapping audio tracks.
 */

export interface AudioTimeUpdate {
  currentTime: number;
  duration: number;
  progressPercent: number;
}

class RecitationPlayer {
  private currentAudio: HTMLAudioElement | null = null;
  private currentPlayId: number = 0;
  private activeFallbackUtterance: SpeechSynthesisUtterance | null = null;

  private onTimeUpdateCallback: ((time: AudioTimeUpdate) => void) | null = null;
  private onEndCallback: (() => void) | null = null;
  private onStartCallback: (() => void) | null = null;

  /**
   * Plays a complete Surah MP3 stream from beginning to end
   */
  public playSurahStream(
    audioUrl: string,
    callbacks?: {
      onStart?: () => void;
      onEnd?: () => void;
      onTimeUpdate?: (time: AudioTimeUpdate) => void;
      onError?: () => void;
    }
  ): boolean {
    this.stop();

    const thisPlayId = ++this.currentPlayId;
    this.onStartCallback = callbacks?.onStart || null;
    this.onEndCallback = callbacks?.onEnd || null;
    this.onTimeUpdateCallback = callbacks?.onTimeUpdate || null;

    try {
      const audio = new Audio();
      audio.preload = 'auto';
      this.currentAudio = audio;

      audio.onplay = () => {
        if (this.currentPlayId !== thisPlayId) return;
        if (this.onStartCallback) this.onStartCallback();
      };

      audio.ontimeupdate = () => {
        if (this.currentPlayId !== thisPlayId) return;
        if (this.onTimeUpdateCallback && audio.duration && !isNaN(audio.duration)) {
          this.onTimeUpdateCallback({
            currentTime: audio.currentTime,
            duration: audio.duration,
            progressPercent: (audio.currentTime / audio.duration) * 100
          });
        }
      };

      audio.onended = () => {
        if (this.currentPlayId !== thisPlayId) return;
        this.cleanup();
        if (this.onEndCallback) this.onEndCallback();
      };

      audio.onerror = () => {
        if (this.currentPlayId !== thisPlayId) return;
        this.cleanup();
        if (callbacks?.onError) callbacks.onError();
      };

      audio.src = audioUrl;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (this.currentPlayId !== thisPlayId) return;
          this.cleanup();
          if (callbacks?.onError) callbacks.onError();
        });
      }

      return true;
    } catch {
      this.cleanup();
      return false;
    }
  }

  /**
   * Play an individual verse or prayer phrase with fallback
   */
  public playAyah(
    audioUrl?: string,
    arabicTextFallback?: string,
    onStart?: () => void,
    onEnd?: () => void
  ): boolean {
    this.stop();

    const thisPlayId = ++this.currentPlayId;

    if (audioUrl) {
      try {
        const audio = new Audio();
        audio.preload = 'auto';
        this.currentAudio = audio;

        audio.onended = () => {
          if (this.currentPlayId !== thisPlayId) return;
          this.cleanup();
          if (onEnd) onEnd();
        };

        audio.onerror = () => {
          if (this.currentPlayId !== thisPlayId) return;
          this.cleanup();
          if (arabicTextFallback && typeof window !== 'undefined' && 'speechSynthesis' in window) {
            this.speakArabic(arabicTextFallback, thisPlayId, onStart, onEnd);
          } else {
            if (onEnd) onEnd();
          }
        };

        audio.src = audioUrl;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (this.currentPlayId !== thisPlayId) {
                audio.pause();
                return;
              }
              if (onStart) onStart();
            })
            .catch(() => {
              if (this.currentPlayId !== thisPlayId) return;
              this.cleanup();
              if (arabicTextFallback && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                this.speakArabic(arabicTextFallback, thisPlayId, onStart, onEnd);
              } else {
                if (onEnd) onEnd();
              }
            });
        }
        return true;
      } catch {
        // Fallback
      }
    }

    if (arabicTextFallback && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.speakArabic(arabicTextFallback, thisPlayId, onStart, onEnd);
      return true;
    }

    if (onEnd) onEnd();
    return false;
  }

  public pause(): void {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
    }
  }

  public resume(): void {
    if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play().catch(() => {});
    }
  }

  public seek(seconds: number): void {
    if (this.currentAudio && !isNaN(this.currentAudio.duration)) {
      this.currentAudio.currentTime = Math.max(0, Math.min(seconds, this.currentAudio.duration));
    }
  }

  public setPlaybackRate(rate: number): void {
    if (this.currentAudio) {
      this.currentAudio.playbackRate = rate;
    }
  }

  public getCurrentTime(): number {
    return this.currentAudio ? this.currentAudio.currentTime : 0;
  }

  public getDuration(): number {
    return this.currentAudio && !isNaN(this.currentAudio.duration) ? this.currentAudio.duration : 0;
  }

  public isPaused(): boolean {
    return this.currentAudio ? this.currentAudio.paused : true;
  }

  public isPlaying(): boolean {
    const audioPlaying = this.currentAudio !== null && !this.currentAudio.paused;
    const speechPlaying = typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking;
    return audioPlaying || speechPlaying;
  }

  public stop(): void {
    this.currentPlayId++;
    this.cleanup();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Safe fallback
      }
    }
    this.activeFallbackUtterance = null;
    this.onTimeUpdateCallback = null;
    this.onEndCallback = null;
    this.onStartCallback = null;
  }

  private speakArabic(
    text: string,
    sessionId: number,
    onStart?: () => void,
    onEnd?: () => void
  ) {
    if (this.currentPlayId !== sessionId) return;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;

      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
      if (arabicVoice) utterance.voice = arabicVoice;

      utterance.onstart = () => {
        if (this.currentPlayId !== sessionId) {
          window.speechSynthesis.cancel();
          return;
        }
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.activeFallbackUtterance = null;
        if (this.currentPlayId === sessionId && onEnd) onEnd();
      };

      utterance.onerror = () => {
        this.activeFallbackUtterance = null;
        if (this.currentPlayId === sessionId && onEnd) onEnd();
      };

      this.activeFallbackUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  private cleanup(): void {
    if (this.currentAudio) {
      try {
        this.currentAudio.onplay = null;
        this.currentAudio.ontimeupdate = null;
        this.currentAudio.onended = null;
        this.currentAudio.onerror = null;
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio.src = '';
      } catch {
        // Safe fallback
      }
      this.currentAudio = null;
    }
  }
}

export const recitationPlayer = new RecitationPlayer();
