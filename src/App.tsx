import React, { useState } from 'react';
import { I18nProvider, useI18n } from './i18n';
import { ThemeProvider } from './theme';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { RoadmapView } from './components/RoadmapView';
import { StudyTimerView } from './components/StudyTimerView';

import compEn from './content/competencies.en.json';
import compEs from './content/competencies.es.json';
import modEn from './content/modules.en.json';
import modEs from './content/modules.es.json';
import { Competency, Module } from './types';
import { GitBranch, Heart, Terminal, ShieldCheck } from 'lucide-react';

const AppContent: React.FC = () => {
  const { language, t } = useI18n();
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'roadmap' | 'timer'>('dashboard');

  const competencies: Competency[] = (language === 'es' ? compEs : compEn) as Competency[];
  const modules: Module[] = (language === 'es' ? modEs : modEn) as Module[];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fa] dark:bg-[#0d1117] text-[#1f2328] dark:text-[#e6edf3] font-sans transition-colors duration-200 dp-grid-bg">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentTab === 'dashboard' && (
          <DashboardView
            competencies={competencies}
            onNavigateRoadmap={() => setCurrentTab('roadmap')}
            onNavigateTimer={() => setCurrentTab('timer')}
          />
        )}

        {currentTab === 'roadmap' && (
          <RoadmapView competencies={competencies} modules={modules} />
        )}

        {currentTab === 'timer' && <StudyTimerView />}
      </main>

      {/* Developer Footer */}
      <footer className="border-t border-slate-200 dark:border-[#30363d] bg-white/70 dark:bg-[#161b22]/70 backdrop-blur-md py-8 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-600 dark:text-[#8b949e]">
            {/* Left Brand & Status */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <div className="h-6 w-6 inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-[#30363d] bg-slate-100 dark:bg-[#0d1117] text-xs font-bold text-emerald-600 dark:text-[#3fb950]">
                {'</>'}
              </div>
              <span className="font-bold text-slate-800 dark:text-[#e6edf3]">DevPath Academy</span>
              <span className="text-slate-400 dark:text-[#30363d]">•</span>
              <span className="text-emerald-600 dark:text-[#3fb950] font-semibold flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('status.zeroBudget')}</span>
              </span>
              <span className="text-slate-400 dark:text-[#30363d]">•</span>
              <span className="text-slate-500 dark:text-[#8b949e]">Phase 1: Foundation</span>
            </div>

            {/* Right Links & Environment Badge */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <a
                href="https://github.com/JuandevAT/learning_full_stack"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-[#30363d] bg-slate-50 dark:bg-[#0d1117] hover:border-emerald-500/50 dark:hover:border-[#3fb950]/50 hover:text-emerald-600 dark:hover:text-[#3fb950] transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5 text-emerald-500 dark:text-[#3fb950]" />
                <span>JuandevAT/learning_full_stack</span>
              </a>

              <div className="flex items-center space-x-1.5 text-slate-500 dark:text-[#8b949e]">
                <Terminal className="w-3.5 h-3.5 text-emerald-500 dark:text-[#3fb950]" />
                <span>Crafted on EndeavourOS</span>
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                <span className="dp-caret" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
