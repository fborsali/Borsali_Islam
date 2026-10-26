import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { QuizQuestion } from '../types';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Clock,
  ArrowUp,
  ArrowDown,
  HelpCircle,
  Trophy,
  BookOpen,
  Compass,
  Moon,
  Sparkles,
  Users,
  HeartHandshake,
  Layers,
  Shuffle
} from 'lucide-react';

interface QuizSectionProps {
  initialCategory?: 'all' | 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general';
}

interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'quran' | 'prayer' | 'pillars' | 'prophets' | 'general'>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'facile' | 'moyen' | 'avance'>('all');
  const [quizMode, setQuizMode] = useState<'learn' | 'timed'>('learn');
  const [sessionLength, setSessionLength] = useState<'10' | '20' | 'all'>('10');

  // Quiz progression
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userScore, setUserScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(30);

  // Ordering question state
  const [currentOrderItems, setCurrentOrderItems] = useState<{ id: string; text: string; correctPos: number }[]>([]);

  // User badges in localStorage
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('almanara_badges');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter questions based on selected category and level
  const baseFilteredQuestions = useMemo(() => {
    return QUIZ_QUESTIONS.filter((q) => {
      const matchCat = selectedCategory === 'all' || q.category === selectedCategory;
      const matchLevel = selectedLevel === 'all' || q.difficulty === selectedLevel;
      return matchCat && matchLevel;
    });
  }, [selectedCategory, selectedLevel]);

  // Session questions (optionally sliced to 10 or 20 questions)
  const sessionQuestions = useMemo(() => {
    if (sessionLength === 'all') return baseFilteredQuestions;
    const limit = parseInt(sessionLength, 10);
    return baseFilteredQuestions.slice(0, limit);
  }, [baseFilteredQuestions, sessionLength]);

  const currentQuestion: QuizQuestion | undefined = sessionQuestions[activeQuestionIndex];

  // Initialize order items whenever an order question appears
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'order-steps' && currentQuestion.orderItems) {
      const shuffled = [...currentQuestion.orderItems].sort(() => Math.random() - 0.5);
      setCurrentOrderItems(shuffled);
    }
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setTimeRemaining(30);
  }, [activeQuestionIndex, currentQuestion]);

  // Timed mode countdown
  useEffect(() => {
    if (quizMode !== 'timed' || isQuizCompleted || isAnswerSubmitted) return;

    if (timeRemaining <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizMode, timeRemaining, isQuizCompleted, isAnswerSubmitted]);

  const handleTimeOut = () => {
    setIsAnswerSubmitted(true);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(idx);
    setIsAnswerSubmitted(true);

    if (currentQuestion && currentQuestion.correctIndex === idx) {
      setUserScore(prev => prev + 1);
    }
  };

  const handleMoveOrderItem = (index: number, direction: 'up' | 'down') => {
    if (isAnswerSubmitted) return;
    const newItems = [...currentOrderItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setCurrentOrderItems(newItems);
  };

  const handleValidateOrder = () => {
    setIsAnswerSubmitted(true);
    let isCorrect = true;
    currentOrderItems.forEach((item, idx) => {
      if (item.correctPos !== idx + 1) {
        isCorrect = false;
      }
    });

    if (isCorrect) {
      setUserScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < sessionQuestions.length - 1) {
      setActiveQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsQuizCompleted(true);
    const finalScore = userScore + (isCurrentCorrect() ? 1 : 0);
    const percentage = Math.round((finalScore / sessionQuestions.length) * 100);

    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }

    // Evaluate badges
    const newBadges = [...unlockedBadges];
    if (!newBadges.includes('first_quiz')) newBadges.push('first_quiz');
    if (percentage === 100 && !newBadges.includes('perfect')) newBadges.push('perfect');
    if (selectedCategory === 'quran' && percentage >= 70 && !newBadges.includes('quran_master')) newBadges.push('quran_master');
    if (selectedCategory === 'prayer' && percentage >= 70 && !newBadges.includes('prayer_master')) newBadges.push('prayer_master');
    if (selectedCategory === 'pillars' && percentage >= 70 && !newBadges.includes('pillars_master')) newBadges.push('pillars_master');
    if (selectedLevel === 'avance' && percentage >= 70 && !newBadges.includes('expert_level')) newBadges.push('expert_level');

    setUnlockedBadges(newBadges);
    try {
      localStorage.setItem('almanara_badges', JSON.stringify(newBadges));
    } catch {
      // Safe fallback
    }
  };

  const restartQuiz = () => {
    setActiveQuestionIndex(0);
    setUserScore(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setIsQuizCompleted(false);
    setTimeRemaining(30);
  };

  const isCurrentCorrect = (): boolean => {
    if (!currentQuestion) return false;
    if (currentQuestion.type === 'multiple-choice') {
      return selectedOptionIndex === currentQuestion.correctIndex;
    }
    if (currentQuestion.type === 'order-steps') {
      return currentOrderItems.every((item, idx) => item.correctPos === idx + 1);
    }
    return false;
  };

  const allBadges: Badge[] = [
    { id: 'first_quiz', title: "Premier Pas", description: "Terminer son premier quiz", icon: "🌱", unlocked: unlockedBadges.includes('first_quiz') },
    { id: 'quran_master', title: "Connaisseur du Coran", description: "Score ≥ 70% sur le Coran", icon: "📖", unlocked: unlockedBadges.includes('quran_master') },
    { id: 'prayer_master', title: "Gardien de la Salat", description: "Score ≥ 70% sur la Prière", icon: "🧭", unlocked: unlockedBadges.includes('prayer_master') },
    { id: 'pillars_master', title: "Maître des Piliers", description: "Score ≥ 70% sur les Piliers", icon: "🌙", unlocked: unlockedBadges.includes('pillars_master') },
    { id: 'expert_level', title: "Savant Émérite", description: "Score ≥ 70% en Niveau Avancé", icon: "🎓", unlocked: unlockedBadges.includes('expert_level') },
    { id: 'perfect', title: "Excellence Spirituelle", description: "Sans-faute (100% au Quiz)", icon: "👑", unlocked: unlockedBadges.includes('perfect') },
  ];

  // Count by level
  const countFacile = useMemo(() => QUIZ_QUESTIONS.filter(q => q.difficulty === 'facile').length, []);
  const countMoyen = useMemo(() => QUIZ_QUESTIONS.filter(q => q.difficulty === 'moyen').length, []);
  const countAvance = useMemo(() => QUIZ_QUESTIONS.filter(q => q.difficulty === 'avance').length, []);

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span>Banque de {QUIZ_QUESTIONS.length} Questions Vérifiées</span>
            <span aria-hidden="true">·</span>
            <span>Structuré par Niveaux & Catégories</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
            Quiz Interactifs : Débutant, Intermédiaire & Avancé
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Validez vos acquis à travers une centaine de questions soigneusement rédigées et référencées, du niveau d'initiation jusqu'au niveau expert.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg shrink-0">
          <button
            onClick={() => {
              setQuizMode('learn');
              restartQuiz();
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              quizMode === 'learn'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Mode Apprentissage
          </button>
          <button
            onClick={() => {
              setQuizMode('timed');
              restartQuiz();
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              quizMode === 'timed'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Mode Chrono (30s)</span>
          </button>
        </div>
      </div>

      {/* Level Selection Tabs (Mandatory by prompt: "par niveau") */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4">
        <div>
          <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
            1. Choisissez votre Niveau de Connaissance :
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'all' as const, label: "Tous les Niveaux", desc: "Mixte complet", count: QUIZ_QUESTIONS.length, color: 'text-stone-900' },
              { id: 'facile' as const, label: "Niveau Débutant", desc: "Bases & fondamentaux", count: countFacile, color: 'text-emerald-700' },
              { id: 'moyen' as const, label: "Niveau Intermédiaire", desc: "Fiqh & approfondissement", count: countMoyen, color: 'text-amber-700' },
              { id: 'avance' as const, label: "Niveau Avancé / Expert", desc: "Tajweed & sciences pointues", count: countAvance, color: 'text-rose-700' },
            ].map((lvl) => {
              const isSelected = selectedLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onClick={() => {
                    setSelectedLevel(lvl.id);
                    restartQuiz();
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-emerald-500/30'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold">{lvl.label}</span>
                    <span className={`font-mono text-xs font-semibold px-1.5 py-0.5 rounded ${isSelected ? 'bg-stone-800 text-emerald-300' : 'bg-stone-200 text-stone-700'}`}>
                      {lvl.count}
                    </span>
                  </div>
                  <div className={`text-[11px] ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {lvl.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filters */}
        <div className="pt-3 border-t border-stone-100">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
            2. Filtrer par Thématique :
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all' as const, label: "Toutes les Thématiques", icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'quran' as const, label: "Le Saint Coran", icon: <BookOpen className="w-3.5 h-3.5" /> },
              { id: 'prayer' as const, label: "Prière & Ablutions", icon: <Compass className="w-3.5 h-3.5" /> },
              { id: 'pillars' as const, label: "Piliers & Foi", icon: <Moon className="w-3.5 h-3.5" /> },
              { id: 'prophets' as const, label: "Récits des Prophètes", icon: <Users className="w-3.5 h-3.5" /> },
              { id: 'general' as const, label: "Hadith & Comportement", icon: <HeartHandshake className="w-3.5 h-3.5" /> },
            ].map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = QUIZ_QUESTIONS.filter(q => (cat.id === 'all' || q.category === cat.id) && (selectedLevel === 'all' || q.difficulty === selectedLevel)).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    restartQuiz();
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs font-semibold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1 rounded ${isSelected ? 'bg-emerald-950 text-emerald-200' : 'bg-stone-200 text-stone-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Series Length Switcher */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span>Longueur de session :</span>
            {(['10', '20', 'all'] as const).map((len) => (
              <button
                key={len}
                onClick={() => {
                  setSessionLength(len);
                  restartQuiz();
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                  sessionLength === len
                    ? 'bg-stone-900 text-white font-bold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {len === 'all' ? 'Toutes les questions' : `${len} questions`}
              </button>
            ))}
          </div>

          <div className="text-stone-500 font-mono text-[11px]">
            {sessionQuestions.length} questions dans cette série
          </div>
        </div>
      </div>

      {/* Main Quiz Area */}
      {!isQuizCompleted && currentQuestion ? (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          {/* Progress Header */}
          <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-stone-700">
                Question {activeQuestionIndex + 1} sur {sessionQuestions.length}
              </span>
              <div className="w-32 h-2 rounded-full bg-stone-200 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${((activeQuestionIndex + 1) / sessionQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                currentQuestion.difficulty === 'facile'
                  ? 'bg-emerald-100 text-emerald-800'
                  : currentQuestion.difficulty === 'moyen'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}>
                {currentQuestion.difficulty === 'facile' ? 'Débutant' : currentQuestion.difficulty === 'moyen' ? 'Intermédiaire' : 'Avancé'}
              </span>

              {quizMode === 'timed' && (
                <div className={`flex items-center gap-1 font-mono font-bold ${timeRemaining <= 10 ? 'text-rose-600 animate-pulse' : 'text-stone-700'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{timeRemaining}s</span>
                </div>
              )}
              <div className="text-stone-600 font-mono font-medium">
                Score : <strong className="text-emerald-800 font-bold">{userScore}</strong> / {activeQuestionIndex}
              </div>
            </div>
          </div>

          {/* Question Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                {currentQuestion.category === 'quran' ? 'Coran & Révélation' : currentQuestion.category === 'prayer' ? 'Prière & Ablutions' : currentQuestion.category === 'pillars' ? 'Piliers & Foi' : currentQuestion.category === 'prophets' ? 'Récits des Prophètes' : 'Hadith & Sagesse'}
                {currentQuestion.type === 'order-steps' && ' · Défi Ordonnancement'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-900 leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Multiple Choice */}
            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  let style = "bg-stone-50/70 border-stone-200 text-stone-800 hover:border-emerald-300";
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      style = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500";
                    } else if (isSelected && !isCorrect) {
                      style = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                    } else {
                      style = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between text-sm ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-stone-200/80 text-stone-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Ordering Steps */}
            {currentQuestion.type === 'order-steps' && (
              <div className="space-y-4">
                <div className="text-xs text-stone-500">
                  Utilisez les flèches pour placer les étapes dans le bon ordre chronologique du haut vers le bas :
                </div>

                <div className="space-y-2">
                  {currentOrderItems.map((item, idx) => {
                    const isCorrectPosition = item.correctPos === idx + 1;
                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded-xl border flex items-center justify-between text-sm transition-all ${
                          isAnswerSubmitted
                            ? isCorrectPosition
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                              : 'bg-rose-50 border-rose-300 text-rose-950'
                            : 'bg-stone-50 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span>{item.text}</span>
                        </div>

                        {!isAnswerSubmitted ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleMoveOrderItem(idx, 'up')}
                              disabled={idx === 0}
                              className="p-1 rounded bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30"
                              title="Monter"
                            >
                              <ArrowUp className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleMoveOrderItem(idx, 'down')}
                              disabled={idx === currentOrderItems.length - 1}
                              className="p-1 rounded bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30"
                              title="Descendre"
                            >
                              <ArrowDown className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs font-mono font-medium">
                            {isCorrectPosition ? (
                              <span className="text-emerald-700 font-bold">✓ Correct</span>
                            ) : (
                              <span className="text-rose-700">Devait être en {item.correctPos}</span>
                            )}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!isAnswerSubmitted && (
                  <button
                    onClick={handleValidateOrder}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                  >
                    Valider mon ordre
                  </button>
                )}
              </div>
            )}

            {/* Explanation box */}
            {isAnswerSubmitted && (
              <div className={`p-4 sm:p-5 rounded-xl border space-y-2 ${
                isCurrentCorrect()
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/70 border-amber-200 text-amber-950'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {isCurrentCorrect() ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Excellente réponse !</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-amber-700" />
                      <span>Réponse incorrecte ou incomplète</span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.source && (
                  <div className="text-[11px] opacity-75 font-mono pt-1">
                    Référence : {currentQuestion.source}
                  </div>
                )}
              </div>
            )}

            {/* Next question button */}
            {isAnswerSubmitted && (
              <div className="pt-4 border-t border-stone-100 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                >
                  {activeQuestionIndex < sessionQuestions.length - 1 ? 'Question suivante →' : 'Voir les résultats du quiz'}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center space-y-6 shadow-xs max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display text-stone-900">
              Session de Quiz Terminée !
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Félicitations pour votre persévérance dans l'apprentissage du savoir.
            </p>
          </div>

          <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 max-w-sm mx-auto">
            <div className="text-xs text-stone-500 uppercase tracking-wider mb-1 font-semibold">
              Votre Score Final
            </div>
            <div className="text-4xl font-bold font-mono text-emerald-950 tabular-nums">
              {userScore} / {sessionQuestions.length}
            </div>
            <div className="text-sm text-stone-700 mt-2 font-medium">
              Taux de réussite : {Math.round((userScore / Math.max(1, sessionQuestions.length)) * 100)}%
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={restartQuiz}
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recommencer cette série</span>
            </button>
            <button
              onClick={() => {
                setSelectedLevel('all');
                setSelectedCategory('all');
                restartQuiz();
              }}
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
            >
              Défi Tous Niveaux (100+ questions)
            </button>
          </div>
        </div>
      )}

      {/* Badges & Achievements */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Vos Badges & Trophées d'Apprentissage
            </h3>
            <p className="text-xs text-stone-500">
              Débloquez des distinctions honorifiques en validant vos acquis.
            </p>
          </div>
          <div className="text-xs font-mono font-bold text-emerald-800">
            {allBadges.filter(b => b.unlocked).length} / {allBadges.length} Débloqués
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {allBadges.map((badge) => (
            <div
              key={badge.id}
              className={`p-3.5 rounded-xl border text-center transition-all ${
                badge.unlocked
                  ? 'bg-amber-50/60 border-amber-300 text-stone-900'
                  : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
              }`}
            >
              <div className="text-2xl mb-1">{badge.icon}</div>
              <div className="text-xs font-bold truncate">{badge.title}</div>
              <div className="text-[10px] text-stone-500 mt-0.5 line-clamp-2">
                {badge.description}
              </div>
              <div className="text-[9px] font-mono mt-2 uppercase font-semibold">
                {badge.unlocked ? '✓ Obtenu' : 'Verrouillé'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
