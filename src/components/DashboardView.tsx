import React from 'react';
import { useI18n } from '../i18n';
import { Competency } from '../types';
import { TerminalPreview } from './TerminalPreview';
import { Flame, CheckCircle2, Clock, ArrowRight, BookOpen, Layers, Award, Terminal as TerminalIcon } from 'lucide-react';

interface DashboardViewProps {
  competencies: Competency[];
  onNavigateRoadmap: () => void;
  onNavigateTimer: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  competencies,
  onNavigateRoadmap,
  onNavigateTimer,
}) => {
  const { t } = useI18n();

  const total = competencies.length;
  const inPractice = competencies.filter((c) => c.status === 'in_practice').length;
  const demonstrated = competencies.filter((c) => c.status === 'demonstrated').length;
  const mastered = competencies.filter((c) => c.status === 'mastered').length;
  const notStarted = competencies.filter((c) => c.status === 'not_started').length;

  const statCards = [
    {
      icon: Flame,
      value: '1',
      label: t('dashboard.streak'),
      unit: t('dashboard.days'),
      color: '#ffa657',
      bg: 'rgba(255, 166, 87, 0.1)',
      border: 'rgba(255, 166, 87, 0.3)',
    },
    {
      icon: Layers,
      value: total.toString(),
      label: t('dashboard.totalCompetencies'),
      unit: 'curriculum',
      color: '#79c0ff',
      bg: 'rgba(121, 192, 255, 0.1)',
      border: 'rgba(121, 192, 255, 0.3)',
    },
    {
      icon: Clock,
      value: inPractice.toString(),
      label: t('dashboard.inPractice'),
      unit: 'active focus',
      color: '#f1e05a',
      bg: 'rgba(241, 224, 90, 0.1)',
      border: 'rgba(241, 224, 90, 0.3)',
    },
    {
      icon: CheckCircle2,
      value: demonstrated.toString(),
      label: t('dashboard.demonstrated'),
      unit: 'verified',
      color: '#3fb950',
      bg: 'rgba(63, 185, 80, 0.1)',
      border: 'rgba(63, 185, 80, 0.3)',
    },
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* ─────────────── HERO SECTION (Developer Grid + Terminal) ─────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] shadow-xl dp-hero-glow">
        {/* Subtle grid pattern background */}
        <div
          className="dp-grid-bg absolute inset-0 opacity-40 dark:opacity-25 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          {/* Left Column: Greeting, Mission, CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 dark:border-[#3fb950]/40 bg-emerald-500/10 dark:bg-[#3fb950]/10 px-3.5 py-1.5 font-mono text-xs text-emerald-700 dark:text-[#7ee787]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-[#3fb950]" aria-hidden="true" />
              <span>$ git status: {t('dashboard.currentPhase')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#e6edf3] leading-[1.15]">
              {t('dashboard.welcome')}
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-[#8b949e]">
              {t('dashboard.heroSubtitle')}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateTimer}
                className="group inline-flex items-center space-x-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 dark:bg-[#3fb950] dark:hover:bg-[#7ee787] px-6 py-3 text-sm font-bold text-white dark:text-[#0d1117] transition-all hover:shadow-[0_0_24px_rgba(63,185,80,0.45)] cursor-pointer"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>{t('dashboard.startSession')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onNavigateRoadmap}
                className="inline-flex items-center space-x-2 rounded-xl border border-slate-300 dark:border-[#30363d] bg-slate-100/80 dark:bg-[#21262d] px-5 py-3 text-sm font-semibold text-slate-800 dark:text-[#e6edf3] hover:border-emerald-500/50 dark:hover:border-[#3fb950]/50 hover:text-emerald-600 dark:hover:text-[#3fb950] transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t('dashboard.exploreRoadmap')}</span>
              </button>
            </div>

            {/* Micro Commit Badge */}
            <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-slate-500 dark:text-[#8b949e]">
              <span>• Max 7 h/week</span>
              <span>• USD 0 Budget</span>
              <span>• AI Optional</span>
            </div>
          </div>

          {/* Right Column: Code & Terminal Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <TerminalPreview />
          </div>
        </div>
      </section>

      {/* ─────────────── STATS CARDS GRID ─────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {statCards.map((s, idx) => (
          <div
            key={idx}
            className="dp-card-hover rounded-2xl border border-slate-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] p-5 shadow-xs transition-all"
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{ color: s.color, borderColor: s.border, backgroundColor: s.bg }}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-[#8b949e]">
                {s.unit}
              </span>
            </div>

            <div className="mt-4 flex items-baseline space-x-2">
              <span className="font-mono text-3xl font-extrabold text-slate-900 dark:text-[#e6edf3]">
                {s.value}
              </span>
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500 dark:text-[#8b949e]">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ─────────────── MASTERY PROGRESSION METER ─────────────── */}
      <section className="rounded-2xl border border-slate-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-[#e6edf3] flex items-center space-x-2">
              <Award className="w-4 h-4 text-emerald-500 dark:text-[#3fb950]" />
              <span>{t('dashboard.progressSummary')}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-[#8b949e] mt-0.5">
              Domain mastery gate: not_started → in_practice → demonstrated → mastered
            </p>
          </div>

          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#3fb950]/10 text-emerald-700 dark:text-[#7ee787] border border-emerald-500/20 dark:border-[#3fb950]/30 self-start sm:self-auto">
            {Math.round(((demonstrated + mastered) / total) * 100)}% Verified
          </span>
        </div>

        {/* Glow Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-[#21262d] rounded-full h-3 overflow-hidden flex shadow-inner">
          <div
            className="bg-emerald-500 dark:bg-[#3fb950] h-full shadow-[0_0_12px_rgba(63,185,80,0.6)] transition-all duration-500"
            style={{ width: `${(demonstrated / total) * 100}%` }}
            title={`Demonstrated: ${demonstrated}`}
          />
          <div
            className="bg-sky-400 dark:bg-[#79c0ff] h-full transition-all duration-500"
            style={{ width: `${(inPractice / total) * 100}%` }}
            title={`In Practice: ${inPractice}`}
          />
          <div
            className="bg-purple-400 dark:bg-[#d2a8ff] h-full transition-all duration-500"
            style={{ width: `${(mastered / total) * 100}%` }}
            title={`Mastered: ${mastered}`}
          />
          <div
            className="bg-slate-300 dark:bg-[#30363d] h-full transition-all duration-500"
            style={{ width: `${(notStarted / total) * 100}%` }}
            title={`Not Started: ${notStarted}`}
          />
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-[#8b949e]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-[#3fb950] inline-block" />
            <span>{t('dashboard.demonstrated')}: <strong className="text-slate-800 dark:text-[#e6edf3]">{demonstrated}</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-sky-400 dark:bg-[#79c0ff] inline-block" />
            <span>{t('dashboard.inPractice')}: <strong className="text-slate-800 dark:text-[#e6edf3]">{inPractice}</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-purple-400 dark:bg-[#d2a8ff] inline-block" />
            <span>{t('dashboard.mastered')}: <strong className="text-slate-800 dark:text-[#e6edf3]">{mastered}</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-[#30363d] inline-block" />
            <span>{t('dashboard.notStarted')}: <strong className="text-slate-800 dark:text-[#e6edf3]">{notStarted}</strong></span>
          </div>
        </div>
      </section>
    </div>
  );
};
