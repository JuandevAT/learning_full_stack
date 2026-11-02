import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';
import { Play, Pause, RotateCcw, Save, CheckCircle, Clock3, Sparkles, Terminal } from 'lucide-react';

type SessionPhase = 'recall' | 'theory' | 'practice' | 'log';

interface PhaseConfig {
  key: SessionPhase;
  durationSeconds: number;
}

const PHASES: PhaseConfig[] = [
  { key: 'recall', durationSeconds: 10 * 60 },
  { key: 'theory', durationSeconds: 15 * 60 },
  { key: 'practice', durationSeconds: 25 * 60 },
  { key: 'log', durationSeconds: 10 * 60 },
];

export const StudyTimerView: React.FC = () => {
  const { t } = useI18n();

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(PHASES[0].durationSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');
  const [showSavedFeedback, setShowSavedFeedback] = useState<boolean>(false);
  const [savedNotesList, setSavedNotesList] = useState<Array<{ id: string; timestamp: string; phase: string; text: string }>>([]);

  // Load existing notes from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('devpath_study_notes');
    if (saved) {
      try {
        setSavedNotesList(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved notes', e);
      }
    }
  }, []);

  // Timer countdown effect
  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      if (currentPhaseIndex < PHASES.length - 1) {
        const nextIndex = currentPhaseIndex + 1;
        setCurrentPhaseIndex(nextIndex);
        setTimeLeft(PHASES[nextIndex].durationSeconds);
      } else {
        setIsRunning(false);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, currentPhaseIndex]);

  const switchPhase = (index: number) => {
    setCurrentPhaseIndex(index);
    setTimeLeft(PHASES[index].durationSeconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(PHASES[currentPhaseIndex].durationSeconds);
  };

  const handleSaveNotes = () => {
    if (!notes.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      phase: t(`timer.phases.${PHASES[currentPhaseIndex].key}`),
      text: notes.trim(),
    };

    const updated = [newEntry, ...savedNotesList.slice(0, 4)];
    setSavedNotesList(updated);
    localStorage.setItem('devpath_study_notes', JSON.stringify(updated));
    setNotes('');
    setShowSavedFeedback(true);
    setTimeout(() => setShowSavedFeedback(false), 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentPhase = PHASES[currentPhaseIndex];
  const progressPercent = ((currentPhase.durationSeconds - timeLeft) / currentPhase.durationSeconds) * 100;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#3fb950]/10 text-emerald-700 dark:text-[#3fb950] text-xs font-mono font-semibold mb-2 border border-emerald-200/80 dark:border-[#3fb950]/30 shadow-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>deliberate-practice.sh --phase=active</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[#e6edf3]">
          {t('timer.title')}
        </h1>
        <p className="text-slate-600 dark:text-[#8b949e] mt-1 text-sm sm:text-base">
          {t('timer.subtitle')}
        </p>
      </div>

      {/* Main Timer Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timer Control Card */}
        <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] p-8 shadow-xs flex flex-col items-center justify-center text-center relative overflow-hidden dp-card-hover">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 dark:bg-[#3fb950]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Phase Selector Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10 font-mono">
            {PHASES.map((p, index) => (
              <button
                key={p.key}
                onClick={() => switchPhase(index)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPhaseIndex === index
                    ? 'bg-emerald-600 dark:bg-[#3fb950] text-white dark:text-[#0d1117] shadow-md shadow-emerald-500/25 scale-105'
                    : 'bg-slate-100 dark:bg-[#21262d] text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] border border-slate-200 dark:border-[#30363d]'
                }`}
              >
                ${' '}{t(`timer.phases.${p.key}`)}
              </button>
            ))}
          </div>

          {/* Large Countdown Display */}
          <div className="relative my-4 z-10">
            <div className="text-7xl sm:text-8xl font-mono font-extrabold text-slate-900 dark:text-[#e6edf3] tracking-wider dp-text-glow">
              {formatTime(timeLeft)}
            </div>
            <div className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-[#3fb950] font-bold mt-3 flex items-center justify-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t(`timer.phases.${currentPhase.key}`)}</span>
            </div>
          </div>

          <p className="max-w-md text-sm text-slate-600 dark:text-[#8b949e] mt-2 z-10 font-normal">
            {t(`timer.phaseDescriptions.${currentPhase.key}`)}
          </p>

          {/* Progress Bar */}
          <div className="w-full max-w-md bg-slate-200 dark:bg-[#21262d] h-2.5 rounded-full overflow-hidden mt-6 z-10 border border-slate-300/40 dark:border-[#30363d]">
            <div
              className="bg-gradient-to-r from-emerald-600 to-teal-400 dark:from-[#3fb950] dark:to-[#7ee787] h-full transition-all duration-300 shadow-[0_0_12px_rgba(63,185,80,0.4)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-8 z-10">
            <button
              onClick={toggleTimer}
              className={`inline-flex items-center space-x-2 px-7 py-3 rounded-xl font-bold font-mono transition-all shadow-lg cursor-pointer ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/25'
                  : 'bg-emerald-600 hover:bg-emerald-500 dark:bg-[#3fb950] dark:hover:bg-[#4ac261] text-white dark:text-[#0d1117] shadow-emerald-500/25'
              }`}
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              <span>{isRunning ? t('timer.pause') : t('timer.start')}</span>
            </button>

            <button
              onClick={resetTimer}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#21262d] dark:hover:bg-[#30363d] text-slate-700 dark:text-[#8b949e] dark:hover:text-[#e6edf3] font-semibold border border-slate-200 dark:border-[#30363d] shadow-xs transition-all cursor-pointer"
              title={t('timer.reset')}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Note Taking & Evidence Logger */}
        <div className="rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] p-6 flex flex-col justify-between shadow-xs dp-card-hover">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-slate-900 dark:text-[#e6edf3] flex items-center space-x-2 font-mono">
                <Clock3 className="w-4 h-4 text-emerald-600 dark:text-[#3fb950]" />
                <span>$ session.log</span>
              </h2>
              {showSavedFeedback && (
                <span className="text-xs text-emerald-600 dark:text-[#3fb950] font-semibold font-mono flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>saved.ok</span>
                </span>
              )}
            </div>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('timer.notesPlaceholder')}
              rows={6}
              className="w-full bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-[#30363d] rounded-xl p-3.5 text-sm text-slate-800 dark:text-[#e6edf3] placeholder-slate-400 dark:placeholder-[#8b949e]/60 focus:outline-none focus:border-emerald-500 dark:focus:border-[#3fb950] focus:ring-1 focus:ring-emerald-500 dark:focus:ring-[#3fb950] resize-none font-mono transition-all dp-scrollbar"
            />

            <button
              onClick={handleSaveNotes}
              disabled={!notes.trim()}
              className="w-full mt-3.5 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-[#238636] dark:hover:bg-[#2ea043] text-emerald-700 dark:text-white font-semibold font-mono border border-emerald-200 dark:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>{t('timer.saveNotes')}</span>
            </button>
          </div>

          {/* Recent Notes Preview */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#30363d]">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-[#8b949e] mb-2">
              {t('timer.recentNotes')}
            </h3>
            {savedNotesList.length === 0 ? (
              <p className="text-xs text-slate-400 dark:text-[#8b949e] italic font-mono">// No notes logged yet today.</p>
            ) : (
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1 dp-scrollbar">
                {savedNotesList.map((entry) => (
                  <div key={entry.id} className="text-xs bg-slate-50 dark:bg-[#0d1117] p-3 rounded-xl border border-slate-200 dark:border-[#30363d]">
                    <div className="flex items-center justify-between text-slate-500 dark:text-[#8b949e] font-mono mb-1">
                      <span className="font-semibold text-emerald-600 dark:text-[#3fb950]">{entry.phase}</span>
                      <span>{entry.timestamp}</span>
                    </div>
                    <p className="text-slate-700 dark:text-[#c9d1d9] font-sans line-clamp-2">{entry.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
