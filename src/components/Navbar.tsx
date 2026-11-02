import React from 'react';
import { useI18n } from '../i18n';
import { useTheme } from '../theme';
import { LayoutDashboard, Map, Timer, Globe, Sun, Moon, GitBranch } from 'lucide-react';

interface NavbarProps {
  currentTab: 'dashboard' | 'roadmap' | 'timer';
  setCurrentTab: (tab: 'dashboard' | 'roadmap' | 'timer') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { language, setLanguage, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-[#30363d] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand with Terminal Badge Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentTab('dashboard')}
          >
            <div className="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-[#30363d] bg-slate-100 dark:bg-[#161b22] font-mono font-bold text-emerald-600 dark:text-[#3fb950] shadow-[0_0_16px_rgba(63,185,80,0.2)] group-hover:scale-105 transition-transform">
              {'</>'}
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-[#e6edf3]">
                  Dev<span className="text-emerald-500 dark:text-[#3fb950]">Path</span>
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase ml-1">
                  Academy
                </span>
              </div>
              <span className="hidden sm:block text-[11px] font-mono text-slate-500 dark:text-[#8b949e]">
                {t('brand.subtitle')}
              </span>
            </div>
          </div>

          {/* Navigation Links with Bottom Glow Line */}
          <nav aria-label="Main Navigation" className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentTab('dashboard')}
              className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'dashboard'
                  ? 'text-emerald-600 dark:text-[#3fb950] font-semibold'
                  : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] hover:bg-slate-100 dark:hover:bg-[#1c2128]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t('nav.dashboard')}</span>
              {currentTab === 'dashboard' && (
                <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-emerald-500 dark:bg-[#3fb950] shadow-[0_0_10px_rgba(63,185,80,0.8)]" />
              )}
            </button>

            <button
              onClick={() => setCurrentTab('roadmap')}
              className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'roadmap'
                  ? 'text-emerald-600 dark:text-[#3fb950] font-semibold'
                  : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] hover:bg-slate-100 dark:hover:bg-[#1c2128]'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>{t('nav.roadmap')}</span>
              {currentTab === 'roadmap' && (
                <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-emerald-500 dark:bg-[#3fb950] shadow-[0_0_10px_rgba(63,185,80,0.8)]" />
              )}
            </button>

            <button
              onClick={() => setCurrentTab('timer')}
              className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'timer'
                  ? 'text-emerald-600 dark:text-[#3fb950] font-semibold'
                  : 'text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] hover:bg-slate-100 dark:hover:bg-[#1c2128]'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{t('nav.studySession')}</span>
              {currentTab === 'timer' && (
                <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-emerald-500 dark:bg-[#3fb950] shadow-[0_0_10px_rgba(63,185,80,0.8)]" />
              )}
            </button>
          </nav>

          {/* Controls: Repo link, Theme & Language Selector */}
          <div className="flex items-center space-x-2">
            {/* GitHub repo quick link */}
            <a
              href="https://github.com/JuandevAT/learning_full_stack"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
              className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#30363d] bg-slate-100/70 dark:bg-[#161b22] text-xs font-mono text-slate-700 dark:text-[#8b949e] hover:text-emerald-600 dark:hover:text-[#3fb950] transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>JuandevAT</span>
            </a>

            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={t('theme.toggle')}
              title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
              className="p-2 rounded-lg text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3] bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-100 dark:bg-[#161b22] rounded-lg p-0.5 border border-slate-200 dark:border-[#30363d] font-mono text-xs">
              <Globe className="w-3.5 h-3.5 text-slate-400 dark:text-[#8b949e] ml-1.5 mr-1" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-emerald-600 dark:bg-[#3fb950] text-white dark:text-[#0d1117]'
                    : 'text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                  language === 'es'
                    ? 'bg-emerald-600 dark:bg-[#3fb950] text-white dark:text-[#0d1117]'
                    : 'text-slate-500 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-[#e6edf3]'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
