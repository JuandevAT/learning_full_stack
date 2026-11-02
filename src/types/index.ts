export type Language = 'en' | 'es';

export type MasteryState = 'not_started' | 'in_practice' | 'demonstrated' | 'mastered';

export interface Competency {
  id: string;
  moduleId: string;
  phase: number;
  name: string;
  description: string;
  prerequisites: string[];
  status: MasteryState;
  skills: string[];
}

export interface Module {
  id: string;
  phase: number;
  title: string;
  description: string;
  order: number;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  modules: Module[];
}

export interface StudySession {
  id: string;
  timestamp: string;
  durationMinutes: number;
  phaseStep: 'recall' | 'theory' | 'practice' | 'log';
  notes: string;
}

export interface UserProgress {
  interfaceLanguage: Language;
  contentLanguage: Language;
  streakDays: number;
  competencyStatuses: Record<string, MasteryState>;
  recentSessions: StudySession[];
}
