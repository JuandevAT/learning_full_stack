import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';
import { Terminal as TerminalIcon, Check } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const { language } = useI18n();
  const [activeTab, setActiveTab] = useState<'code' | 'terminal'>('code');
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const fullCommand = 'npm test && git push -u origin main';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTerminalOutput([
            '✓ tests/i18n.test.ts (3 passed) [678ms]',
            '✓ TypeScript strict type-check clean',
            '✓ Build completed in dist/ [1.57s]',
            'To github.com:JuandevAT/learning_full_stack.git',
            '   main -> main (up to date)',
          ]);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-slate-700/80 dark:border-[#30363d] bg-[#0d1117] shadow-2xl text-left font-mono">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
        </div>

        {/* Tab switchers */}
        <div className="flex items-center space-x-1 text-xs">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 rounded-md transition-colors ${
              activeTab === 'code'
                ? 'bg-[#1c2128] text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            devpath.ts
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1 rounded-md transition-colors flex items-center space-x-1 ${
              activeTab === 'terminal'
                ? 'bg-[#1c2128] text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>zsh</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-500">Node v24</div>
      </div>

      {/* Content Area */}
      {activeTab === 'code' ? (
        <div className="p-4 flex text-xs sm:text-[13px] leading-6 overflow-x-auto text-slate-200">
          {/* Line Numbers */}
          <div className="select-none text-slate-600 mr-4 text-right">
            {lines.map((n) => (
              <div key={n}>{n}</div>
            ))}
          </div>

          {/* Syntax Highlighted Code */}
          <pre className="whitespace-pre">
            <code>
              <span className="text-slate-500">// {language === 'es' ? 'Plan Maestro v7 — Construcción directa' : 'Plan Maestro v7 — Direct build'}</span>{'\n'}
              <span className="text-rose-400">const</span> <span className="text-sky-300">developer</span> = {'{'}{'\n'}
              {'  '}<span className="text-amber-300">name</span>: <span className="text-emerald-400">"Juan"</span>,{'\n'}
              {'  '}<span className="text-amber-300">goal</span>: <span className="text-emerald-400">"Junior Full Stack"</span>,{'\n'}
              {'  '}<span className="text-amber-300">pace</span>: <span className="text-emerald-400">"7h/week max"</span>,{'\n'}
              {'  '}<span className="text-amber-300">budget</span>: <span className="text-emerald-400">"$0 USD"</span>,{'\n'}
              {'  '}<span className="text-amber-300">evidence</span>: <span className="text-purple-400">true</span>,{'\n'}
              {'}'};{'\n\n'}
              <span className="text-purple-400">await</span> <span className="text-sky-300">startDailySession</span>({'{'} <span className="text-amber-300">minutes</span>: <span className="text-emerald-400">60</span> {'}'});{'\n'}
              <span className="text-slate-500">// → {language === 'es' ? 'micro-entregable verificado' : 'verified micro-deliverable'} ✓</span>
            </code>
          </pre>
        </div>
      ) : (
        <div className="p-4 text-xs sm:text-[13px] leading-6 min-h-[260px] flex flex-col justify-between text-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 mb-2">
              <span className="text-emerald-400 font-bold">juan@endeavouros</span>
              <span>:</span>
              <span className="text-sky-400">~/learnfullstack</span>
              <span className="text-slate-500">(main)</span>
            </div>

            <div className="flex items-center space-x-1.5 text-slate-100 font-semibold">
              <span className="text-emerald-400">$</span>
              <span>{typedCommand}</span>
              <span className="dp-caret" />
            </div>

            <div className="mt-3 space-y-1">
              {terminalOutput.map((out, i) => (
                <div key={i} className="text-slate-300 flex items-center space-x-1.5">
                  {out.startsWith('✓') ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <span className="text-slate-500">→</span>
                  )}
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
            <span>Branch: main (Clean)</span>
            <span className="text-emerald-400 font-bold">PASS 3/3</span>
          </div>
        </div>
      )}
    </div>
  );
};
