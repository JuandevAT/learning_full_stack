import React, { useState } from 'react';
import { useI18n } from '../i18n';
import { Competency, Module, MasteryState } from '../types';
import { CheckCircle2, Clock, CircleDot, Award, ArrowUpRight, Filter, BookOpen } from 'lucide-react';

interface RoadmapViewProps {
  competencies: Competency[];
  modules: Module[];
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ competencies, modules }) => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<string>('all');

  const getStatusBadge = (status: MasteryState) => {
    switch (status) {
      case 'mastered':
        return (
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#d2a8ff]/15 text-[#d2a8ff] border border-[#d2a8ff]/30">
            <Award className="w-3.5 h-3.5" />
            <span>{t('dashboard.mastered')}</span>
          </span>
        );
      case 'demonstrated':
        return (
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 dark:bg-[#3fb950]/15 text-emerald-700 dark:text-[#7ee787] border border-emerald-500/30 dark:border-[#3fb950]/40">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t('dashboard.demonstrated')}</span>
          </span>
        );
      case 'in_practice':
        return (
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/15 dark:bg-[#79c0ff]/15 text-sky-700 dark:text-[#79c0ff] border border-sky-500/30 dark:border-[#79c0ff]/40">
            <Clock className="w-3.5 h-3.5" />
            <span>{t('dashboard.inPractice')}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-[#21262d] text-slate-500 dark:text-[#8b949e] border border-slate-200 dark:border-[#30363d]">
            <CircleDot className="w-3.5 h-3.5" />
            <span>{t('dashboard.notStarted')}</span>
          </span>
        );
    }
  };

  const filteredCompetencies = competencies.filter((comp) => {
    if (filter === 'all') return true;
    return comp.status === filter;
  });

  return (
    <div className="space-y-8 animate-fadeIn text-left">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-[#3fb950]/10 text-emerald-700 dark:text-[#7ee787] text-xs font-mono font-semibold mb-2 border border-emerald-500/25 dark:border-[#3fb950]/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PLAN MAESTRO V7 // CURRICULUM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[#e6edf3]">
            {t('roadmap.title')}
          </h1>
          <p className="text-slate-600 dark:text-[#8b949e] mt-1 text-sm sm:text-base">
            {t('roadmap.subtitle')}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-2 bg-white dark:bg-[#161b22] p-1.5 rounded-xl border border-slate-200 dark:border-[#30363d] shadow-xs">
          <Filter className="w-4 h-4 text-slate-400 dark:text-[#8b949e] ml-2" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent text-sm font-medium text-slate-700 dark:text-[#e6edf3] outline-none pr-3 cursor-pointer"
          >
            <option value="all" className="bg-white dark:bg-[#161b22] text-slate-800 dark:text-[#e6edf3]">{t('roadmap.allPhases')}</option>
            <option value="in_practice" className="bg-white dark:bg-[#161b22] text-slate-800 dark:text-[#e6edf3]">{t('dashboard.inPractice')}</option>
            <option value="demonstrated" className="bg-white dark:bg-[#161b22] text-slate-800 dark:text-[#e6edf3]">{t('dashboard.demonstrated')}</option>
            <option value="not_started" className="bg-white dark:bg-[#161b22] text-slate-800 dark:text-[#e6edf3]">{t('dashboard.notStarted')}</option>
          </select>
        </div>
      </div>

      {/* Modules and Competency Cards */}
      <div className="space-y-6">
        {modules.map((mod) => {
          const modCompetencies = filteredCompetencies.filter((c) => c.moduleId === mod.id);
          if (modCompetencies.length === 0 && filter !== 'all') return null;

          return (
            <div
              key={mod.id}
              className="rounded-2xl border border-slate-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] overflow-hidden shadow-xs"
            >
              <div className="bg-slate-50 dark:bg-[#1c2128] px-6 py-4 border-b border-slate-200 dark:border-[#30363d] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-[#3fb950]">
                    // Phase {mod.phase}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#e6edf3] mt-0.5">
                    {mod.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#8b949e] max-w-md">{mod.description}</p>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-[#21262d]">
                {modCompetencies.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-6 hover:bg-slate-50 dark:hover:bg-[#1c2128]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-[#e6edf3] group-hover:text-emerald-600 dark:group-hover:text-[#7ee787] transition-colors">
                          {comp.name}
                        </h3>
                        {getStatusBadge(comp.status)}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-[#8b949e] leading-relaxed">
                        {comp.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{t('roadmap.skills')}:</span>
                        {comp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#e6edf3] border border-slate-200 dark:border-[#30363d]"
                          >
                            ${' '}{skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex md:flex-col items-end justify-between md:justify-center shrink-0">
                      <span className="text-xs font-mono text-slate-400 dark:text-[#8b949e] mb-1">
                        {comp.id}
                      </span>
                      <button className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 dark:text-[#3fb950] hover:text-emerald-500 dark:hover:text-[#7ee787] transition-colors cursor-pointer">
                        <span>{t('roadmap.viewDetails')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
