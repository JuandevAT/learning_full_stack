# ADR 0001: Initial Tech Stack for DevPath Academy (Plan Maestro v7)

## Status
Approved for Phase 1.

## Context
Under Plan Maestro v7, DevPath Academy is constructed directly as a functional web application from the very first increment. The goal is to provide a clean, modern, and rapid development workflow that:
1. Boots immediately on the local development machine (`npm run dev`) with zero backend friction during initial phases.
2. Allows the user to learn from a production-grade, highly readable TypeScript codebase.
3. Implements the core competency engine, responsive UI, 60-minute study session timer, SRS reviews, and bilingual support (EN/ES).
4. Strictly adheres to the Zero Budget ($0 USD) rule.

## Decision
Adopt **Vite + React 19 + TypeScript + Tailwind CSS + Vitest** as the initial stack for Phase 1:
- **Build tool:** Vite for sub-second hot module replacement (HMR) and lightweight configuration.
- **UI Framework:** React with typed functional components and custom hooks for local persistence.
- **Styling:** Tailwind CSS for rapid, maintainable, responsive, and accessible styling.
- **Icons:** Lucide React for consistent, lightweight UI iconography.
- **Domain & State:** Pure TypeScript domain models with client-side state saved to `localStorage` (with JSON backup/export).
- **Testing:** Vitest for instant unit testing of domain calculations, SRS scheduling, and i18n key parity.

## Consequences
- No complex monorepo tooling or database servers are required to launch Phase 1.
- Backend services (Express, Prisma, PostgreSQL) will be introduced in Phase 5 as an organic evolution when server-side persistence and multi-device authentication are needed.
